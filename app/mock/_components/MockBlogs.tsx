import { format } from "date-fns";
import { BlogWithCreator, EventWithCreator } from "@/types";
import ActionEvent from "./ActionEvent";
import { formatStr } from "@/constant";

const MockBlogs = ({ blogs }: BlogWithCreator) => {
  return (
    <div>
      {blogs.length > 0 && <h1>Mock Blogs</h1>}
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <ActionEvent {...blog!} />

            <p>Created at: {format(blog.createdAt, formatStr)}</p>
            {blog.updatedAt && (
              <p className=" text-slate-500/50">
                Edited At {format(blog.updatedAt, formatStr)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockBlogs;
