import {useEffect, useState} from 'react'

import styles from './index.module.less'
import GetPullToRefreshlData from '../../../../components/GetPullToRefreshlData'
import {sleep} from 'antd-mobile/es/utils/sleep'
import {Divider} from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import dayjs from 'dayjs'

import FindApi from '../../../../api/find'
import {formatMonth} from '../../../../utils/utils'
import {useScrollToMonth} from '../../../../utils/hooks'

export default () => {

  const [list, setList] = useState<any>(new Map())
  const [hasMore, setHasMore] = useState(true)
  const currentMonth = useScrollToMonth(list)

  // const currentMonth = useScrollToMonth(list)

  useEffect(() => {
    console.log(process.env)
  }, [])



  useEffect(() => {
    console.log('read: currentMonth useEffect', currentMonth)
  }, [list, currentMonth])
  const loadMore = async () => {
    console.log('read: loadMore')
    await sleep(1000)
    // const newMap = new Map(list)
    // newMap.set('05 月', [
    //   {
    //     "id": 5933,
    //     "title": "冷与热的旅程",
    //     "subtitle": "文／申夏生",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/Fv2Ij7EmzDIsN-NHL_ZrG9askNWd?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-15 06:00:00"
    //   },
    //   {
    //     "id": 5935,
    //     "title": "后台谈话｜魏思孝：文学没有过时，也没有时髦过",
    //     "subtitle": "文／魏思孝等2人",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/Fh8hXjPG_17qNDgZBFyvCyelHv7z?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-14 06:00:00"
    //   },
    //   {
    //     "id": 5936,
    //     "title": "垂悼的事",
    //     "subtitle": "文／与路",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/Fq8jCc290sMPxMSs6IhlEYs5L5sN?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-14 06:00:00"
    //   },
    //   {
    //     "id": 5931,
    //     "title": "狡猾瓢虫",
    //     "subtitle": "文／贾周章",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FtjkXXDKOS9l2ncHrHz5nPGtSymE?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-13 06:00:00"
    //   },
    //   {
    //     "id": 5934,
    //     "title": "逃离到下一个更大的笼子",
    //     "subtitle": "文／读者",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FtSMhKpZRglsr3dGHuMMfPObbuw3?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-13 06:00:00"
    //   },
    //   {
    //     "id": 5930,
    //     "title": "请回答，2008",
    //     "subtitle": "文／唐冲",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FmcN7_ZNfDGPBW51TA192jljvPxf?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-12 06:00:00"
    //   },
    //   {
    //     "id": 5929,
    //     "title": "张大爷的摇滚人生",
    //     "subtitle": "文／李夏",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FspyYRulaHQgnW3j-gBERsZBeY4I?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-11 06:00:00"
    //   },
    //   {
    //     "id": 5927,
    //     "title": "生命里的某一天",
    //     "subtitle": "文／苏更生",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FuggN8ke8f86E4RAXBsX3R4HjyvT?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-10 06:00:00"
    //   },
    //   {
    //     "id": 5928,
    //     "title": "海象日记 | 在婴儿围栏里躺下",
    //     "subtitle": "文／乌冬",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/Fu9HhxHFsRiU0cstNwk6KJmgjFmW?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-10 06:00:00"
    //   },
    //   {
    //     "id": 5925,
    //     "title": "谈不好恋爱的我",
    //     "subtitle": "文／周宏翔",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FvLZd2VVt_uMQsnhphUFQ9em71Cz?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-09 06:00:00"
    //   },
    //   {
    //     "id": 5924,
    //     "title": "回溯之潮",
    //     "subtitle": "文／沈郁",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FtCKxxcG-jBa9lnm4C_ZF5C25Mjj?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-08 06:00:00"
    //   },
    //   {
    //     "id": 5921,
    //     "title": "最好的世界",
    //     "subtitle": "文／高俊逸",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/Fk0tI2wEMZVVHnUQ1bRCP87O1r19?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-07 06:00:00"
    //   },
    //   {
    //     "id": 5923,
    //     "title": "后台谈话｜毕啸南：活下去的道理就是平凡的道理",
    //     "subtitle": "文／毕啸南等2人",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FmeUaA8369RmtiRQMAag3JB9x0Q-?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-07 06:00:00"
    //   },
    //   {
    //     "id": 5920,
    //     "title": "沉默之中",
    //     "subtitle": "文／王陌书",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FpkO1GiOQF1UGprTKudpj_I2pVVp?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-06 06:00:00"
    //   },
    //   {
    //     "id": 5922,
    //     "title": "我们不该修了桥， 然后站在桥上",
    //     "subtitle": "文／读者",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FpYHU8ryGyqqFQ9AfFlLVG7k2WAk?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-06 06:00:00"
    //   },
    //   {
    //     "id": 5919,
    //     "title": "来去之间",
    //     "subtitle": "文／甲或乙",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FnbAry5eH4TkK9wImT1x1vwHfABZ?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-05 06:00:00"
    //   },
    //   {
    //     "id": 5918,
    //     "title": "摄杀时刻",
    //     "subtitle": "文／西小麦",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FtrkMFtrpFZk_gXtS3c_CUyvl4f6?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-04 06:00:00"
    //   },
    //   {
    //     "id": 5917,
    //     "title": "珺子和那片海",
    //     "subtitle": "文／徐楷",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FspF-1QT-gr4uEJXBqRe5Bx3F3ov?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-03 06:00:00"
    //   },
    //   {
    //     "id": 5913,
    //     "title": "关于“奥斯卡”的一切",
    //     "subtitle": "文／柳敏",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/Fj2PsbNqzDlBFsqhIHtwXN5_Txjo?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-02 06:00:00"
    //   },
    //   {
    //     "id": 5916,
    //     "title": "奔跑",
    //     "subtitle": "文／杨咏",
    //     "category": 1,
    //     "cover": "http:\/\/image.wufazhuce.com\/FkITwoqjShfqz0iTsHi3zmlLvnNF?imageView2\/1\/w\/120\/h\/120",
    //     "maketime": "2023-05-01 06:00:00"
    //   }
    // ])
    // setList(newMap)
    const newMap = new Map(list)

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
      const { data } = await FindApi.getFindRead({month: monthDetail.api})

      newMap.set(monthDetail.render, data)
      setList(newMap)
      setHasMore(data.length > 0)
    } catch (error) {
      console.log(error)
      setHasMore(true)
    }
  }

  const  onRefresh = async () => {
    await sleep(1000)
    console.log('read: onRefresh')
  }

  return (

    <GetPullToRefreshlData
      loadMore={async () => await loadMore()}
      onRefresh={async () => await onRefresh()}
      hasMore={hasMore}
    >
      <p className={styles.top_date}><span>2023年 05 月</span> <DownOutline /> </p>
      <div className={styles.content_box}>
        {
          Array.from(list).map(([key, value]: any) => {
            return (
              <div key={key}>
                <Divider className={styles.date} key={key}>{key}</Divider>
                {
                  value.map((item: any, index: number) => {
                    return (
                      <div className={styles.item} key={index}>
                        <div className={styles.cover}>
                          <img src={item.cover} alt="" />
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
