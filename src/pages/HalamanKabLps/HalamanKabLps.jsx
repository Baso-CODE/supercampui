import React from "react";
import { Helmet } from "react-helmet-async";

import { useParams } from "react-router-dom";
import AlumniKedokteranLps from "../../Components/AlumniKedokteranLps/AlumniKedokteranLps";
import AlumniPtnLps from "../../Components/AlumniPTNLPS/AlumniPTNLPS";
import BenefitScLps from "../../Components/BenefitScLPS/BenefitScLPS";
import BottomCtaLps from "../../Components/BottomCtaLps/BottomCtaLps";
import FaqScLps from "../../Components/FaqScLps/FaqScLps";
import FasilitasScLps from "../../Components/FasilitasScLps/FasilitasScLps";
import JadwalKegiatanScLps from "../../Components/JadwalKegiatanScLps/JadwalKegiatanScLps";
import JumbotronLps from "../../Components/Jumbotron/Jumbotron";
import KegiatanScLps from "../../Components/KegiatanScLps/KegiatanScLps";
import KerjasamaHotel from "../../Components/KerjaSamaHotel/KerjaSamaHotel";
import ListAlumni from "../../Components/ListAlumni/ListAlumni";
import ListKecLps from "../../Components/ListKotaLps/ListKecLps";
import LulusanLps from "../../Components/LulusanLPS/LulusanLPS";
import PaketBelajarSnbtNew from "../../Components/PaketBelajarSnbt/PaketBelajarSnbtNew";
import PaketSupercampLps from "../../Components/PaketSupercamp/PaketSupercampLps";
import SlideCtaLps from "../../Components/SlideCtaLps/SlideCtaLps";
import TargetBelajarLps from "../../Components/TargetBelajarLps/TargetBelajarLps";
import TestimoniLps from "../../Components/TestimoniLps/TestimoniLps";
import TestimoniLps2 from "../../Components/TestimoniLps2/TestimoniLps2";
import TutorLpsSc from "../../Components/TutorLpsSc/TutorLpsSc";
import VenueScLps from "../../Components/VenueScLps/VenueScLps";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";

const HalamanKabLps = () => {
  // =========================================
  // AMBIL SLUG KABUPATEN DARI URL
  // =========================================
  const { id } = useParams();

  // =========================================
  // FORMAT NAMA KABUPATEN
  // =========================================
  const namaKabupaten = formatNamaWilayah(id);

  // =========================================
  // CANONICAL URL
  // =========================================
  const slugKabupaten = String(id || "")
    .trim()
    .toLowerCase();

  const canonicalUrl = `${DOMAIN}/les-privat-supercamp-utbk-snbt/${encodeURIComponent(slugKabupaten)}`;

  // =========================================
  // SEO METADATA
  // =========================================
  const pageTitle = `Les Privat UTBK SNBT ${namaKabupaten} | Bimbel Supercamp`;

  const pageDescription = `Persiapan UTBK SNBT untuk siswa di ${namaKabupaten} bersama Bimbel Supercamp. Program les privat, karantina intensif, dan pendampingan belajar masuk PTN serta Kedokteran.`;

  // =========================================
  // STRUCTURED DATA
  // =========================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    inLanguage: "id-ID",
    isPartOf: {
      "@type": "WebSite",
      name: "Bimbel Supercamp",
      url: `${DOMAIN}/`,
    },
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <link rel="canonical" href={canonicalUrl} />

        <meta name="robots" content="index, follow" />

        {/* ===================================== */}
        {/* OPEN GRAPH */}
        {/* ===================================== */}
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Bimbel Supercamp" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:image" content={`${DOMAIN}/images/banner.webp`} />

        <meta property="og:locale" content="id_ID" />

        {/* ===================================== */}
        {/* TWITTER CARD */}
        {/* ===================================== */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />

        <meta name="twitter:image" content={`${DOMAIN}/images/banner.webp`} />

        {/* ===================================== */}
        {/* JSON-LD */}
        {/* ===================================== */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Les Privat UTBK SNBT di {namaKabupaten} - Bimbingan Masuk PTN dan
          Kedokteran
        </h1>
        <p className="desk-seo-lps">
          Bimbel LPS adalah solusi terbaik untuk Anda yang membutuhkan layanan
          intensif privat persiapan UTBK SNBT dan Bimbel Karantina Masuk PTN &
          Kedokteran. Kami hadir untuk mendampingi Anda Sukses Masuk PTN Impian.
          Dengan pendampingan yang intensif dari master teacher berkompeten dan
          berpengalaman, setiap tahunnya ratusan siswa berhasil lolos masuk
          jurusan yang dicita-citakan.
          <br />
          <br />
          Bagi kami setiap siswa memiliki potensi belajarnya masing - masing
          yang dapat dikembangkan untuk kemudian bisa sukses meraih target
          jurusan dan PTN yang diinginkan. Kami percaya bahwa setiap siswa akan
          bisa membangkitkan potensi dan bakatnya dengan terus berlatih dan
          mendapat pendampingan belajar yang tepat serta maksimal. Bimbel LPS
          dengan layanan program yang sudah proven dan beragam pilihan paket
          belajar yang bisa dipilih siap menjadi pilihan terbaik Anda. Bersama
          Bimbel LPS - Sukses Raih PTN Impian.
        </p>
      </div>
      <LulusanLps />
      <AlumniKedokteranLps />
      <AlumniPtnLps />
      <BenefitScLps />
      <KerjasamaHotel />
      <TargetBelajarLps />
      <FasilitasScLps />
      <PaketSupercampLps />
      <PaketBelajarSnbtNew />
      <WaktuPelaksanaanSc />
      <VenueScLps />
      <JadwalKegiatanScLps />
      <SlideCtaLps />
      <KegiatanScLps />
      <VideoScLps />
      <TutorLpsSc />
      <TestimoniLps />
      <TestimoniLps2 />
      <ListAlumni />
      <ListKecLps />
      <FaqScLps />
      <BottomCtaLps />
    </React.Fragment>
  );
};

export default HalamanKabLps;
