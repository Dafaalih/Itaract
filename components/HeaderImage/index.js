// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import style from "./HeaderImage.module.css";
import Image from "next/image";

const HeaderImage = () => {
  return (
    <div className={style.wrapper_image} id="beranda">
      <Image src="/assets/images/1.png" alt="icon" layout="fill" />
    </div>
  );
};

export default HeaderImage;
