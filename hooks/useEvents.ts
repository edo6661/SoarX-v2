import { Event } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useEvents = () => {
  const fetchEvents = async () => {
    const { data } = await axios.get("/api/events");
    return data;
  };
  const { data, isLoading, isError, error, refetch } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: () => fetchEvents(),
  });
  return { data, isLoading, isError, error, refetch };
};

export default useEvents;
