import { Routes, Route } from "react-router-dom";
import Home from "./home/homeBox.jsx";
import SignIn from "./Signin/SignBox.jsx";
import Sign_up_Box from "./Sign_up/Sign_up.jsx";
import DestopBox from "./Destop/DestopBox.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<Sign_up_Box />} />
      <Route path="/Sign_up" element={<SignIn />} />
      <Route path="/Destop" element={<DestopBox />}/>
    </Routes>
  );
}

export default App;