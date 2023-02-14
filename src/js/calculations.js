export const getDepositDisplayValue = () => {
  depositDisplay.value = Math.round(priceRange.value * depositRange.value);
}

export const getDepositRangeValue = () => {
  depositRange.value = depositDisplay.value / priceRange.value;
}

export const calculatePercent = () => {
  depositPercent.textContent = ((depositDisplay.value / priceDisplay.value) * 100).toFixed(0) + '%';
}

export const getMounthlyPayment = () => {
  Math.round(
    (priceDisplay.value - depositDisplay.value) * (0.05 * Math.pow((1 + 0.05), creditTimeDisplay.value) / (Math.pow((1 + 0.05), creditTimeDisplay.value) - 1))
  );
}
