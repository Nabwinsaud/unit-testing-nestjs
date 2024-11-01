import { findTheDaysDifferenceInTwoDates } from './date.helper';

describe('calculateDifferenceInDays', () => {
  it('it should return the days 1 when current date is "2024-11-01" and 2024-11-02', () => {
    const currentDate = '2024-11-01';
    const futureDate = '2024-11-02';
    const result = findTheDaysDifferenceInTwoDates(currentDate, futureDate);
    expect(result).toBe(1);
  });
});
