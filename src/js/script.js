const priceDisplay = document.getElementById("priceDisplay");
const priceRange = document.getElementById("priceRange");
const depositDisplay = document.getElementById("depositDisplay");
const depositRange = document.getElementById("depositRange");
const depositPercent = document.getElementById("depositPercent");

window.addEventListener('DOMContentLoaded', () => {

  // Задаем начальное состояние значений полей Первоначальный взнос
  depositRange.value = depositDisplay.value / priceRange.value;
  depositDisplay.value = Math.round(priceRange.value * depositRange.value);

  // Задаем начальное состояние значения процентного отношения
  depositPercent.textContent = priceDisplay.value/depositDisplay.value + '%';

  // Связываем значения полей Стоимость кредита и Первоначальный взнос в %
  priceDisplay.addEventListener("input", () => {
    depositDisplay.value = Math.round(priceRange.value * depositRange.value);
  })
  priceRange.addEventListener("input", () => {
    depositDisplay.value = Math.round(priceRange.value * depositRange.value);
  })
  depositDisplay.addEventListener("input", () => {
    depositRange.value = depositDisplay.value / priceRange.value;
  })
  depositRange.addEventListener("input", () => {
    depositDisplay.value = Math.round(priceRange.value * depositRange.value);
  })

  // Подписываем значение поля с процентным соотношением на изменение вводных данных
  const calculatePercent = () => {
    depositPercent.textContent = ((depositDisplay.value / priceDisplay.value) * 100).toFixed(0) + '%';
  }
  depositRange.addEventListener("input", () => {
    calculatePercent();
  });

});



