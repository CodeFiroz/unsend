import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import Messages from "./Pages/Messages"
import Write from "./Pages/Write"

import { BrowserRouter, Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />

       <Routes>
       <Route path="/" element={<Home />}></Route>
        <Route path="/write-message" element={<Write />}></Route>
        <Route path="/:msg" element={<Messages />}></Route>
       </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
