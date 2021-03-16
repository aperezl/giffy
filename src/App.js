import { Route } from 'wouter'
import { ChakraProvider } from "@chakra-ui/react"
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Details from './pages/Details';

export default function App() {
  return (

    <ChakraProvider className="App">
      <Route component={Home} path="/">Home</Route>      
      <Route component={SearchResult} path='/search/:keyword' />
      <Route component={Details} path='/gif/:id' />
    </ChakraProvider>
  );
}