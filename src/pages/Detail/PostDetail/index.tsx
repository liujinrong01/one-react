import styles from './index.module.less'
import FunctionBar from '@/pages/Home/components/FunctionBar'
import React, {useEffect, useState} from 'react'
import DetailApi from '@/api/detail'
import {useParams} from 'react-router-dom'
import {HeartOutline} from "antd-mobile-icons";

interface Props {
  detail?: any
}
export default ({detail}: Props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<any>({});

  useEffect(() => {
    console.log('detail is null');
    DetailApi.getArticleDetail(id).then((res: any) => {
      setDetailData(res.data);
    });
  }, [])

  return (
    <div className={styles.detail_page}>
      <div className={styles.post_content}>
        <iframe srcDoc={detailData.html_content}  style={{ width: '100%', height: '100%', border: 'none' }} ></iframe>
      </div>

    </div>
  )
}
