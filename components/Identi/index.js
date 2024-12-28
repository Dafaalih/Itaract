// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React, { useState } from "react";
import style from "./Identi.module.css";
import Button from "../Button";


const Identi = () => {
  const [prediction, setPrediction] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFile(file);
      setImagePreview(URL.createObjectURL(file)); // Menyimpan URL lokal gambar untuk preview
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
      setImagePreview(URL.createObjectURL(file)); // Menyimpan URL lokal gambar untuk preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Silakan pilih file terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      setPrediction(data);
      console.log("Hasil prediksi:", data);
    } catch (error) {
      console.error("Error saat mengunggah file:", error.message);
      alert(`Gagal mengunggah file: ${error.message}`);
    }
  };

  return (
    <div className={style.container} id="identifikasi">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <form
          onSubmit={handleSubmit}
          onDragEnter={handleDrag}
          className="space-y-6 relative"
          method="POST"
          encType="multipart/form-data"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Identifikasi Katarak
            </h1>
            <p className="text-gray-600 text-center">
              Masukkan gambar mata manusia untuk mengidentifikasi apakah mata
              tersebut katarak matur atau inmatur.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <input
                type="file"
                id="image"
                name="file"
                accept="image/*"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:bg-gray-800 file:text-white file:py-2 file:px-4 file:rounded-md hover:file:bg-gray-700"
                onChange={handleChange}
              />
            </div>

            <div
              className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 transition ${
                dragActive ? "border-gray-500 bg-gray-100" : "border-gray-300"
              }`}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              {!file ? (
                <p className="text-gray-600 text-sm text-center">
                  Seret dan lepaskan file di sini
                </p>
              ) : (
                <p className="text-gray-800 text-sm text-center">{file.name}</p>
              )}
            </div>

            <div className={style.button}>
              <Button variant="primary" type="submit">
                Identifikasi
              </Button>
            </div>
          </div>
        </form>

        {imagePreview && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Gambar Anda</h2>
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-full max-w-sm mx-auto rounded-lg shadow-md"
            />
          </div>
        )}

        {prediction && (
          <div className="mt-8 border-t pt-6">
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Hasil Identifikasi
              </h2>
              <p className="text-gray-700 mt-2 text-center">
                {prediction.result}{" "}
                <span className="font-bold">{prediction.accuracy}</span>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Identi;