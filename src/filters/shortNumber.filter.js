export default function shortNumber(number) {
  if (number < 1e3) {
    const newValue = number;
    return newValue;
  }

  if (number > 1e3 && number < 1e6) {
    const newValue = number / 1e3;
    return `${newValue.toFixed(1)} K`;
  }

  if (number > 1e6 && number < 1e9) {
    const newValue = number / 1e6;
    return `${newValue.toFixed(1)} M`;
  }
}
