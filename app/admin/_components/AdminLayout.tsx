"use client";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminContent from "./AdminContent";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    // <AdminRoute>
    <div className="flex">
      <AdminSidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <AdminContent
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      >
        {children}
      </AdminContent>
    </div>
  );
};

export default AdminLayout;
