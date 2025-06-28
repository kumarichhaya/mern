import React from 'react';
import Siderbar from '../../component/Sidebar';
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
    <Siderbar/>
    <div className="container py-5 m-2">
      <Outlet/>
    </div>
    </>
  )
}

export default AdminLayout