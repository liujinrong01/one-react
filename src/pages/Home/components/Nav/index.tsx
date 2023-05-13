
import styles from './index.module.less'
import { DownFill } from 'antd-mobile-icons'
import {useState} from 'react'
function Nav ({weather}: any) {

  const [open, setOpen] = useState<boolean>(false)

  function  handleDate () {
    console.log('handleDate')
    setOpen(!open)
  }


  return (
    <div>
      <div className={styles.date_box}>
        <div className={styles.date} onClick={handleDate}>
          <span className={styles.day}>13</span>
          <span className={styles.month}>May</span>
          <span className={styles.year}>.2023</span>
          <DownFill className={styles.icon + ` ${open ? styles.open : ''}`} />
        </div>
        <div className={styles.weather}>{weather.city_name} {weather.climate} {weather.temperature}°C</div>
      </div>
    </div>
  )
}

export default Nav
