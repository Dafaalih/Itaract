import React from "react";
import Image from "next/image";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className="container mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-start">
          <div className={style.logo}>
            <Image
              src="/assets/icons/logo2.png"
              alt="Cataract Detection"
              width={150}
              height={150}
            />
          </div>
          <p className={style.textdes}>
            Membantumu untuk mendeteksi masalah mata katarak.
          </p>
        </div>

        <div>
          <h3 className={style.quick}>Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#beranda">Beranda</a>
            </li>
            <li>
              <a href="#tentang">Tentang</a>
            </li>
            <li>
              <a href="#identifikasi">Identifikasi</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={style.kontak}>Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3">
              <Image
                src="/assets/icons/profile.png"
                alt="Phone"
                width={20}
                height={20}
              />
              <span className={style.text}>+1 234 567 890</span>
            </li>
            <li className="flex items-center space-x-3">
              <Image
                src="/assets/icons/profile.png"
                alt="Email"
                width={20}
                height={20}
              />
              <span className={style.text}>cataract@detection.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Image
                src="/assets/icons/profile.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className={style.text}>
                Kemang , Jakarta City, Indonesia
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#272727] text-center py-4 text-sm text-gray-500">
        &copy; 1999-2022. Plesk International GmbH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
