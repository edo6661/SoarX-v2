import { Event, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUserExternalId = (externalUserId: string) => {
  const fetchUser = async () => {
    const { data } = await axios.get(
      `/api/externalUser?externalUserId=${externalUserId}`
    );
    return data;
  };
  const { data, isLoading, isError, error, refetch } = useQuery<User>({
    queryKey: ["externalUserId", externalUserId],
    queryFn: () => fetchUser(),
  });
  return { data, isLoading, isError, error, refetch };
};

export default useUserExternalId;
