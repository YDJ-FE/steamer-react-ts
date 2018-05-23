/**
 * axios封装的http请求
 */

import axios, { AxiosResponse } from 'axios'
import * as md5 from 'blueimp-md5'
import * as qs from 'qs'
import ENVCONFIG from 'env'

enum HTTPERROR {
    LOGICERROR,
    TIMEOUTERROR,
    NETWORKERROR
}


const isSuccess = res =>
    res.code !== undefined && res.code !== null && Number(res.code) === 1

const resFormat = res => res.response || res.data || {}

const http: HttpResquest = {}

const methods = ['get', 'post', 'put', 'delete']

methods.forEach(method => {
    http[method] = (
        url: string,
        data: PlainObject,
        options?: HttpRequestOptions
    ): Promise<IHttpResponse | PlainObject> => {
        const opts: HttpRequestOptions = Object.assign(
            {
                baseUrl: ENVCONFIG.apiUrlPrefix,   // 默认apiUrl前缀使用环境配置，特殊接口可以通过httpRequestOptions覆盖
                formatResponse: true,
            },
            options || {}
        )

        const axiosConfig: AxiosRequestConfig = {
            method,
            url,
            baseURL: opts.baseUrl,
            withCredentials: true,  // 如果不需要带cookie请求， 请注释
        }

        const requestInstance = axios.create()

        // 创建axios实例，配置全局追加请求参数
        requestInstance.interceptors.request.use(
            (cfg: AxiosRequestConfig) => {
                const ts = Date.now() / 1000
                const queryData = {
                    ts
                }
                cfg.params = Object.assign({}, cfg.params || {}, queryData)
                return cfg
            },
            error => Promise.reject(error)
        )

        // 全局请求错误拦截
        requestInstance.interceptors.response.use(
            response => response,
            error => {
                const errorDetail: IHttpError = {
                    msg: error.message || '网络故障',
                    type: /^timeout of/.test(error.message)
                        ? HTTPERROR[HTTPERROR.TIMEOUTERROR]
                        : HTTPERROR[HTTPERROR.NETWORKERROR],
                    config: error.config
                }
                // cbNetworkError && cbNetworkError.call(null, _err);
                return Promise.reject(errorDetail)
            }
        )

        // 参数传递方式
        if (method === 'get') {
            axiosConfig.params = data
        } else if (data instanceof FormData) {
            axiosConfig.data = data
        } else {
            axiosConfig.data = qs.stringify(data)
        }

        return requestInstance
            .request<IHttpResponse>(axiosConfig)
            .then(response => {
                let rdata: IHttpResponse
                if (
                    typeof response.data === 'object' &&
                    Array.isArray(response.data)
                ) {
                    rdata = response.data[0]
                } else {
                    rdata = response.data
                }
                if (!opts.formatResponse) {
                    return rdata
                }
                if (!isSuccess(rdata)) {
                    const errorDetail: IHttpError = {
                        msg: rdata.msg,
                        code: rdata.code,
                        type: HTTPERROR[HTTPERROR.LOGICERROR],
                        config: response.config
                    }
                    return Promise.reject(errorDetail)
                }
                return resFormat(rdata)
            })
            .catch((err: IHttpError) => {
                if(opts.onError) {
                    options.onError(err)
                }
                return Promise.reject(err)
            })
    }
})

export default http
