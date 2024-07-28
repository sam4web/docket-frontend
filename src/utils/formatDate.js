import dayjs from "dayjs";

const formatDate = (date) => {
  const dt = dayjs(date);
  const formatted = dt.format("MMM DD, YYYY");
  return formatted;
};

export default formatDate;
