import {  Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";

function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/" element={<Signup />}/>
      {/* <Route path="/" element={}/> */}
     </Routes>
     <Footer />
    </>
  )
}

export default App
