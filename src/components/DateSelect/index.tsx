import styles from './index.module.less'
import {DownOutline} from 'antd-mobile-icons'

interface IProps {
  currentMonth: string
}
const TopDate = ({currentMonth}: IProps) => {

  return (
      !!currentMonth ? <p className={styles.top_date}><span>{currentMonth}</span> <DownOutline/></p> : <></>
  )
}

export default TopDate
