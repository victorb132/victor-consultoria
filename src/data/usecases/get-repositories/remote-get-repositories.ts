/* eslint-disable camelcase */
import {
  GetRepositories,
  GetRepositoriesUseCase,
} from '../../../domain/usecases/get-repositories'
import { Repositories } from '../../../domain/models/repositories'
import { HttpGetClient } from '../../protocols/http/http-get-client'

export class RemoteGetRepositories implements GetRepositories {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient,
  ) {}

  async get({
    username,
  }: GetRepositoriesUseCase.Params): Promise<Repositories> {
    const httpResponse = await this.httpGetClient.get({
      url: `${this.url}/${username}/repos`,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const { id, name, full_name, owner, description, url, language, topics } =
      httpResponse.response

    return {
      id,
      name,
      fullName: full_name,
      owner,
      description,
      url,
      language,
      topics,
    }
  }
}
