import React from 'react';
import { Outlet } from "react-router";
import UserSidebar from "../../component/UserSidebar";


const UserLayout = () => {
  return (
    <>
    <UserSidebar/>
    <div className="container py-5">
      <Outlet/>
    </div>
   
    </>
  )
}

export default UserLayout