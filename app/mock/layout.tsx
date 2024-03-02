import { getCurrentUser } from "@/services/user";
import { Admin } from "@prisma/client";
import Link from "next/link";

export default async function MockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container fl-itc justify-between">
        <Link href="/mock">Events</Link>
        <Link href="/mock/user">User</Link>
        <Link href="/mock/blog">Blog</Link>
      </div>
      {children}
    </>
  );
}
