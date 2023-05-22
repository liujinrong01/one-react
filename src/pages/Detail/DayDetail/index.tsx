import styles from './index.module.less'
import FunctionBar from '@/pages/Home/components/FunctionBar'
import React, {useEffect, useState} from 'react'
import DetailApi from '@/api/detail'
import {useParams} from 'react-router-dom'

interface Props {
  detail?: any
}
export default ({detail}: Props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<any>({});

  useEffect(() => {
    if(detail) {
      console.log('detail', detail);
      setDetailData(detail);
    } else {
      console.log('detail is null');
      DetailApi.getDayDetail(id).then((res: any) => {
        setDetailData(res.data);
      });

    }
  }, [detail])

  return (
    <div className={styles.first_box}>
      <div className={styles.img_text_box}>
        <img src={detailData.img_url} alt=""/>
        <div className={styles.text_box}>
          <p className={`${styles.t1} color-bcbcbc center`}>{detailData.title} | {detailData.pic_info}</p>
          <p className={`${styles.t2}`}>{detailData.forward}</p>
          <p className={`${styles.t3} color-bcbcbc center`}>{detailData.words_info}</p>
        </div>
      </div>
      {/* 功能栏 评论 书签 收藏 转发 */}
      <div className={styles.function_bar}>
        <FunctionBar isFirst={true} likeNum={detailData.like_count} />
      </div>
    </div>
  )
}
