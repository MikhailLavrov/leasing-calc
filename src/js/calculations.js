import { getFormattedValue, unformatValue } from "./utils/format.js";

const dealAmount = $("#dealAmount");
const monthlyPayment = $("#monthlyPayment");

export const getDepositDisplayValue = () => {
  const depositDisplay = $("#depositDisplay");
  const priceRange = $("#priceRange");
  const depositRange = $("#depositRange");

  depositDisplay.val(Math.round(priceRange.val() * depositRange.val()));
  depositDisplay.val(getFormattedValue(depositDisplay.val()));
};

export const getDepositRangeValue = () => {
  const depositDisplay = $("#depositDisplay");
  const depositRange = $("#depositRange");
  const priceRange = $("#priceRange");

  depositRange.val(unformatValue(depositDisplay.val()) / priceRange.val());
};

export const calculatePercent = () => {
  const depositDisplay = $("#depositDisplay");
  const priceDisplay = $("#priceDisplay");
  const depositPercent = $("#depositPercent");

  depositPercent.text(((unformatValue(depositDisplay.val()) / unformatValue(priceDisplay.val())) * 100).toFixed(0) + '%');
};

export const getMounthlyPayment = () => {
  const priceDisplay = $("#priceDisplay");
  const depositDisplay = $("#depositDisplay");
  const creditTimeDisplay = $("#creditTimeDisplay");
  const monthlyPayment = $("#monthlyPayment");

  monthlyPayment.val(Math.round((unformatValue(priceDisplay.val()) - unformatValue(depositDisplay.val())) * (0.05 * Math.pow((1 + 0.05), unformatValue(creditTimeDisplay.val())) / (Math.pow((1 + 0.05), unformatValue(creditTimeDisplay.val())) - 1))));
  monthlyPayment.val(getFormattedValue(monthlyPayment.val()));
  monthlyPayment.val(monthlyPayment.val() + " \u20BD");
};

export const getDealAmount = () => {
  const depositDisplay = $("#depositDisplay");
  const creditTimeDisplay = $("#creditTimeDisplay");

  dealAmount.val(unformatValue(depositDisplay.val()) + (unformatValue(creditTimeDisplay.val()) * unformatValue(monthlyPayment.val())));
  dealAmount.val(getFormattedValue(dealAmount.val()));
  dealAmount.val(dealAmount.val() + " \u20BD");
};
