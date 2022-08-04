import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      flexDirection: 'column',
      backgroundColor: '#ff9e80'
    }}>
        <p style={{
          fontSize: 50,
          alignSelf: 'center',
        }}>
          Este site encontra-se em desenvolvimento
        </p>
        <p style={{
          fontSize: 20,
          alignSelf: 'center',
        }}>
          para contato: victor96novais@gmail.com
        </p>
      <GlobalStyle />
    </div>
  )
}


