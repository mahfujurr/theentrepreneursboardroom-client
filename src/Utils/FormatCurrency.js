export function formatCurrency(input) {
  // Convert the input to a number
  const number = parseFloat(input);

  // If the input is not a valid number, return "Invalid input"
  if (isNaN(number)) {
    return "Invalid input";
  }

  // Round the number and format with thousand separators
  return `$${Math.round(number).toLocaleString("en-US")}`;
}
