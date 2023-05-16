import React, { useRef, useState } from 'react'
import { Tabs, Swiper } from 'antd-mobile'
import styles from './index.module.less'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import Refresh from '../../components/Refresh'
import { sleep } from 'antd-mobile/es/utils/sleep'

import Read from './components/Read'

const tabItems = [
  { key: 'fruits', title: '阅读', component: <Read />},
  { key: 'vegetables', title: '日签' },
  { key: 'animals', title: '专题' },
  { key: 'others', title: '问答' },
  { key: 'others1', title: '长篇' },
  { key: 'others2', title: '小记' },
  { key: 'others3', title: '热榜' },
  { key: 'others4', title: '书影' },
  { key: 'others5', title: '音乐' },
  { key: '/api/author/hot', title: '作者' },
]


export default  () => {
  const swiperRef = useRef<SwiperRef>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 2, background: "#fff" }}>
        <Tabs

          className={styles.tabs}
          activeKey={tabItems[activeIndex].key}
          onChange={key => {
            const index = tabItems.findIndex(item => item.key === key)
            setActiveIndex(index)
            swiperRef.current?.swipeTo(index)
          }}
        >
          {tabItems.map(item => (
            <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
      </div>


        <Swiper
          direction='horizontal'
          loop
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={activeIndex}
          onIndexChange={index => {
            setActiveIndex(index)
          }}
        >
          {tabItems.map(item => (
              <Swiper.Item key={item.key}>
                {item.component || <div>{item.title}</div>}
              </Swiper.Item>
            ))}
        </Swiper>
    </>
  )
}
