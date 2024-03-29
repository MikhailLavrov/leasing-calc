import { getDepositDisplayValue, getDepositRangeValue, calculatePercent, getMounthlyPayment, getDealAmount} from "./calculations.js";
import { valuesChecks } from "./valuesChecks.js";
import { getFormattedValue } from './utils/format.js';

export const handlePriceChange = () => {
  getDepositDisplayValue();
}

export const handleDepositChange = () => {
  getDepositRangeValue();
}

export const handleTotalChange = () => {
  getMounthlyPayment();
  getDealAmount();
  valuesChecks();
  priceDisplay.value = getFormattedValue(priceDisplay.value);
}

export const handleDepositRangeChange = () => {
  getDepositDisplayValue();
  calculatePercent();
}
