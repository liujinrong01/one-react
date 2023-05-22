

import styles from './index.module.less'
import GetPullToRefreshlData from '@/components/GetPullToRefreshlData'
import  {useRef} from 'react'
import {useDatePagination} from '@/utils/hooks'
import FindApi from '@/api/find'
import {useNavigate} from 'react-router-dom'

export default () => {
  const navigate = useNavigate();

  const listRef = useRef<any>(null)
  const {loadMore, onRefresh, data: list, hasMore} = useDatePagination(FindApi.getFindDay)
  return (
    <GetPullToRefreshlData
      loadMore={async () => await loadMore()}
      onRefresh={async () => await onRefresh()}
      hasMore={hasMore}
      scrollRef={listRef}
    >
      {/*<DateSelect currentMonth={currentMonth} />*/}
      <div className={styles.content_box}>
        {/*{
          Array.from(list).map(([key, value]: any) => {
            return (
              <div className={'item'} key={key}>
                <Divider className={styles.date} key={key}>{key}</Divider>
                <div className={styles.list}>
                  {
                    value.map((item: any) => {
                      return (
                        <div className={styles.content_item} key={item.id}>
                          <div className={styles.content_item_img}>
                            <img src={item.cover} alt=""/>
                          </div>
                          <div className={styles.content_item_date}>{item.maketime.slice(0, 10)}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }*/}

        {
          Array.from(list).map(([key, value]: any) => {
             return value.map((item: any) => {
                return (
                  <div className={styles.content_item} key={item.id} onClick={() => {
                    console.log(item)
                    navigate(`/daydetail/${item.id}`)
                  }}>
                    <div className={styles.content_item_img}>
                      <img src={item.cover} alt=""/>
                    </div>
                    <div className={styles.content_item_date}>{item.maketime.slice(0, 10)}</div>
                  </div>
                )
            })
          })
        }
      </div>
    </GetPullToRefreshlData>
  )
}
