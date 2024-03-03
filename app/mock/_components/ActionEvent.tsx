"use client";
import { deleteBlog } from "@/actions/blog";
import { deleteEvent } from "@/actions/event";
import { Button } from "@/components/ui/button";
import { Blog, Event } from "@prisma/client";
import { Edit2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const ActionEvent = ({ imageUrl, title, id }: Event | Blog) => {
  const pathname = usePathname();
  const blogPathname = pathname.includes("blog");
  const hrefOpt = blogPathname ? `/mock/blog/edit/${id}` : `/mock/edit/${id}`;
  const toastMsgOpt = blogPathname
    ? "Blog deleted successfully"
    : "Event deleted successfully";
  const handleClick = async (id: string) => {
    try {
      if (blogPathname) {
        await deleteBlog(id);
      } else {
        await deleteEvent(id);
      }
      toast.success(toastMsgOpt);
    } catch (er) {
      console.error(er);
    }
  };

  return (
    <div className="relative w-fit mx-auto">
      <Image src={imageUrl!} alt={title} width={300} height={200} />
      <Button
        variant="destructive"
        size="icon"
        onClick={() => handleClick(id)}
        className="absolute top-0 right-0"
      >
        <X />
      </Button>
      {/* TODO EDIT */}
      <Button variant="outline" size="icon" className="absolute top-0 left-0">
        <Link href={hrefOpt}>
          <Edit2 />
        </Link>
      </Button>
    </div>
  );
};

export default ActionEvent;
