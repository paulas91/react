import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
  const [counter, setCounter] = React.useState( 0)
  return(
    <div>
      <h1>This is react app</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

document.addEventListener( 'turbo:load', () => {
  const container = document.getElementById('react-app')
  const container2 = document.getElementById('react-app2')
  const container3 = document.getElementById('react-app3')
  const root = ReactDom.createRoot(container)
  const root2 = ReactDom.createRoot(container2)
  const root3 = ReactDom.createRoot(container3)
  root.render(<App />)
  root2.render(<App />)
  root3.render(<App />)
})
