import { useState } from 'react'

const GIFS = [
  'gif1',
  'gif2',
]
function App() {

  const [gifs, setGifs] = useState(GIFS)
  return (
    <div className="App">
       {
         gifs.map(gif => <p>{gif}</p>)
       }
    </div>
  );
}

export default App;
