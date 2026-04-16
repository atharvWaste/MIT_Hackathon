import { Routes, Route } from "react-router-dom";
import Home from "./home/homeBox.jsx";
import SignIn from "./Signin/SignBox.jsx";
import Sign_up_Box from "./Sign_up/Sign_up.jsx";
import DestopBox from "./Dasktop/DestopBox.jsx";
import  GTA from "./VideoPages/GTA.jsx";
import  Valorant from "./VideoPages/Valorant.jsx";
import  Minecraft from "./VideoPages/Minecraft.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<Sign_up_Box />} />
      <Route path="/Sign_up" element={<SignIn />} />
      <Route path="/Desktop" element={<DestopBox />} />
      <Route path="/GTA" element={<GTA />} />
      <Route path="/Valorant" element={<Valorant />} />
      <Route path="/Minecraft" element={<Minecraft />} />
    </Routes>
  );
}

export default App;
