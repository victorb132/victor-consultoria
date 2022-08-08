import { Repositories } from '../models/repositories'

export namespace GetRepositoriesUseCase {
  export type Params = {
    username: string
  }
}

export interface GetRepositories {
  get(params: GetRepositoriesUseCase.Params): Promise<Repositories>
}
