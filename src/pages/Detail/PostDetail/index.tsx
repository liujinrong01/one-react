import styles from './index.module.less'
import React, {useEffect, useState} from 'react'
import DetailApi from '@/api/detail'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux';
import { setTitle } from '@/store/common/actions';

interface DetailPageProps {
  setTitle: (title: string) => void;
}


const PostDetail: React.FC<DetailPageProps> = ({ setTitle }) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<any>({});

  useEffect(() => {
    console.log('detail is null');
    DetailApi.getArticleDetail(id).then((res: any) => {
      setDetailData(res.data);
      document.title = res.data.title;
      setTitle(res.data.title);
    });
  }, [id])

  return (
    <div className={styles.detail_page}>
      <div className={styles.post_content}>
        <iframe srcDoc={detailData.html_content}  style={{ width: '100%', height: '100%', border: 'none' }} ></iframe>
      </div>

    </div>
  )
}

export default connect(null, {setTitle})(PostDetail)
