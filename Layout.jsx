// 웹페이지 기본 구조

import React from "react";
import "./style.css";

const Layout = (props) => { // 부모 컴포넌트인 TodoList에서 props 받아오기
  return <div className="layout">{props.children}</div>;
};

export default Layout;