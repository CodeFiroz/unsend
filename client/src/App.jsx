import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import Messages from "./Pages/Messages"
import Write from "./Pages/Write"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write-message" element={<Write />} />
        {/* Dynamic Route */}
        <Route path="/:msg" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
