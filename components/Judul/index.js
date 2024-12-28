import React from "react";
import style from "./Judul.module.css";
import Button from "../Button";

const Judul = () => {
  return (
    <div className={style.wrapper_judul}>
      <h1 className={style.judul}>
        Deteksi katarak dalam hitungan detik dengan Itaract.
      </h1>
      <p className={style.Penjelasan}>
        Website ini dirancang untuk membantu pengguna, terutama tenaga medis
        atau pasien, dalam mendeteksi potensi katarak dengan menganalisis citra
        mata. Sistem ini menggunakan teknologi berbasis kecerdasan buatan (AI),
        seperti deep learning, untuk memproses gambar mata dan memberikan hasil
        analisis secara cepat dan akurat.
      </p>
      <div className={style.button}>
        <Button variant="primary">
          <a href="#identifikasi">Mulai Identifikasi</a>
        </Button>
      </div>
    </div>
  );
};

export default Judul;
