/**
 * Saga注入器
 */

import isEmpty from "lodash/isEmpty";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";
import invariant from "invariant";
import conformsTo from "lodash/conformsTo";

import { SagaIterator } from 'redux-saga'


import { ENUM_ALLOW_MODES } from "./constants";

interface ISagaDescriptor {
    saga: SagaIterator,
    mode?: string
}

type InjectSagaFunc = (key: string, sagaDescriptor:ISagaDescriptor, args) => void
type EjectSagaFunc = (key: string) => void

/**
 * 工厂-生成注入Saga函数
 * 
 * @export
 * @param {IStore} store 
 * @returns 
 */
export function injectSagaFactory<T>(store: IStore<T>): InjectSagaFunc {
    return function injectSaga(key: string, descriptor: ISagaDescriptor, args: PlainObject) {

        const newDescriptor = {
            ...descriptor,
            mode: descriptor.mode || ENUM_ALLOW_MODES.RESTART_ON_REMOUNT
        };
        const { saga, mode } = newDescriptor;


        let hasSaga = Reflect.has(store.injectedSagas, key);

        // webpack配置注入‘process.env.NODE_ENV’变量
        if (process.env.NODE_ENV !== "production") {
            const oldDescriptor = store.injectedSagas[key];
            // enable hot reloading of daemon and once-till-unmount sagas
            if (hasSaga && oldDescriptor.saga !== saga) {
                oldDescriptor.task.cancel();
                hasSaga = false;
            }
        }

        if (
            !hasSaga ||
            (hasSaga && mode !== ENUM_ALLOW_MODES.DAEMON && mode !== ENUM_ALLOW_MODES.ONCE_TILL_UNMOUNT)
        ) {
            store.injectedSagas[key] = {
                ...newDescriptor,
                task: store.runSaga(saga, args)
            }; 
        }
    };
}

/**
 * 工厂-生成ejectSaga函数
 * 
 * @export
 * @param {IStore} store 
 * @returns 
 */
export function ejectSagaFactory<T>(store: IStore<T>): EjectSagaFunc {
    return function ejectSaga(key) {

        if (Reflect.has(store.injectedSagas, key)) {
            const descriptor = store.injectedSagas[key];
            if (descriptor.mode !== ENUM_ALLOW_MODES.DAEMON) {
                descriptor.task.cancel();
                // Clean up in production; in development we need `descriptor.saga` for hot reloading
                if (process.env.NODE_ENV === "production") {
                    // Need some value to be able to detect `ONCE_TILL_UNMOUNT` sagas in `injectSaga`
                    store.injectedSagas[key] = null;
                }
            }
        }
    };
}

export default function getInjectors<T>(store: IStore<T>) {
    return {
        injectSaga: injectSagaFactory(store),
        ejectSaga: ejectSagaFactory(store)
    };
}
