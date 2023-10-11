export default (dateStr) => {
  const date = new Date(dateStr);
  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const DD = String(date.getDate()).padStart(2, '0');
  const HH = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  
  return `${YYYY}-${MM}-${DD}T${HH}:${mm}`;
}
