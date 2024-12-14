function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB;
}

const result1 = add(5, 10); // Works correctly
const result2 = addSafe(5, '10'); // Correctly handles string input
const result3 = addSafe('5', 10); // Correctly handles string input