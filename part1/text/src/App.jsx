import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return(
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>
        plus
      </button>
      <button onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  )

}

export default App