import { format } from "date-fns";

export const indianDate = (dateString) => {
  const date = new Date(dateString);

  return format(date, "PP");
  // Example format: 'Jul 11 2024'
};
