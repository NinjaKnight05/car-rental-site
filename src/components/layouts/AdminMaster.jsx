import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";

export default function AdminMaster(){
    return(
        <>
        <AdminHeader/>
        <Outlet/>
        <Footer/>
        </>
    )
}