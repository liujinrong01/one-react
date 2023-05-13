import React, {useEffect, useState} from 'react'

import styles from './index.module.less'

import HomeApi from '../../api/home'
import { Swiper } from 'antd-mobile'

import Nav from './components/Nav'
import Item from './components/Item'
import FunctionBar from './components/FunctionBar'
const Home: React.FC = () => {

  const [data, setData] = useState<any>([])
  const [first, setFirst] = useState<any>({})
  const [weather, setWeather] = useState<any>({})


  useEffect(() => {
    async function getData() {
      const res = await HomeApi.getHomeData({
        date: '2023-05-13',
        city: 'shanghai'
      })

      res.data.content_list.forEach((item: any) => {
        console.log(item.content_type, item.tag_list)
        const map = new Map([
          ['0', ''],
          ['1', '阅 读'],
          ['2', ''],
          ["3", '问 答'],
          ['4', ''],
          ['5', ''],
          ['8', '收音机']
        ]);
        item.type_str = item.tag_list.length ? item.tag_list[0]?.title : map.get(item.content_type)
        console.log('item.tag_list', item.type_str)
      })
      setFirst(res.data.content_list[0])
      setData(res.data.content_list.slice(1))
      setWeather(res.data.weather)
    }
    getData()
  }, [])

  return (
    <div className={styles.page_box}>
      <div className={styles.nav_box}>
        <Nav weather={weather} />
      </div>

      <div className={styles.container}>

        <Swiper indicator={() => null}>
          <Swiper.Item>
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
          </Swiper.Item>
        </Swiper>
      </div>




    </div>
  )

}

export default Home
