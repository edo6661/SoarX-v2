import { getAllBlogs } from "@/services/blog";
import { getCurrentUser } from "@/services/user";
import FormBlog from "../_components/FormBlog";
import MockBlogs from "../_components/MockBlogs";
import { createBlog } from "@/actions/blog";

const PageBlock = async () => {
  const currentUser = await getCurrentUser();
  const blogs = await getAllBlogs();
  return (
    <section className="container">
      <FormBlog currentUserId={currentUser?.id!} action={createBlog} />
      <MockBlogs blogs={blogs!} />
    </section>
  );
};

export default PageBlock;
