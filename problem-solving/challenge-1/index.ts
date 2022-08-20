export const numbersFractionCalculator = (numbers: number[]) => {
  let positive = 0;
  let negative = 0;
  let zeros = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positive++;
    } else if (numbers[i] < 0) {
      negative++;
    } else {
      zeros++;
    }
  }

  //return results with 6 decimal places
  return {
    positives: (positive / numbers.length).toFixed(6),
    negative: (negative / numbers.length).toFixed(6),
    zeros: (zeros / numbers.length).toFixed(6),
  };
};
