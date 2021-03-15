import ListOfGifs from './components/ListOfGifs'
import { Route } from 'wouter'

export default function App() {
  return (
    <div className="App">
      <Route path="/">Home</Route>      
      <Route component={ListOfGifs} path='/gif/:keyword' />
    </div>
  );
}