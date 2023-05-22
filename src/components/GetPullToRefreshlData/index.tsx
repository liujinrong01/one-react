import React, { useEffect, useState } from "react";
import { InfiniteScroll, PullToRefresh, List } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";

const GetPullToRefreshlData = (props: any) => {
  const { itemKey } = props;

  useEffect(() => {
    // setData([]);
    // getNextData();
  }, [itemKey]);

  return (
    <div ref={props.scrollRef} style={{height: 'calc(100vh - 50px - 65px)', overflowY: 'scroll'}}>
      <PullToRefresh
        onRefresh={props.onRefresh}
        key={itemKey}
      >
        {props.children}
        <InfiniteScroll loadMore={props.loadMore} hasMore={props.hasMore} />
      </PullToRefresh>
    </div>
  );
};

export default GetPullToRefreshlData;
