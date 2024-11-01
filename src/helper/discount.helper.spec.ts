import { calculateDiscount } from './discount.helper';

describe('calculateDiscount', () => {
  it('should correctly calculate a 20% discount   ', () => {
    const result = calculateDiscount(100, 20);
    console.log('result of discount', result);
    expect(result).toBe(80);
  });

  it('should return the original amount if the discount is 0', () => {
    const result = calculateDiscount(100, 0);
    expect(result).toBe(100);
  });

  it('should return the original amount using spying if discount is 10 ', () => {
    // jest.spyOn(discountHelper, 'calculateDiscount').mockReturnValue(20);
    const result = calculateDiscount(100, 10);
    expect(result).toBe(90);
  });
});
