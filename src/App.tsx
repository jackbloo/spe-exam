import React from "react"
import "./App.css"
import Shop from "./components/shop"
import Gradient from "./components/gradient"

function App() {
  return (
    <div className="App">
      <section>
        <Gradient />
      </section>
      <section>
        <Shop />
      </section>
    </div>
  )
}

export default App
