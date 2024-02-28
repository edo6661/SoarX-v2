import { Event, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = (id: string) => {
  const fetchUser = async () => {
    const { data } = await axios.get(`/api/user?id=${id}`);
    return data;
  };
  const { data, isLoading, isError, error, refetch } = useQuery<User>({
    queryKey: ["user", id],
    queryFn: () => fetchUser(),
  });
  return { data, isLoading, isError, error, refetch };
};

export default useUser;
