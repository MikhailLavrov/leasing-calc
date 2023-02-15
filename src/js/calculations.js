import { getFormattedValue, unformatValue } from "./utils/format.js";

const dealAmount = document.getElementById("dealAmount");
const monthlyPayment = document.getElementById("monthlyPayment");

export const getDepositDisplayValue = () => {
  depositDisplay.value = Math.round(priceRange.value * depositRange.value);
  depositDisplay.value = getFormattedValue(depositDisplay.value);
}

export const getDepositRangeValue = () => {
  depositRange.value = unformatValue(depositDisplay.value) / priceRange.value;
}

export const calculatePercent = () => {
  depositPercent.textContent = ((unformatValue(depositDisplay.value) / unformatValue(priceDisplay.value)) * 100).toFixed(0) + '%';
}

export const getMounthlyPayment = () => {
  monthlyPayment.value = Math.round((unformatValue(priceDisplay.value) - unformatValue(depositDisplay.value)) * (0.05 * Math.pow((1 + 0.05), unformatValue(creditTimeDisplay.value)) / (Math.pow((1 + 0.05), unformatValue(creditTimeDisplay.value)) - 1)));
  monthlyPayment.value = getFormattedValue(monthlyPayment.value);
  monthlyPayment.value = monthlyPayment.value + " \u20BD";
}

export const getDealAmount = () => {
  dealAmount.value = unformatValue(depositDisplay.value) + (unformatValue(creditTimeDisplay.value) * unformatValue(monthlyPayment.value));
  dealAmount.value = getFormattedValue(dealAmount.value)
  dealAmount.value = dealAmount.value + " \u20BD";
}
