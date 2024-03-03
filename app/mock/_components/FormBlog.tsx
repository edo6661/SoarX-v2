"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/ui/CustomInput";
import { motion } from "framer-motion";
import CustomDate from "@/components/ui/CustomDate";
import ImageUpload from "@/components/ImageUpload";
import Image from "next/image";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  BlogSchema,
  blogFormResolver,
  blogInitialValues,
  blogSchema,
} from "@/schema/blog";
import { X } from "lucide-react";

interface FormBlogProps {
  blog?: BlogSchema;
  currentUserId: string;
  action: (data: BlogSchema) => Promise<void>;
}

const FormBlog = ({ blog, currentUserId, action }: FormBlogProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const editPath = pathname.includes("edit");

  const initialValues = editPath ? blog : blogInitialValues;
  const toastMsg = editPath
    ? "Blog updated successfully"
    : "Blog created successfully";

  const form = useForm({
    // resolver: blogFormResolver,
    resolver: zodResolver(blogSchema),
    defaultValues: {
      ...initialValues!,
      creatorId: currentUserId,
      ...(blog && { updateAt: new Date() }),
    },
    mode: "onChange",
  });

  const { watch, handleSubmit, formState, setValue, control, reset } = form;
  const { errors } = formState;

  const onSubmit = (data: BlogSchema) => {
    startTransition(async () => {
      try {
        await action(data);
        reset();
        toast.success(toastMsg);
        router.push("/mock/blog");
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <div>
      <Form {...form}>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2"
          layout
        >
          <CustomInput
            name="title"
            control={control}
            label="Title"
            placeholder="Blog title"
            description="Title of the blog"
            error={errors.title}
          />
          <CustomInput
            name="content"
            control={control}
            label="Content"
            placeholder="Blog content"
            description="Content of the blog"
            error={errors.content}
          />

          {watch("imageUrl") ? (
            <div className="relative w-fit mx-auto">
              <Image
                src={watch("imageUrl")}
                alt="Blog Image"
                width={200}
                height={200}
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => setValue("imageUrl", "")}
                className="absolute top-0 right-0"
              >
                <X />
              </Button>
            </div>
          ) : (
            <ImageUpload setValue={setValue} />
          )}

          <Button type="submit" disabled={isPending}>
            Submit
          </Button>
        </motion.form>
      </Form>
    </div>
  );
};

export default FormBlog;
