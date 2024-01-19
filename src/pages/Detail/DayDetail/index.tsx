import styles from './index.module.less'
import FunctionBar from '@/pages/Home/components/FunctionBar'
import React, {useEffect, useState, useRef} from 'react'
import DetailApi from '@/api/detail'
import {useParams} from 'react-router-dom'
import { Popover } from 'antd-mobile'
import { InformationCircleFill } from 'antd-mobile-icons'


interface Props {
  detail?: any
}

interface DetailData {
  img_url: string;
  title: string;
  pic_info: string;
  forward: string;
  words_info: string;
  like_count: number;
}


export default ({detail}: Props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<DetailData | any>({});
  const [visible, setVisible] = useState(false);
  const parentRef = useRef<any>(null);

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
    <div className={`${styles.first_box} first_box`} ref={parentRef}>
      <div className={styles.img_text_box}>
        <img src={detailData?.img_url} alt=""/>
        <div className={styles.text_box}>
          <p className={`${styles.t1} color-bcbcbc center`}>{detailData?.title} | {detailData?.pic_info}</p>
          <p className={`${styles.t2}`}>{detailData?.forward}</p>
          <p className={`${styles.t3} color-bcbcbc center`}>{detailData?.words_info}
            <Popover
              content={
                <div className={styles.author_info_box}>
                  <p className={styles.t1}>ABOUT</p>
                  <p className={styles.t2}>{detailData?.text_author_info?.text_author_name}</p>
                  <p className={styles.t3}>{detailData?.text_author_info?.text_author_work}</p>
                  <p className={styles.t4}>{detailData?.text_author_info?.text_author_desc}</p>

                </div>
              }
              trigger='click'
              placement='top'
              visible={visible}
              getContainer={() => parentRef.current}
            >
              <InformationCircleFill onClick={() => setVisible(v => !v)} />
            </Popover>
          </p>
        </div>
      </div>
      {/* 功能栏 评论 书签 收藏 转发 */}
      <div className={styles.function_bar}>
        <FunctionBar isFirst={true} likeNum={detailData?.like_count} />
      </div>
    </div>
  )
}
