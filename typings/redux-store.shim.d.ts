import Redux from "redux";
import { Task, SagaIterator } from "redux-saga";

interface InjectedReducers<T> {
    [key: string]: Redux.Reducer<T>;
}

interface InjectedSagas {
    [key: string]: {
        mode: string;
        saga: SagaIterator;
        task: Task
    };
}

declare global {
    // 扩展Store接口
    interface IStore<T> extends Redux.Store<T> {
        /**
         * 运行一个saga
         *
         * @memberof IStore
         */
        runSaga?: any; // TODO: cleanup
        asyncReducers?: Redux.ReducersMapObject;

        /**
         * 注入的Reducers
         *
         * @type {InjectedReducers}
         * @memberof IStore
         */
        injectedReducers?: InjectedReducers<T>;

        /**
         * 注入的sagas
         *
         * @type {InjectedSagas}
         * @memberof IStore
         */
        injectedSagas?: InjectedSagas;
    }
}
