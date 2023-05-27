import { useState } from 'react'
import CardItem from './components/ui/card/card-item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardItem />
      <button className=" lg:container lg:bg-red-300" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
