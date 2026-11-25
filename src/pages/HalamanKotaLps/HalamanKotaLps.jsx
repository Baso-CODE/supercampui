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
import ListKabLps from "../../Components/ListKotaLps/ListKabLps";
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
import formatNamaWilayah from "../../utils/formatNamaWilayah";
import "./HalamanKotaLps.css";

const HalamanKotaLps = () => {
  // =========================================
  // AMBIL PARAMETER URL
  // =========================================
  const { id } = useParams();

  // =========================================
  // FORMAT SLUG MENJADI NAMA KOTA
  // =========================================
  const namaKota = formatNamaWilayah(id);

  // =========================================
  // SLUG UNTUK CANONICAL
  // =========================================
  const slugKota = String(id || "")
    .trim()
    .toLowerCase();

  const canonicalUrl = `https://bimbelsupercamp.com/bimbel-privat-supercamp-utbk-snbt/${encodeURIComponent(slugKota)}`;

  // =========================================
  // SEO METADATA
  // =========================================
  const pageTitle = `Bimbel UTBK SNBT ${namaKota} | Supercamp Masuk PTN`;

  const pageDescription = `Persiapan UTBK SNBT di ${namaKota} bersama Bimbel Supercamp. Program intensif, karantina, dan les privat untuk masuk PTN favorit serta Kedokteran.`;

  return (
    <React.Fragment>
      <Helmet>
        {/* ===================================== */}
        {/* BASIC SEO */}
        {/* ===================================== */}

        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content={`bimbel utbk snbt ${namaKota}, les privat ptn ${namaKota}, supercamp ${namaKota}, karantina masuk ptn, bimbel masuk kedokteran`}
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta name="robots" content="index, follow" />

        {/* ===================================== */}
        {/* OPEN GRAPH */}
        {/* ===================================== */}

        <meta property="og:type" content="website" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta
          property="og:image"
          content="https://bimbelsupercamp.com/images/banner.webp"
        />

        {/* ===================================== */}
        {/* TWITTER */}
        {/* ===================================== */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />

        {/* ===================================== */}
        {/* JSON-LD */}
        {/* ===================================== */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            inLanguage: "id-ID",
            isPartOf: {
              "@type": "WebSite",
              name: "Bimbel Supercamp",
              url: "https://bimbelsupercamp.com/",
            },
          })}
        </script>
      </Helmet>

      <JumbotronLps />
      <section className="parent-text-seo-lps">
        <div className="container-seo-content">
          <div className="header-seo-lps">
            <h1 className="text-seo-lps">
              Bimbel UTBK SNBT di{" "}
              <span className="highlight-city">{namaKota}</span> - Les Privat &
              Supercamp PTN Kedokteran 2027
            </h1>
          </div>

          <div className="desk-seo-lps">
            <p>
              <strong>Bimbel LPS</strong> adalah solusi strategis bagi Anda yang
              membutuhkan layanan intensif privat untuk persiapan{" "}
              <strong>UTBK SNBT</strong> dan{" "}
              <strong>Bimbel Karantina Masuk PTN & Kedokteran</strong>. Kami
              hadir sebagai mitra belajar yang siap mendampingi Anda meraih
              kursi di PTN impian.
            </p>
            <p>
              Melalui pendampingan eksklusif dari <em>Master Teacher</em>{" "}
              berkompeten, kami telah membuktikan keberhasilan dengan meloloskan
              ratusan siswa ke berbagai jurusan favorit setiap tahunnya. Kami
              percaya setiap siswa memiliki potensi unik yang bisa dioptimalkan
              melalui metode belajar yang tepat, latihan terukur, dan
              pendampingan maksimal.
            </p>
            <p className="closing-statement">
              Pilihlah program yang telah terbukti (*proven*) dan beragam paket
              belajar fleksibel yang sesuai dengan kebutuhan Anda.{" "}
              <strong>Bersama Bimbel LPS — Sukses Raih PTN Impian!</strong>
            </p>
          </div>
        </div>
      </section>
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
      <ListKabLps />
      <FaqScLps />
      <BottomCtaLps />
    </React.Fragment>
  );
};

export default HalamanKotaLps;
