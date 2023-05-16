import React, { useEffect, useState } from "react";
import { InfiniteScroll, PullToRefresh, List } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";

const GetPullToRefreshlData = (props: any) => {
  const { itemKey } = props;
  // const [data, setData] = useState<string[]>([]);
  // const [hasMore, setHasMore] = useState(true);
  const loadMore = async () => {
    // const append = await getNextData();
    // setData([...data, ...append]);
    // console.log('loadMore')
    // setHasMore(false);
    await props.loadMore()
  };

  useEffect(() => {
    // setData([]);
    // getNextData();
  }, [itemKey]);

  return (
    <div style={{height: 'calc(100vh - 50px - 65px)', overflowY: 'scroll'}}>
      <PullToRefresh
        {...props}
        key={itemKey}
      >
        {props.children}
        <InfiniteScroll loadMore={props.loadMore} hasMore={props.hasMore} />
      </PullToRefresh>
    </div>
  );
};

export default GetPullToRefreshlData;
