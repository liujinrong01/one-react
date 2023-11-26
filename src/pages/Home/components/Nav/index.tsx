
import styles from './index.module.less'
import { DownFill } from 'antd-mobile-icons'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { Button } from 'antd-mobile'


let currentDate = dayjs(); // 获取当前日期和时间
if (currentDate.hour() < 6) {
  currentDate = currentDate.subtract(1, 'day'); // 减去一天
}


function Nav({ day, handleToday }: any) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(false)
  const [weather, setWeather] = useState({
    climate: undefined,
    city_name: undefined,
    temperature: undefined
  })
  const dateData = useSelector((state: any) => state.home.dateData[currentDate.format('YYYY-MM-DD')]);

  // 判断是否今天
  const isToday = useMemo(() => {

    return currentDate.format('YYYY-MM-DD') === dayjs(day.str).format('YYYY-MM-DD')
  }, [day])





  function handleDate() {
    console.log('handleDate')
    setOpen(!open)
  }

  useEffect(() => {
    console.log('weather')

    if (dateData) {
      setWeather(dateData.weather)
    }

  }, [dateData, dispatch])


  return (
    <div>
      <div className={styles.date_box}>
        <div className={styles.date} onClick={handleDate}>
          <span className={styles.day}>{day.day}</span>
          <span className={styles.month}>{day.month}</span>
          <span className={styles.year}>.{day.year}</span>
          <DownFill className={styles.icon + ` ${open ? styles.open : ''}`} />
        </div>
        {
          isToday ? <div className={styles.weather}>{weather.city_name} {weather.climate} {weather.temperature}°C</div> : <Button size='mini' onClick={handleToday}>今天</Button>
        }
      </div>
    </div>
  )
}

export default Nav
