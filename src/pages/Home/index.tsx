import React, {useEffect, useRef, useState} from 'react'
import dayjs from 'dayjs'
import styles from './index.module.less'
import { useSelector, useDispatch } from 'react-redux';
import {Swiper, SwiperRef} from 'antd-mobile'
import Nav from './components/Nav'
import DayContainer from './components/DayContainer'
import {fetchHomeData} from '../../store/home/actions'


const Home: React.FC = () => {

  const dispatch = useDispatch();
  const ref = useRef<SwiperRef>(null)
  const swiperWrap = useRef<HTMLDivElement>(null)

  const [day, setDay] = useState({
    day: dayjs().format('DD'),
    month: dayjs().format('MMM'),
    year: dayjs().format('YYYY'),
    str: dayjs().format('YYYY-MM-DD')
  })

  // 日期数组
  const [dateArray, setDateArray] = useState<string[]>([dayjs().format('YYYY-MM-DD'), dayjs().subtract(1, 'day').format('YYYY-MM-DD')])

  const [swiperStyle, setSwiperStyle] = useState<any>({
    '--swiper-height': "auto",
  });

  useEffect(() => {

  }, [])

  useEffect(() => {
    dateArray.forEach((item, index) => {
      // @ts-ignore
      dispatch(fetchHomeData(item));
    })

    setTimeout(() => {
      let swiperSlide: any = swiperWrap.current?.querySelectorAll('.adm-swiper-slide')
      setSwiperStyle({
        '--height': swiperSlide[0].getElementsByClassName('adm-swiper-item')[0].offsetHeight + 'px'
      });
    }, 100)

  }, [dispatch, dateArray])


  function swiperChange(index: number) {
    setSwiperStyle({
      '--height': 'auto'
    });
    // 获取当前日期
    let date =  dateArray[index]
    setDay({
      day: dayjs(date).format('DD'),
      month: dayjs(date).format('MMM'),
      year: dayjs(date).format('YYYY'),
      str: dayjs(date).format('YYYY-MM-DD')
    })
    //获取当前日期的前一天  滑动只需要判断前一天是否存在
    let preDate = dayjs(date).subtract(1, 'day').format('YYYY-MM-DD')
    // 添加到日期数组中
    if(dateArray.indexOf(preDate) === -1) {
      setDateArray([...dateArray, preDate])
    }

    // 获取 swiperWrap 下的 adm-swiper-slide

    let swiperSlide: any = swiperWrap.current?.querySelectorAll('.adm-swiper-slide')

    setSwiperStyle({
      '--height': swiperSlide[index].getElementsByClassName('adm-swiper-item')[0].offsetHeight + 'px'
    });


  }

  function handleToday() {
    console.log('handleToday')
    ref.current?.swipeTo(0)
  }

  return (

      <div className={styles.page_box}>
        <div className={styles.nav_box}>
          <Nav day={day} handleToday={handleToday}/>
        </div>

        <div className={styles.container} ref={swiperWrap}>

          <Swiper indicator={() => null} ref={ref} onIndexChange={(index) => swiperChange(index)} style={swiperStyle}>
            {/*<Swiper.Item>*/}
            {/*  <DayContainer date={oneDate} />*/}
            {/*</Swiper.Item>*/}
            {
              dateArray.map((item, index) => {
                return (
                    <Swiper.Item key={index}>
                      <DayContainer date={item} />
                    </Swiper.Item>
                )
              })
            }

            {/*<Swiper.Item>*/}
            {/*  <DayContainer date={twoDate} />*/}
            {/*</Swiper.Item>*/}
          </Swiper>
        </div>




      </div>
  )

}

export default Home
