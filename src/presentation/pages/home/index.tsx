import styled from 'styled-components'
import React, { useEffect } from 'react'
import { GetRepositories } from '../../../domain/usecases/get-repositories'

const NeonText = styled.p`
  color: #fff;
  align-self: center;
  font-size: 50px;
  text-align: center;
  opacity: 0.5;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  padding: 10px;
`

interface Props {
  getRepositories: GetRepositories
}

export function Home() {
  const getRepositoriesFunction = async () => {
    const teste = await getRepositories.get({
      username: 'victorb132',
    })

    console.log(teste)
  }

  useEffect(() => {
    getRepositoriesFunction()
  }, [])

  return (
    <Container>
      <NeonText>Este site encontra-se em desenvolvimento</NeonText>
      <NeonText style={{ fontSize: 20 }}>
        para contato: victor96novais@gmail.com
      </NeonText>
    </Container>
  )
}
