import { getEvent } from "@/services/events";
import FormEvents from "../../../_components/FormEvents";
import { getCurrentUser } from "@/services/user";
import { notFound } from "next/navigation";
import { editEvent } from "@/actions/event";
import { editBlog } from "@/actions/blog";
import FormBlog from "../../../_components/FormBlog";
import { getBlog } from "@/services/blog";

interface EditBlogProps {
  params: {
    id: string;
  };
}
const EditBlog = async ({ params }: EditBlogProps) => {
  const { id } = params;
  const blog = await getBlog(id);
  const currentUser = await getCurrentUser();

  if (!blog) return notFound();
  return (
    <section className="container">
      <h1>Edit Page</h1>
      {JSON.stringify(blog)}
      <FormBlog
        currentUserId={currentUser?.id!}
        blog={blog!}
        action={editBlog}
      />
    </section>
  );
};

export default EditBlog;
