import React, {useEffect, useRef, useState} from 'react'
import dayjs from 'dayjs'
import styles from './index.module.less'
import { useSelector, useDispatch } from 'react-redux';
import {Swiper, SwiperRef} from 'antd-mobile'
import Nav from './components/Nav'
import DayContainer from './components/DayContainer'
import {fetchHomeData} from '../../store/home/actions'


// 判断当前时间是否在 6 点前,如果6 点前则当天为前一天
let currentDate = dayjs(); // 获取当前日期和时间
if (currentDate.hour() < 6) {
  currentDate = currentDate.subtract(1, 'day'); // 减去一天
}

const Home: React.FC = () => {

  const dispatch = useDispatch();
  const ref = useRef<SwiperRef>(null)
  const swiperWrap = useRef<HTMLDivElement>(null)

  const [day, setDay] = useState({
    day: currentDate.format('DD'),
    month: currentDate.format('MMM'),
    year: currentDate.format('YYYY'),
    str: currentDate.format('YYYY-MM-DD')
  })

  // 日期数组 
  const [dateArray, setDateArray] = useState<string[]>([currentDate.format('YYYY-MM-DD'), currentDate.subtract(1, 'day').format('YYYY-MM-DD')])

  const [swiperStyle, setSwiperStyle] = useState<any>({
    '--swiper-height': "auto",
  });

  useEffect(() => {

  }, [])

  useEffect(() => {
    console.log(dateArray)
    dateArray.forEach((item, index) => {
      // @ts-ignore
      dispatch(fetchHomeData(item));
    })

    setTimeout(() => {
      let swiperSlide: any = swiperWrap.current?.querySelectorAll('.adm-swiper-slide')
      // setSwiperStyle({
      //   '--height': swiperSlide[0].getElementsByClassName('adm-swiper-item')[0].offsetHeight + 'px'
      // });
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
            {
              dateArray.map((item, index) => {
                return (
                    <Swiper.Item key={index}>
                      <DayContainer date={item} />
                    </Swiper.Item>
                )
              })
            }
          </Swiper>
        </div>
      </div>
  )

}

export default Home
