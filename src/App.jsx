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
import NotFound from "./assets/components/Not Found-404/NotFound";
import Men from "./assets/components/Products Data Section/Men";
import AllProducts from "./assets/components/Products Data Section/AllProducts";
import Women from "./assets/components/Products Data Section/Women";
import Accessories from "./assets/components/Products Data Section/Accessories";
import Cart from "./assets/components/Cart Section/Cart";


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
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart/>} />

        {/* Shop Route and Product Category */}
        <Route path="shop" element={<Shop />}>
          <Route index element={<AllProducts />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="accessories" element={<Accessories />} />
        </Route>

        {/* Admin Route and Dashboard Category */}
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
