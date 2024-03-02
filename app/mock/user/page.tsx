import { getAllUser, getCurrentUser } from "@/services/user";
import React from "react";
import AdminPermission from "../_components/AdminPermission";

const UserPage = async () => {
  const users = await getAllUser();
  const currentUser = await getCurrentUser();
  return (
    <section className="container">
      <AdminPermission users={users!} {...currentUser!} />
    </section>
  );
};

export default UserPage;
