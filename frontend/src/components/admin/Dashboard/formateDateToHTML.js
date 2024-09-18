export const formatDateToHTML = (date) => {
  if(!date) return '';

  // Create a new Date object from the MongoDB date

  const dateObj = new Date(date);

  // Format the date into YYYY-MM-DD format
  return dateObj.toISOString().split('T')[0]; // 'YYYY-MM-DD'
};
