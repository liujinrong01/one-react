
import styles from './index.module.less'
import FunctionBar from '../FunctionBar'
import {useEffect} from 'react'


// @ts-ignore
function Item ({data}) {

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
