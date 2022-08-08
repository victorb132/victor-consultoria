export namespace HttpGetClientProtocol {
  export type Params = {
    url: string
    body?: any
    headers?: {
      [key: string]: string
    }
  }
}

export interface HttpGetClient {
  get: (params: HttpGetClientProtocol.Params) => Promise<any>
}
