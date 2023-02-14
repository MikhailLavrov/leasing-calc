import { debounce } from './utils/debounce.js';
import { getDepositDisplayValue, getDepositRangeValue, calculatePercent, getMounthlyPayment} from "./calculations.js";

const priceDisplay = document.getElementById("priceDisplay");
const priceRange = document.getElementById("priceRange");
const depositDisplay = document.getElementById("depositDisplay");
const depositRange = document.getElementById("depositRange");
const depositPercent = document.getElementById("depositPercent");
const monthlyPayment = document.getElementById("monthlyPayment");
const creditForm = document.getElementById("creditForm");

window.addEventListener('DOMContentLoaded', () => {
  // Задаем начальное состояние значений полей Первоначальный взнос и значение процентного отношения
  depositRange.value = depositDisplay.value / priceRange.value;
  depositDisplay.value = Math.round(priceRange.value * depositRange.value);
  depositPercent.textContent = priceDisplay.value/depositDisplay.value + '%';

  // Связываем значения полей Стоимость кредита, Первоначальный взнос и %
  priceDisplay.addEventListener("input", getDepositDisplayValue)
  priceRange.addEventListener("input", getDepositDisplayValue)
  depositDisplay.addEventListener("input", getDepositRangeValue)
  depositRange.addEventListener("input", getDepositDisplayValue)
  depositRange.addEventListener("input", calculatePercent);

  // Присваиваем значение Ежемесячный платеж соответствующему полю в таблице и подписываем на изменения
  const renderMounthlyPayment = () => monthlyPayment.value = getMounthlyPayment();
  creditForm.addEventListener('input', debounce(renderMounthlyPayment));
});
