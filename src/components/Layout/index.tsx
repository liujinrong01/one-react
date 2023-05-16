import React, {ReactNode} from 'react';
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  AppstoreOutline,
  AudioOutline,
  UserOutline,
} from 'antd-mobile-icons'
import {useNavigate, useLocation} from 'react-router-dom'

import styles from './index.module.less'

function Bottom() {

  const navigate = useNavigate()
  const location = useLocation()
  const {pathname} = location

  const handleTabClick = (link: string) => {
    navigate(link)
  }
  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline/>,

    },
    {
      key: '/find',
      title: '发现',
      icon: <AppstoreOutline/>,
    },
    {
      key: '/radio',
      title: '收音机',
      icon: <AudioOutline />,
    },
    {
      key: '/mine',
      title: '我的',
      icon: <UserOutline/>,
    },
  ]
  return (
    <TabBar activeKey={pathname} onChange={value => handleTabClick(value)}>
      {
        tabs.map(tab => (
          // <Link key={tab.link} to={tab.link}>{tab.title}</Link>
          <TabBar.Item key={tab.key} icon={tab.icon} title={tab.title} />
        ))
      }
    </TabBar>
  )
}


type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {


  return (
    <div className={styles.app}>
       <div className={styles.body}>
         <main>{children}</main>
       </div>
      <div className={styles.bottom}>
        <Bottom />
      </div>
    </div>
  );
}

export default Layout;
