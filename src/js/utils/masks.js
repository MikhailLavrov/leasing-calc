// Маска на поле Сумма кредита
export const priceMask = IMask(priceDisplay, {
  mask: Number,  // enable number mask

  // other options are optional with defaults below
  scale: 2,  // digits after point, 0 for integers
  signed: true,  // disallow negative
  thousandsSeparator: ' ',  // any single char
  padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
  normalizeZeros: true,  // appends or removes zeros at ends
  radix: ',',  // fractional delimiter
  mapToRadix: ['.'],  // symbols to process as radix

  // additional number interval options (e.g.)
  min: 1500000,
  max: 10000000
});

// Маска на поле Первоначальный взнос
export const depositMask = IMask(depositDisplay, {
  mask: Number,  // enable number mask

  // other options are optional with defaults below
  signed: true,  // disallow negative
  thousandsSeparator: ' ',  // any single char
  padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
  normalizeZeros: true,  // appends or removes zeros at ends
  radix: ',',  // fractional delimiter
  mapToRadix: ['.'],  // symbols to process as radix

  // additional number interval options (e.g.)
  min: 150000,
  max: 6000000
});

// Маска на поле Срок кредита
IMask(creditTimeDisplay, {
  mask: Number,  // enable number mask

  // other options are optional with defaults below
  signed: true,  // disallow negative
  thousandsSeparator: ' ',  // any single char
  padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
  normalizeZeros: true,  // appends or removes zeros at ends
  radix: ',',  // fractional delimiter
  mapToRadix: ['.'],  // symbols to process as radix

  // additional number interval options (e.g.)
  min: 6,
  max: 120
});
