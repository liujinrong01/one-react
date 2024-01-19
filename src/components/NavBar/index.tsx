import { NavBar } from 'antd-mobile'
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '@/store/common/actions';

interface NavBarProps {
  title: string; // 从 common 中映射的 title 属性
  setTitle: (title: string) => void; // 从 common 的 action 中映射的 setTitle 函数
}

const NavBox: React.FC<NavBarProps> = ({ title, setTitle }) => {
  useEffect(() => {
    setTitle(''); // 在需要时更新标题
  }, [setTitle]);
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  return (
    <NavBar onBack={back}> {title} </NavBar>
  )
}

// 映射 common 的状态到组件的 props
const mapStateToProps = (state: { common: { title: any; }; }) => ({
  title: state.common.title,
});

export default connect(mapStateToProps, { setTitle })(NavBox);