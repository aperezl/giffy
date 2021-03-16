import ListOfGifs from './components/ListOfGifs'
import { Route } from 'wouter'
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {
  return (

    <ChakraProvider className="App">
      <Route path="/">Home</Route>      
      <Route component={ListOfGifs} path='/search/:keyword' />
      <Route component={ListOfGifs} path='/gif/:id' />
    </ChakraProvider>
  );
}