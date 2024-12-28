// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import style from "./Navbar.module.css";
import Image from "next/image";




const Navbar = () => {
  return (
    <div className={style.container} id="">
      <a className={style.wrapper_gambar}>
        <Image
          src="/assets/images/logocataract.png"
          alt="icon"
          width="150"
          height="150"
        />
      </a>
      <div className={style.wrapper_menu}>
        <button className={style.menu}>
          <a href="#beranda">Beranda</a>
        </button>
        <button className={style.menu}>
          <a href="#tentang">Tentang</a>
        </button>
        <button className={style.menu}>
          <a href="#identifikasi">Identifikasi</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
