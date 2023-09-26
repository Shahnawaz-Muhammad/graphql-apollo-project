import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Profile from "./pages/profile";
import ProtectedRoute from "./utils/protectedRoutes";
import PublicRoute from "./utils/publicRoutes";
// import AddProduct from "./components/add-product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/add-product" element={<AddProduct />}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
