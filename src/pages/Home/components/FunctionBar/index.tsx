
import styles from './index.module.less'
import { EditSOutline, HeartOutline } from 'antd-mobile-icons'
import {Space} from 'antd-mobile'

function FunctionBar ({isFirst = false, likeNum = 0}) {


  return (
    <div>
      <div className={styles.bar_box}>
        <div className={styles.name}>
          {isFirst && <span>小记</span>}
        </div>
        <div className={styles.button_box}>
          {
            isFirst && <Space>
              <EditSOutline />
              <i className='iconfont icon-24gl-bookmarkPlus'></i>
            </Space>
          }
          <span>
            <HeartOutline /> <span>{likeNum}</span>
          </span>
          <i className='iconfont icon-share'></i>
        </div>
      </div>
    </div>
  )
}

export default FunctionBar
