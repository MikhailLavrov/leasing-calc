import { unformatValue } from "./utils/format.js";

const depositDisplay = $('#depositDisplay');
const creditTimeDisplay = $('#creditTimeDisplay');
const priceDisplay = $('#priceDisplay');
const dealAmount = $('#dealAmount');
const monthlyPayment = $('#monthlyPayment');

export const valuesChecks = () => {
  if (priceDisplay.val() === '' ||
    depositDisplay.val() === '' ||
    creditTimeDisplay.val() === '' ||
    unformatValue(priceDisplay.val()) < 1500000 ||
    depositDisplay.val() < 330000 ||
    creditTimeDisplay.val() < 6)
  {
    dealAmount.val(0);
    monthlyPayment.val(0);
  }
}
