import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import Register from "./components/Register";
import All from "./components/All"
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<All/>} />
       
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;