import {useEffect, useRef, useState} from 'react'

import styles from './index.module.less'
import {sleep} from 'antd-mobile/es/utils/sleep'
import {Divider, Image} from 'antd-mobile'
import dayjs from 'dayjs'

import FindApi from '@/api/find'
import GetPullToRefreshlData from '@/components/GetPullToRefreshlData'
import {formatMonth} from '@/utils/utils'
import DateSelect from '@/components/DateSelect'
import {useNavigate} from "react-router-dom";


const Item = (item: any) => {
  return (
    <div className={styles.item_box}>
      <Image className={styles.image} src={item.cover} lazy height={207}></Image>
      <p className={styles.status}>{item.finished ? '# 已完结': '# 连载中'}</p>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.desc}>{item.forward}</div>
      <div className={styles.author}>{item.subtitle}</div>
    </div>
  )
}

export default () => {

  const navigate = useNavigate();


  const listRef = useRef<any>(null)
  const [hasMore, setHasMore] = useState(false);
  const [list, setList] = useState<any[]>([]);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    pageInit()
  }, []);

  const pageInit = async () => {
    console.log('pageInit')

    FindApi.getFindSerial().then((res: any) => {
      console.log(res)
      setList(res.data)
      setHasMore(true);
    })
  }

  const getSerialList = async () => {
    // setHasMore(false);
    let res = await FindApi.getFindSerialList({year: currentYear});
    if(currentYear < 2013) {
      setHasMore(false)
    } else {
      setList([...list, ...res.data])
      setCurrentYear(currentYear - 1)
      setHasMore(true)
    }

  }


  const loadMore = async () => {
    await sleep(1000)
    getSerialList();

  }

  const onRefresh = async () => {
    console.log('onRefresh')
  }




  return (

    <GetPullToRefreshlData
      loadMore={async () => await loadMore()}
      onRefresh={async () => await onRefresh()}
      hasMore={hasMore}
      scrollRef={listRef}
    >

      {
        list.map((item: any, index: number) => {
          return (
            <Item {...item} key={index}></Item>
          )
        })
      }
    </GetPullToRefreshlData>
  )
}
