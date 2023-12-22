export function formatNumber(number) {
    const roundedNumber = number.toFixed(2);
    const formattedNumber = parseFloat(roundedNumber).toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );
    return formattedNumber;
  }