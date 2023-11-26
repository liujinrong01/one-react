import {useEffect, useRef, useState} from 'react'

import styles from './index.module.less'
import {sleep} from 'antd-mobile/es/utils/sleep'
import {Divider, Image} from 'antd-mobile'
import dayjs from 'dayjs'

import FindApi from '@/api/find'
import GetPullToRefreshlData from '@/components/GetPullToRefreshlData'
import {formatMonth} from '@/utils/utils'
import {useDatePagination, useScrollToMonth} from '@/utils/hooks'
import DateSelect from '@/components/DateSelect'
import {useNavigate} from "react-router-dom";

export default () => {

  const navigate = useNavigate();


  const listRef = useRef<any>(null)
  const {loadMore, onRefresh, data: list, hasMore} = useDatePagination(FindApi.getFindRead)
  const currentMonth = useScrollToMonth(list, listRef)
  return (

    <GetPullToRefreshlData
      loadMore={async () => await loadMore()}
      onRefresh={async () => await onRefresh()}
      hasMore={hasMore}
      scrollRef={listRef}
    >
      {/*{currentMonth && (<p className={styles.top_date}><span>{currentMonth}</span> <DownOutline/></p>)}*/}
      <DateSelect currentMonth={currentMonth} />
      <div className={styles.content_box}>
        {
          Array.from(list).map(([key, value]: any) => {
            return (
              <div key={key} className={'item'}>
                <Divider className={styles.date} key={key}>{key}</Divider>
                {
                  value.map((item: any, index: number) => {
                    return (
                      <div className={styles.item} key={index} onClick={() => {
                        navigate(`/postdetail/${item.id}`)
                      }}>
                        <div className={styles.cover}>
                          <Image src={item.cover} lazy alt="" />
                        </div>
                        <div className={styles.right}>
                          <div className={styles.title}>
                            {item.title}
                          </div>
                          <div className={styles.subtitle}>
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </GetPullToRefreshlData>
  )
}
