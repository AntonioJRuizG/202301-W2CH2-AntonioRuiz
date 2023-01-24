export const strictEquals = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return false;
  }

  if (Object.is(-0, a) || Object.is(-0, b)) {
    return true;
  }

  return Object.is(a, b);
};
