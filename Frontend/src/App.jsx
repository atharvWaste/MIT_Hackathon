import { Routes, Route } from "react-router-dom";
import Home from "./home/homeBox.jsx";
import SignIn from "./Signin/SignBox.jsx";
import Sign_up_Box from "./Sign_up/Sign_up.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<Sign_up_Box />} />
      <Route path="/Sign_up" element={<SignIn />} />
    </Routes>
  );
}

export default App;