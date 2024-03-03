import React from "react";
import { getAllUser, getCurrentUser } from "@/services/user";
import AdminPermission from "./_components/AdminPermission";
import { Admin } from "@prisma/client";
import Link from "next/link";
import FormEvents from "./_components/FormEvents";
import { getAllEvents } from "@/services/events";
import MockEvents from "./_components/MockEvents";
import { createEvent } from "@/actions/event";
import FormBlog from "./_components/FormBlog";
import { createBlog } from "@/actions/blog";
import MockBlogs from "./_components/MockBlogs";
import { getAllBlogs } from "@/services/blog";

const mock = async () => {
  const events = await getAllEvents();
  const currentUser = await getCurrentUser();

  return (
    <section className="container ">
      <FormEvents currentUserId={currentUser?.id!} action={createEvent} />
      <MockEvents events={events!} />
    </section>
  );
};

export default mock;
