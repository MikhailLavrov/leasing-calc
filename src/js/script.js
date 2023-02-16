import { getDepositDisplayValue} from "./calculations.js";
import { getInitialValues } from './initialValues.js';
import { handleFormSubmit } from "./handleSubmit.js";
import { handlePriceChange, handleDepositChange, handleDepositRangeChange, handleTotalChange } from "./handles.js";
import * as masksApply from './utils/masks.js';

const creditForm = document.getElementById("creditForm");
const priceDisplay = document.getElementById("priceDisplay");
const priceRange = document.getElementById("priceRange");
const depositDisplay = document.getElementById("depositDisplay");
const depositRange = document.getElementById("depositRange");
const form = document.getElementById('creditForm');

window.addEventListener('DOMContentLoaded', () => {
  getInitialValues();

  masksApply;

  priceDisplay.addEventListener('input', handlePriceChange);
  priceRange.addEventListener("input", getDepositDisplayValue)
  depositDisplay.addEventListener("input", handleDepositChange)
  depositRange.addEventListener("input", handleDepositRangeChange)
  creditForm.addEventListener('input', handleTotalChange);
  form.addEventListener('submit', handleFormSubmit)
});
