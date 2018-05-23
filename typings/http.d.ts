import * as axios from 'axios'

declare global {
    interface AxiosRequestConfig extends axios.AxiosRequestConfig {
        startTime?: Date
    }

    interface IHttpError {
        msg: string
        type: string
        config: AxiosRequestConfig
        code?: number
    }

    interface IHttpResponse {
        code: number
        response: PlainObject | string | number
        msg: string
    }

    interface HttpResquest {
        /**
         * get请求
         * 
         * @param {string} url 接口地址（不带域名）
         * @param {PlainObject} data 接口参数
         * @param {HttpRequestOptions} [options] http模块的请求选项
         * @returns {Promise<IHttpResponse>} 
         * @memberof HttpResquest
         */
        get?(url: string, data: PlainObject, options?: HttpRequestOptions): Promise<IHttpResponse>
        
        /**
         * post请求
         * 
         * @param {string} url 接口地址（不带域名）
         * @param {PlainObject} data 接口参数
         * @param {HttpRequestOptions} [options] http模块的请求选项
         * @returns {Promise<IHttpResponse>} 
         * @memberof HttpResquest
         */
        post?(url: string, data: PlainObject, options?: HttpRequestOptions): Promise<IHttpResponse>
        /**
         * delete请求
         * 
         * @param {string} url 接口地址（不带域名）
         * @param {PlainObject} data 接口参数
         * @param {HttpRequestOptions} [options] http模块的请求选项
         * @returns {Promise<IHttpResponse>} 
         * @memberof HttpResquest
         */
        delete?(url: string, data: PlainObject, options?: HttpRequestOptions): Promise<IHttpResponse>
        /**
         * put请求
         * 
         * @param {string} url 接口地址（不带域名）
         * @param {PlainObject} data 接口参数
         * @param {HttpRequestOptions} [options] http模块的请求选项
         * @returns {Promise<IHttpResponse>} 
         * @memberof HttpResquest
         */
        put?(url: string, data: PlainObject, options?: HttpRequestOptions): Promise<IHttpResponse>
    }

    interface HttpRequestOptions {
        /**
         * 请求接口的path前缀，默认使用环境设置的apiUrlPrefix
         * 
         * @type {string}
         * @memberof HttpRequestOptions
         */
        baseUrl?: string
        /**
         * 是否格式化话输出，默认为true， 如果格式化输入，则成功时候只返回response字段
         * 
         * @type {boolean}
         * @memberof HttpRequestOptions
         */
        formatResponse?: boolean
        /**
         * 错误回调， 默认不做任何处理
         * 
         * @memberof HttpRequestOptions
         */
        onError?: (error: IHttpError) => any
    }
}
