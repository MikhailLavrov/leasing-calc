import { unformatValue } from "./utils/format.js";

export const valuesChecks = () => {
  if (priceDisplay.value === '' ||
      depositDisplay.value === '' ||
      creditTimeDisplay.value === '' ||
      unformatValue(priceDisplay.value) < 1500000 ||
      depositDisplay.value < 330000 ||
      creditTimeDisplay.value < 6)
    {
      dealAmount.value = 0;
      monthlyPayment.value = 0;
    }
}
