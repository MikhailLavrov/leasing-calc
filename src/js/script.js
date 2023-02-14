import { debounce } from './utils/debounce.js';
import { getDepositDisplayValue, getDepositRangeValue, calculatePercent, getMounthlyPayment, getDealAmount} from "./calculations.js";
import { getFormattedValue } from './utils/format.js';
import { getInitialValues } from './initialValues.js';

const creditForm = document.getElementById("creditForm");
const priceDisplay = document.getElementById("priceDisplay");
const priceRange = document.getElementById("priceRange");
const depositDisplay = document.getElementById("depositDisplay");
const depositRange = document.getElementById("depositRange");

window.addEventListener('DOMContentLoaded', () => {
  getInitialValues();

  // Связываем значения полей Стоимость кредита, Первоначальный взнос и %
  priceDisplay.addEventListener("input", getDepositDisplayValue)
  priceRange.addEventListener("input", getDepositDisplayValue)
  depositDisplay.addEventListener("input", getDepositRangeValue)
  depositRange.addEventListener("input", getDepositDisplayValue)
  depositRange.addEventListener("input", calculatePercent);

  // Присваиваем значение Ежемесячный платеж соответствующему полю в таблице и подписываем на изменения
  creditForm.addEventListener('input', debounce(getMounthlyPayment));
  creditForm.addEventListener('input', debounce(getDealAmount));
  creditForm.addEventListener('input', () => priceDisplay.value = getFormattedValue(priceDisplay.value));
});
