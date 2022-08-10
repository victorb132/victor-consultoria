import * as prismic from '@prismicio/client'

export const repositoryName = 'https://victor-consultoria.prismic.io/api/v2'

export const client = prismic.createClient(repositoryName, {
  accessToken:
    'MC5ZdkttLXhBQUFDSUF5V1A0.77-9Ve-_ve-_ve-_ve-_vT1A77-9D--_vR3vv71ofe-_vQUwOAnvv712Z--_vShF77-9R17vv70s77-9',
})

console.log('client', client)
