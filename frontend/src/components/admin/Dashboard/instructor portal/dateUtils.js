import { format, isToday, formatDistanceToNow, isYesterday } from "date-fns";

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  if (isToday(date)) {
    return formatDistanceToNow(date, { addSuffix: true });
  } else if (isYesterday(date)) {
    return "Yesterday";
  } else {
    return format(date, "PP");
    // Example format: 'Jul 11 2024'
  }
};
