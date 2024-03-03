"use server";
import { db } from "@/lib/db";
import { EventSchema } from "@/schema/event";
import { revalidatePath } from "next/cache";

export const createEvent = async (data: EventSchema) => {
  try {
    await db.event.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/events");
    revalidatePath("/mock");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const editEvent = async (data: EventSchema) => {
  try {
    await db.event.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    revalidatePath("/events");
    revalidatePath("/mock");
    revalidatePath(`/mock/edit/${data.id}`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteEvent = async (id: string) => {
  try {
    await db.event.delete({
      where: {
        id,
      },
    });
    revalidatePath("/events");
    revalidatePath("/mock");
  } catch (err) {
    console.error(err);
    throw err;
  }
};
