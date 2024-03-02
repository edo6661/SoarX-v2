"use server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { Admin } from "@prisma/client";

export const getCurrentUser = async () => {
  try {
    const self = await currentUser();
    return db.user.findUnique({
      where: {
        externalUserId: self?.id!,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllUser = async () => {
  try {
    return db.user.findMany();
  } catch (err) {
    console.log(err);
  }
};

export const updateAdminPermission = async (id: string, admin: Admin) => {
  try {
    return db.user.update({
      where: {
        id,
      },
      data: {
        admin,
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
