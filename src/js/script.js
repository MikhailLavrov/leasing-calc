import { getDepositDisplayValue } from "./calculations.js";
import { getInitialValues } from './initialValues.js';
import { handleFormSubmit } from "./handleSubmit.js";
import { handlePriceChange, handleDepositChange, handleDepositRangeChange, handleTotalChange } from "./handles.js";
import * as masksApply from './utils/masks.js';

const creditForm = $("#creditForm");
const priceDisplay = $("#priceDisplay");
const priceRange = $("#priceRange");
const depositDisplay = $("#depositDisplay");
const depositRange = $("#depositRange");

$(document).ready(() => {
  getInitialValues();

  masksApply;

  priceDisplay.on('input', handlePriceChange);
  priceRange.on("input", getDepositDisplayValue);
  depositDisplay.on("input", handleDepositChange);
  depositRange.on("input", handleDepositRangeChange);
  creditForm.on('input', handleTotalChange);
  creditForm.on('submit', handleFormSubmit);
});
