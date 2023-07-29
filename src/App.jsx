import { Route, Routes } from "react-router-dom";
import MainNavber from "./assets/components/header/MainNavber"
import TopNavber from "./assets/components/header/TopNavber"
import Home from "./assets/components/home/Home";
import Footer from "./assets/components/footer/Footer";
import Login from "./assets/components/login/Login";
import Register from "./assets/components/login/Register";



function App() {


  return (
    <>
      <TopNavber />
      <MainNavber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
