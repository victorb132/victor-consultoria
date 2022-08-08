import axios, { AxiosResponse } from 'axios'
import {
  HttpGetClientProtocol,
  HttpGetClient,
} from '../../data/protocols/http/http-get-client'

export class AxiosHttpClient implements HttpGetClient {
  async get(params: HttpGetClientProtocol.Params): Promise<any> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.get(params.url, params.body)
    } catch (error: any) {
      axiosResponse = error.response
    }
    return axiosResponse
  }
}
