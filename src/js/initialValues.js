import { getFormattedValue, unformatValue } from './utils/format.js';

const depositPercent = document.getElementById("depositPercent");
const monthlyPayment = document.getElementById("monthlyPayment");
const dealAmount = document.getElementById("dealAmount");
const creditTimeDisplay = document.getElementById("creditTimeDisplay");
const priceDisplay = document.getElementById("priceDisplay");
const priceRange = document.getElementById("priceRange");
const depositDisplay = document.getElementById("depositDisplay");
const depositRange = document.getElementById("depositRange");

export const getInitialValues = () => {
    // Задаем начальное состояние значений поля Сумма кредита
  priceDisplay.value = getFormattedValue(priceDisplay.value);

  // Задаем начальное состояние значений поля Первоначальный взнос
  depositRange.value = unformatValue(depositDisplay.value) / priceRange.value;
  depositDisplay.value = Math.round(priceRange.value * depositRange.value);
  depositDisplay.value = getFormattedValue(depositDisplay.value);

  // Задаем начальное состояние значения Проценты
  depositPercent.textContent = ((unformatValue(depositDisplay.value) / unformatValue(priceDisplay.value)) * 100).toFixed(0) + '%';

  // Задаем начальное состояние значения поля Ежемесячный платеж
  monthlyPayment.value = Math.round((unformatValue(priceDisplay.value) - unformatValue(depositDisplay.value)) * (0.05 * Math.pow((1 + 0.05), unformatValue(creditTimeDisplay.value)) / (Math.pow((1 + 0.05), unformatValue(creditTimeDisplay.value)) - 1)));
  monthlyPayment.value = getFormattedValue(monthlyPayment.value);
  monthlyPayment.value = monthlyPayment.value + " \u20BD";

  // Задаем начальное состояние значения поля Сумма договора
  dealAmount.value = unformatValue(depositDisplay.value) + (unformatValue(creditTimeDisplay.value) * unformatValue(monthlyPayment.value));
  dealAmount.value = getFormattedValue(dealAmount.value)
  dealAmount.value = dealAmount.value + " \u20BD";
}
