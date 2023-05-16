

// export const

/**
 * 'YYYY 年 MM 月' => 'YYYY-MM'
 * @param date '2023 年 05 月'
 * @returns '2023-05'
 *
 */
export const formatMonth = (date: string) => {
  const dateParts = date.split(' ');
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[2], 10);
  return `${year}-${month.toString().padStart(2, '0')}`;
}
