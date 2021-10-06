import PropTypes from "prop-types";

const usePaginationSlice = (current, amount) => {
  let arr = Array.from({ length: amount }, (_, i) => i + 1);

  if (amount <= 1) return [];
  if (current <= 1) return arr.slice(0, 3);
  if (current >= amount) return arr.slice(-3);

  const start = current - 2;
  const end = current + 1;

  return arr.slice(start, end);
};

usePaginationSlice.propTypes = {
  current: PropTypes.number,
  amount: PropTypes.number,
};

export default usePaginationSlice;
