import { Routes, Route } from "react-router-dom";
import Home from "./home/homeBox.jsx";
import SignIn from "./Signin/SignBox.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;