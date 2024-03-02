import React from "react";
import { getAllUser } from "@/services/user";
import AdminPermission from "./_components/AdminPermission";

const mock = async () => {
  const users = await getAllUser();

  return (
    <section className="container">
      {users?.map((user) => (
        <AdminPermission key={user.id} {...user} />
      ))}
    </section>
  );
};

export default mock;
