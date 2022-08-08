export type Repositories = {
  id: number
  name: string
  fullName: string
  owner: {
    id: number
    login: string
  }
  description: string
  url: string
  language: string
  topics: [string]
}
