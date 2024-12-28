import React from "react";
import style from "./Tentang.module.css";
import Image from "next/image";

const Tentang = () => {
  return (
    <div className="py-12 px-6" id="tentang">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          Cara penggunaan website Itaract. :
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className={style.nomor}>1</div>
            <h3 className="text-lg font-semibold mt-4">Siapkan Foto Mata</h3>
            <p className="text-gray-600 mt-2">
              Ambil atau pilih foto mata yang ingin Anda periksa apakah mata
              normal, katarak matur atau inmatur.
            </p>
          </div>
          <div>
            <div className={style.nomor}>2</div>
            <h3 className="text-lg font-semibold mt-4">Upload Foto Mata</h3>
            <p className="text-gray-600 mt-2">
              Unggah foto mata ke dalam website menggunakan tombol unggah.
            </p>
          </div>
          <div>
            <div className={style.nomor}>3</div>
            <h3 className="text-lg font-semibold mt-4">Hasil Identifikasi</h3>
            <p className="text-gray-600 mt-2">
              Hasilnya akan tersedia yaitu antara mata normal, mature, dan
              inmature
            </p>
          </div>
        </div>
      </div>

      {/* Existing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - Dataset */}
        <div className={style.card}>
          <div className="flex justify-center mb-4">
            <Image
              src="/assets/icons/dataset.png"
              alt="Dataset icon"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-white text-center">
            Sumber Dataset
          </h3>
          <p className="mt-2 text-gray-300 text-center">
            Dataset ini diambil dari situs Kaggle, sebuah platform populer yang
            menyediakan berbagai dataset untuk keperluan analisis data,
            pembelajaran mesin, dan eksplorasi statistik. Anda dapat mengakses
            dataset ini dengan mengunjungi situs Kaggle melalui{" "}
            <a
              href="https://www.kaggle.com/datasets/rifdana/cataract-photo-image-dataset"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              tautan ini
            </a>
            .
          </p>
        </div>

        {/* Card 2 - Accuracy */}
        <div className={style.card}>
          <div className="flex justify-center mb-4">
            <Image
              src="/assets/icons/percentage.png"
              alt="Accuracy icon"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-white text-center">
            Tingkat Akurasi
          </h3>
          <p className="mt-2 text-gray-300 text-center">
            Model ini memiliki tingkat akurasi yang tinggi dalam mendeteksi mata
            katarak dengan memanfaatkan teknologi machine learning dan deep
            learning. Tingkat akurasi diuji menggunakan data validasi.
          </p>
        </div>

        {/* Card 3 - Architecture */}
        <div className={style.card}>
          <div className="flex justify-center mb-4">
            <Image
              src="/assets/icons/brain.png"
              alt="Architecture icon"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-white text-center">
            Arsitektur
          </h3>
          <p className="mt-2 text-gray-300 text-center">
            Arsitektur model ini menggunakan Convolutional Neural Network (CNN),
            yang dirancang untuk mengenali pola dalam gambar mata dan mendeteksi
            keberadaan katarak dengan efisien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
