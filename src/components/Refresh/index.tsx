import React, { useState } from "react";
import { PullToRefresh } from "antd-mobile";
import {PullStatus, PullToRefreshProps} from "antd-mobile/es/components/pull-to-refresh";

interface RefreshProps extends PullToRefreshProps {
  onRefresh: () => Promise<any>;
}

const Refresh: React.FC<RefreshProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const statusRecord: Record<PullStatus, string> = {
    pulling: '用力拉',
    canRelease: '松开吧',
    refreshing: '玩命加载中...',
    complete: '好啦',
  }
  const handleRefresh = async () => {
    setLoading(true);
    try {
      await props.onRefresh();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <PullToRefresh
      {...props}
      renderText={
      status => {
        return <div>{statusRecord[status]}</div>
      }
    } onRefresh={handleRefresh}>
      {props.children}
    </PullToRefresh>
  );
};

export default Refresh;
