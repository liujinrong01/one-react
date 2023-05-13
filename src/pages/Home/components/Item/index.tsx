
import styles from './index.module.less'
import FunctionBar from '../FunctionBar'
import {useEffect} from 'react'

import { ItemProps } from '../../home'

// @ts-ignore
function Item ({data}) {

  useEffect(() => {
    // console.log('data.content_type', data.content_type)
    // data.type_str = data.content_type === 1 ? '阅读' : data.content_type === 2 ? '连载' : data.content_type === 3 ? '问答' : '音乐'
    // console.log('data', data)

  })

  return (
    <div>
      <div className={styles.item}>
        <p className={styles.type}><span>{data.type_str}</span></p>

        <p className={styles.title}>{data.title}</p>

        <div className={styles.author}>
          文 / {data.author.user_name}
        </div>

        <p className={styles.desc}>{data.forward}</p>

        <img className={styles.article_img} src={data.img_url} alt=""/>

        {/* 功能栏 收藏 分享 */}

        <FunctionBar likeNum={data.like_count}  />

      </div>
    </div>
  )
}

export default Item
