export const debounce = (callback) => {
  let timeoutId;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, 500);
  };
}
