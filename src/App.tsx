import { ChakraProvider } from '@chakra-ui/react'
import Home from './Pages/Home/home'

function App() {

  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  )
}

export default App