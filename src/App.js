import React from "react";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Client from "./components/pages/Client";
import ContactUs from "./components/pages/ContactUs";
import { Rent } from "./components/pages/Rent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./components/layouts/Master";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Signup from './components/auth/Signup';
import Cars from "./components/pages/Cars";
import AdminMaster from "./components/layouts/AdminMaster";
import AdminWelcome from "./components/pages/AdminWelcome";
import AddBrand from "./components/panels/admin/crud/AddBrand";
import AddBooking from "./components/panels/user/category/AddBooking";
import AddRating from "./components/panels/user/category/AddRating";
import ViewUser from "./components/panels/admin/view/ViewUser";
import ManageBrand from "./components/panels/admin/crud/ManageBrand";
import AddCar from "./components/panels/admin/crud/AddCar";
import ManageCar from "./components/panels/admin/crud/ManageCar";
import ViewBooking from "./components/panels/admin/view/ViewBookimg";
import { Price } from "./components/pages/Price";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/client" element={<Client />} />
            <Route path="/price" element={ <Price />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/admin" element={<AdminMaster />}>
          {/* <Route index element={<AdminWelcome />} />  */}
            <Route path="/admin" element={<AdminWelcome />} />
            <Route path="/admin/addbrand" element={<AddBrand/>}/>
            <Route path="/admin/addcar" element={<AddCar/>}/>
            <Route path="/admin/managecar" element={<ManageCar/>}/>x
            <Route path="/admin/managebrand" element={<ManageBrand/>}/>
            <Route path="/admin/addbooking" element={<AddBooking/>}/>
            <Route path="/admin/addrating" element={<AddRating/>}/>
            <Route path="/admin/viewuser" element={<ViewUser/>}/>
            <Route path="/admin/viewbooking" element={<ViewBooking/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
export default App;
