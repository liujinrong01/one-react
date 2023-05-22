

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

/**
 * throttle
 * @param func
 * @param wait
 * @returns
 *
 */

type ThrottleFn = (...args: any[]) => void;

export function throttle(fn: ThrottleFn, delay: number): ThrottleFn {
  let lastTime = 0;
  let timer: NodeJS.Timeout | null = null;

  return function(this: any, ...args: any[]) {
    const currentTime = Date.now();
    const remainingTime = delay - (currentTime - lastTime);

    clearTimeout(timer!);

    if (remainingTime <= 0) {
      fn.apply(this, args);
      lastTime = currentTime;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        lastTime = Date.now();
      }, remainingTime);
    }
  };
}
