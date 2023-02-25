import { getFormattedValue, unformatValue } from './utils/format.js';

const depositPercent = $('#depositPercent');
const monthlyPayment = $('#monthlyPayment');
const dealAmount = $('#dealAmount');
const creditTimeDisplay = $('#creditTimeDisplay');
const priceDisplay = $('#priceDisplay');
const priceRange = $('#priceRange');
const depositDisplay = $('#depositDisplay');
const depositRange = $('#depositRange');

export const getInitialValues = () => {
  // Задаем начальное состояние значений поля Сумма кредита
  priceDisplay.val(getFormattedValue(priceDisplay.val()));

  // Задаем начальное состояние значений поля Первоначальный взнос
  depositRange.val(unformatValue(depositDisplay.val()) / priceRange.val());
  depositDisplay.val(Math.round(priceRange.val() * depositRange.val()));
  depositDisplay.val(getFormattedValue(depositDisplay.val()));

  // Задаем начальное состояние значения Проценты
  depositPercent.text(((unformatValue(depositDisplay.val()) / unformatValue(priceDisplay.val())) * 100).toFixed(0) + '%');

  // Задаем начальное состояние значения поля Ежемесячный платеж
  monthlyPayment.val(Math.round((unformatValue(priceDisplay.val()) - unformatValue(depositDisplay.val())) * (0.05 * Math.pow((1 + 0.05), unformatValue(creditTimeDisplay.val())) / (Math.pow((1 + 0.05), unformatValue(creditTimeDisplay.val())) - 1))));
  monthlyPayment.val(getFormattedValue(monthlyPayment.val()));
  monthlyPayment.val(monthlyPayment.val() + " \u20BD");

  // Задаем начальное состояние значения поля Сумма договора
  dealAmount.val(unformatValue(depositDisplay.val()) + (unformatValue(creditTimeDisplay.val()) * unformatValue(monthlyPayment.val())));
  dealAmount.val(getFormattedValue(dealAmount.val()));
  dealAmount.val(dealAmount.val() + " \u20BD");
}
