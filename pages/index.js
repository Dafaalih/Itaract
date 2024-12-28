// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import Title from "../components/Title";
import MainLayout from "../layouts/MainLayout";
import {
  Navbar,
  HeaderImage,
  Judul,
  Tentang,
  Identi,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Title>Beranda</Title>
        <Navbar />
        <HeaderImage />
        <Judul />
        <Tentang />
        <Identi />
        <Footer />
      </MainLayout>
    </>
  );
}
