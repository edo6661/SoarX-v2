import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import AdminLayout from "./_components/AdminLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300", "200", "100", "800", "900"],
});

export const metadata: Metadata = {
  title: "Soarx",
  description: "Test Soarx Desc",
};

interface Props {
  children: React.ReactNode;
}

const Admin = ({ children }: Props) => {
  return (
    <>
      <main className={cn("", poppins.className)}>
        <AdminLayout>{children}</AdminLayout>
      </main>
    </>
  );
};

export default Admin;
