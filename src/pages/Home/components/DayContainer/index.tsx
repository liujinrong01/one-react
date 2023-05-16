
import styles from './index.module.less'
import FunctionBar from '../FunctionBar'
import React, {useEffect, useState} from 'react'
import Item from '../Item'
import {useDispatch, useSelector} from 'react-redux'
import {fetchHomeData} from '../../../../store/home/actions'
import dayjs from 'dayjs'


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

        <div className={styles.first_box}>
          <div className={styles.img_text_box}>
            <img src={first.img_url} alt=""/>
            <div className={styles.text_box}>
              <p className={`${styles.t1} color-bcbcbc center`}>{first.title} | {first.pic_info}</p>
              <p className={`${styles.t2}`}>{first.forward}</p>
              <p className={`${styles.t3} color-bcbcbc center`}>{first.words_info}</p>
            </div>
          </div>
          {/* 功能栏 评论 书签 收藏 转发 */}
          <div className={styles.function_bar}>
            <FunctionBar isFirst={true} likeNum={first.like_count} />
          </div>
        </div>

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
