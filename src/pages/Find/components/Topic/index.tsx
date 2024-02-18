import {useTopicPagination} from "@/utils/hooks";
import FindApi from "@/api/find";
import {useRef} from "react";
import GetPullToRefreshlData from "@/components/GetPullToRefreshlData";

import styles from './index.module.less'
import {Image} from "antd-mobile";
import {useNavigate} from "react-router-dom";

const TopicItem = (item: any) => {
  const navigate = useNavigate()

  return (
    <div className={styles.item} onClick={() => navigate(`/topicdetail/${item.content_id}`)}>
      <Image className={styles.img} src={item.cover}  lazy/>
      <p className={styles.txt}>{item.title}</p>
    </div>
  )
}


const Topic = () => {

  const {loadMore, onRefresh, data: list, hasMore} = useTopicPagination(FindApi.getFindTopic);

  const listRef = useRef<any>(null)



  return <div>
    <GetPullToRefreshlData
      loadMore={async () => await loadMore()}
      onRefresh={async () => await onRefresh()}
      hasMore={hasMore}
      scrollRef={listRef}
    >
      {
        list.map((item: any) => {
          return (
            <TopicItem {...item} key={item.id} />
          )
        })
      }
    </GetPullToRefreshlData>
  </div>
}

export default Topic