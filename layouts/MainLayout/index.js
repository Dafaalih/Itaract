// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import style from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default MainLayout;
