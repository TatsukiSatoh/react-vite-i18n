import {Suspense} from "react"
import './App.css'
import "./i18n/config";
import Test from "./components/test"

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense>
    </>
  )
}

export default App
