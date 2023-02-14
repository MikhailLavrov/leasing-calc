import { debounce } from './utils/debounce.js';
import { getDepositDisplayValue, getDepositRangeValue, calculatePercent, getMounthlyPayment, getDealAmount} from "./calculations.js";
import { getFormattedValue } from './utils/format.js';
import { getInitialValues } from './initialValues.js';
import * as masksApply from './utils/masks.js';

const creditForm = document.getElementById("creditForm");
const priceDisplay = document.getElementById("priceDisplay");
const priceRange = document.getElementById("priceRange");
const depositDisplay = document.getElementById("depositDisplay");
const depositRange = document.getElementById("depositRange");
const creditTimeDisplay = document.getElementById("creditTimeDisplay");
const dealAmount = document.getElementById("dealAmount");
const monthlyPayment = document.getElementById("monthlyPayment");

window.addEventListener('DOMContentLoaded', () => {
  getInitialValues();
  masksApply;

  let checkIsEmpty = () => {
    if (priceDisplay.value === '' || depositDisplay.value === '' || creditTimeDisplay.value === '') {
      dealAmount.value = 0;
      monthlyPayment.value = 0;
    }
  }

  // Связываем значения полей Стоимость кредита, Первоначальный взнос и %
  priceDisplay.addEventListener("input", getDepositDisplayValue)
  priceRange.addEventListener("input", getDepositDisplayValue)
  depositDisplay.addEventListener("input", getDepositRangeValue)
  depositRange.addEventListener("input", getDepositDisplayValue)
  depositRange.addEventListener("input", calculatePercent);

  // Присваиваем значение Ежемесячный платеж соответствующему полю в таблице и подписываем на изменения
  creditForm.addEventListener('input', getMounthlyPayment);
  creditForm.addEventListener('input', getDealAmount);
  creditForm.addEventListener('input', () => priceDisplay.value = getFormattedValue(priceDisplay.value));

  creditForm.addEventListener('input', checkIsEmpty);
});
