import { Routes, Route } from "react-router-dom"
import Home from "./Home/HomeBox.jsx"
import SignIn from "./Signin/SignBox.jsx"

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />

   </Routes>
   )
}

export default App
