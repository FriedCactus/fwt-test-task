import PropTypes from "prop-types";

const usePaginationSlice = (current, amount) => {
  let arr = [];

  if (amount <= 3 || current === 1) {
    for (let i = 1; i <= 3; i++) {
      arr.push(i);
    }
  } else if (amount - current <= 1) {
    for (let i = amount - 2; i <= amount; i++) {
      arr.push(i);
    }
  } else {
    for (let i = current - 1; i <= current + 1; i++) {
      arr.push(i);
    }
  }

  return arr;
};

usePaginationSlice.propTypes = {
  current: PropTypes.number,
  amount: PropTypes.number,
};

export default usePaginationSlice;
