import React from "react";
import AdminSidebar from "./_components/AdminSidebar";
import AdminSearchBar from "./_components/AdminSearchBar";
import AdminDashboard from "./_components/AdminDashboard";

const AdminPage = () => {
  
  
  return (
   <>
    <div>
    <AdminSidebar/>
    <AdminSearchBar/>
    <AdminDashboard/>
    </div>
   </>
  );
};

export default AdminPage;
