
import styles from './index.module.less'
import React, {useEffect, useState} from 'react'
import Item from '../Item'
import {useDispatch, useSelector} from 'react-redux'
import DayDetail from '@/pages/Detail/DayDetail'


// @ts-ignore
function DayContainer ({date}: any) {

  const dispatch = useDispatch();
  // const dateData = useSelector((state: any) => state.date.data[date]);
  const dateData = useSelector((state: any) => state.home.dateData[date]);


  const [data, setData] = useState<any>([])
  const [first, setFirst] = useState<any>({})

  useEffect(() => {

    if(dateData) {
      setFirst(dateData?.content_list[0])
      setData((dateData?.content_list || []).slice(1))
    }
  }, [dispatch, date, dateData]);


  return (
    <div>
      <div className={styles.item}>
        {/*图文*/}

        <DayDetail detail={first} />

        {/* 列表 */}
        <div className={styles.list}>
          {
            data.map((item: any) => (
              <Item data={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DayContainer
