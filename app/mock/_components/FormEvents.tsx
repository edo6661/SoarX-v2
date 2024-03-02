"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import { Input } from "@/components/ui/input";
import { eventSchema, eventInitialValues, EventSchema } from "@/schema/event";
import CustomInput from "@/components/ui/CustomInput";
import { motion } from "framer-motion";
import CustomDate from "@/components/ui/CustomDate";
import { createEvent } from "@/actions/event";
import ImageUpload from "@/components/ImageUpload";
import Image from "next/image";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

interface FormEventsProps {
  event?: EventSchema;
  currentUserId: string;
  action: (data: EventSchema) => Promise<void>;
}

const FormEvents = ({ event, currentUserId, action }: FormEventsProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const editPath = pathname.includes("edit");

  const initialValues = editPath ? event : eventInitialValues;
  const toastMsg = editPath
    ? "Event updated successfully"
    : "Event created successfully";

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      ...initialValues!,
      creatorId: currentUserId,
      ...(event && { updateAt: new Date() }),
    },
    mode: "onChange",
  });

  const { watch, handleSubmit, formState, setValue, control, reset } = form;
  const { errors } = formState;

  const onSubmit = (data: EventSchema) => {
    startTransition(async () => {
      try {
        await action(data);
        reset();
        toast.success(toastMsg);
        router.push("/mock");
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
            placeholder="Event title"
            description="Title of the event"
            error={errors.title}
          />
          <CustomInput
            name="description"
            control={control}
            label="Description"
            placeholder="Event description"
            description="Description of the event"
            error={errors.description}
          />
          <CustomDate
            name="date"
            control={control}
            label="Date"
            description="Date of the event"
          />
          <CustomInput
            name="location"
            control={control}
            label="Location"
            placeholder="Event location"
            description="Location of the event"
            error={errors.location}
          />
          {watch("imageUrl") ? (
            <div className="relative w-fit mx-auto">
              <Image
                src={watch("imageUrl")}
                alt="Event Image"
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

export default FormEvents;
