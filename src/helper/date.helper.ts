const DAYS_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
export const findTheDaysDifferenceInTwoDates = (
  startDate: Date | string,
  endDate: Date | string,
) => {
  const prevDate = new Date(startDate);
  const currentDate = new Date(endDate);

  // need to handle case if the current date is valid or not - for now its ok
  const res = currentDate.getTime() - prevDate.getTime();

  return Math.floor(res / DAYS_IN_MILLISECONDS);
};
