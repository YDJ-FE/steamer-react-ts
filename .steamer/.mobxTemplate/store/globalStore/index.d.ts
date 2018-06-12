import { globalStore as globalStoreModel } from './index'

export as namespace IGlobalStore

export interface globalStore extends globalStoreModel {}

export interface Test {
    hello: string
}
