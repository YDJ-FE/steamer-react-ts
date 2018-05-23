
/**
 * react-saga 模式
 */
export enum ENUM_ALLOW_MODES {
    RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount',
    DAEMON = '@@saga-injector/daemon',
    ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount',
}