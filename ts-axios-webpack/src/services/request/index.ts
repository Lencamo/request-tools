import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class RenRequest {
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    // 响应拦截
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: any) => {
        return error
      }
    )
  }

  request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  get<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default RenRequest
