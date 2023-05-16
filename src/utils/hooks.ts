import { useState, useEffect } from 'react';

export const useScrollToMonth = (listData: any) => {
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      console.log('handleScroll', listData)
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

      const scrollRatio = scrollTop / (scrollHeight - clientHeight);

      let visibleMonth = '';

      // 根据滚动比例计算当前可见的月份
      if (listData.size > 0) {
        const monthIndex = Math.floor(scrollRatio * listData.length);
        // visibleMonth = listData[monthIndex].month;

        console.log('monthIndex', monthIndex)
      }

      setCurrentMonth('3');
    };

    // @ts-ignore
    document.querySelector('.adm-swiper-item div').addEventListener('scroll', handleScroll);
    return () => {
      // @ts-ignore
      document.querySelector('.adm-swiper-item div').removeEventListener('scroll', handleScroll);
    };
  }, [listData]);

  return currentMonth;
};

// export default useScrollToMonth;
