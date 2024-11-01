const PERCENTAGE = 100;
export function calculateDiscount(amount: number, discount: number): number {
  return amount - amount * (discount / PERCENTAGE);
}
