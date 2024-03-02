"use client";

import useUser from "@/hooks/useUser";

const UserPosts = ({ id }: { id: string }) => {
  const { data } = useUser(id);
  return JSON.stringify(data, null, 2);
};

export default UserPosts;
