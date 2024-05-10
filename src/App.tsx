import './App.css'

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/routes/Ruteo";


function App() {

  return (
    <>
      <div>
      <BrowserRouter>
          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
