export const getFormattedValue = (value) => {
  if (typeof value !== 'string') {
    value = value.toString();
  }
  return value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1 ');
}

export const unformatValue = (value) => {
  return parseInt(value.replace(/\s+/g, ''));
}
