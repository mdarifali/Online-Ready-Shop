import { Route, Routes } from "react-router-dom";
import MainNavber from "./assets/components/Header Section/MainNavber"
import TopNavber from "./assets/components/Header Section/TopNavber"
import Home from "./assets/components/Home Section/Home";
import Footer from "./assets/components/Footer Section/Footer";
import Login from "./assets/components/Login and Reg Section/Login";
import Register from "./assets/components/Login and Reg Section/Register";
import Contact from "./assets/components/Contact Section/Contact";
import SingleProduct from "./assets/components/Products Data Section/SingleProduct";
import Shop from "./assets/components/Shop Section/Shop";
import AllBlogs from "./assets/components/Blogs Section/AllBlogs";
import MyProfile from "./assets/components/Dashboard Section/MyProfile";
import Dashboard from "./assets/components/Dashboard Section/Dashboard";
import MyOrder from "./assets/components/Dashboard Section/MyOrder";
import NewsLetter from "./assets/components/Home Section/NewsLetter";
import RequireAuth from "./assets/RequireAuth/RequireAuth";
import AddProduct from "./assets/components/Dashboard Section/AddProduct";
import ManageProduct from "./assets/components/Dashboard Section/ManageProduct";
import ManageUser from "./assets/components/Dashboard Section/ManageUser";


function App() {


  return (
    <>
      {/* <TopNavber /> */}
      <MainNavber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/single-porduct/:id' element={<SingleProduct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<AllBlogs />} />

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
        <Route index element={<MyProfile />} />
        <Route path="order" element={<MyOrder />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="manage-product" element={<ManageProduct />} />
        <Route path="manage-user" element={<ManageUser />} />
      </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
