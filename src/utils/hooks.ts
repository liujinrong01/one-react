import { useState, useEffect } from 'react';

import {formatMonth, throttle} from './utils';
import dayjs from 'dayjs'
import {sleep} from 'antd-mobile/es/utils/sleep'
import FindApi from '@/api/find'

/**
 * 滚动到月份
 * @param listData
 * @param ref
 * 思路： 1. 获取每个月的高度
 *       2. 获取滚动的高度
 *       3. 滚动的高度在哪个月份的高度范围内，就是哪个月份
 *       4. 通过滚动的高度，计算出当前月份的索引
 *       5. 通过索引，获取当前月份
 *
 */
export const useScrollToMonth = (listData: any, ref: any) => {
  const [currentMonth, setCurrentMonth] = useState<any>(dayjs().format('YYYY 年 MM 月'));
  const [scrollY, setScrollY] = useState(0);
  const [listHeight, setListHeight] = useState([0]);


  useEffect(() => {
    let currentRef = ref.current;

    function calculate() {
      const height = [];
      let heightTemp = 0;
      height.push(heightTemp);
      const $item = ref.current.querySelectorAll('.item');
      $item.forEach((item: any) => {
        heightTemp += item.clientHeight;
        height.push(heightTemp);
      });
      setListHeight(height);
    }
    calculate();
    const handleScroll = (e: any) => {
      const scrollTop = e.target.scrollTop;
      setScrollY(scrollTop);
    };
    currentRef.addEventListener('scroll', throttle(handleScroll, 300));
    return () => {
      currentRef.removeEventListener('scroll', handleScroll);
    };
  }, [listData, ref]);

  useEffect(() => {
    for (let i = 0; i < listHeight.length; i++) {
      const height1 = listHeight[i];
      const height2 = listHeight[i + 1];
      if (!height2 || (scrollY >= height1 && scrollY < height2)) {
        setCurrentMonth(Array.from(listData.keys())[i]);
        return;
      }
    }
  }, [scrollY, listHeight, listData]);
  return currentMonth;
};


/**
 * 日期 分页 hooks
 * @param api
 // * @param hasMore
 // * @param loadMore
 // * @param onRefresh
 *
 * @return {data, hasMore, loadMore, onRefresh}
 *
 */


export const useDatePagination = (api: any) => {

  // data: Map {key: month, value: [array object]}
  const [data, setData] = useState<any>(new Map());
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {

    return () => {
      setData(new Map());
      setHasMore(true)
    }
  }, [])

  const loadMore = async () => {
    await sleep(1000)
    const newMap = new Map(data)
    let monthDetail: {api: string, render: string} = {
      api: dayjs().format('YYYY-MM'),
      render: dayjs().format('YYYY 年 MM 月')
    }
    if (newMap.size > 0) {
      let lastKey: any = '';
      for (let key of newMap.keys()) {
        lastKey = key
      }
      const lastMonth = formatMonth(lastKey)
      let newLastMonth = dayjs(lastMonth).subtract(1, 'month').format('YYYY-MM')
      monthDetail = {
        api: newLastMonth,
        render: dayjs(newLastMonth).format('YYYY 年 MM 月')
      }
    }

    try {
      const { data } = await api({month: monthDetail.api})

      newMap.set(monthDetail.render, data)
      setData(newMap)
      setHasMore(data.length > 0)
    } catch (error) {
      console.log(error)
      setHasMore(true)
    }
  }

  const onRefresh = async () => {
    console.log('read: onRefresh')
    setData(new Map())
    setHasMore(true)
  }

  return {
    data,
    hasMore,
    loadMore,
    onRefresh,
  }

}


/**
 * 专题 分页 hooks
 * @param api
 * @param hasMore
 * @param loadMore
 * @param onRefresh
 * @return {data, hasMore, loadMore, onRefresh}
 *
 */

export const useTopicPagination = (api: any) => {

  // data: Map {key: month, value: [array object]}
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {

    return () => {
      setData([])
      setHasMore(true)
    }
  }, [])

  const loadMore = async () => {
    await sleep(1000)
    let lastId = 0
    if (data.length > 0) {
      lastId = data[data.length - 1].id || 0
    }
    console.log('lastId', lastId)
    try {
      const { data: newData } = await api({lastId})

      console.log('newData', newData)
      setData([...data, ...newData])
      setHasMore(newData.length > 0)
    } catch (error) {
      console.log(error)
      setHasMore(true)
    }
  }

  const onRefresh = async () => {
    console.log('topic: onRefresh')
    setData([])
    setHasMore(true)
  }

  return {
    data,
    hasMore,
    loadMore,
    onRefresh,
  }
}
