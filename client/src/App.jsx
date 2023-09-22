import {  Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Profile from "./pages/profile";

function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/profile" element={<Profile />}/>
      {/* <Route path="/" element={}/> */}
     </Routes>
     <Footer />
    </>
  )
}

export default App
