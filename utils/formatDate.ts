export const formatDate = (dateString: string | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const date: Date = new Date(dateString);
  const formattedDate: string = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
