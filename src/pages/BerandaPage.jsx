import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.jpg";
import Image8 from "../assets/image8.jpg";
import Image9 from "../assets/image9.jpg";
import Image10 from "../assets/image10.jpg";
import Image11 from "../assets/image11.jpg";
import Avatar1 from "../assets/1.png";
import Avatar2 from "../assets/2.png";
import Avatar3 from "../assets/3.png";
import Avatar4 from "../assets/4.png";
import Avatar5 from "../assets/5.png";
import Avatar6 from "../assets/6.png";
import Avatar7 from "../assets/7.png";
import Avatar8 from "../assets/8.png";
import Avatar9 from "../assets/9.png";

const cards = [
  { img: Image3, avatar: Avatar1 },
  { img: Image4, avatar: Avatar2 },
  { img: Image5, avatar: Avatar3 },
  { img: Image6, avatar: Avatar4 },
  { img: Image7, avatar: Avatar5 },
  { img: Image8, avatar: Avatar6 },
  { img: Image9, avatar: Avatar7 },
  { img: Image10, avatar: Avatar8 },
  { img: Image11, avatar: Avatar9 },
];

const cardProps = {
  title: "Big 4 Auditor Financial Analyst",
  desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
  name: "Jenna Ortega",
  role: "Senior Accountant di Gojek",
  rating: "3.5 (86)",
  price: "Rp 300K",
};

const BerandaPage = () => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <section className="hero">
          <div className="hero-image">
            <img src={Image1} alt="Hero" />
            <div className="hero-overlay">
              <h1>
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                Interaktif!
              </h1>
              <p>
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                juga dapat berpartisipasi dalam latihan interaktif yang akan
                meningkatkan pemahaman Anda.
              </p>
              <button type="button" className="btn btn-course">
                Temukan Video Course untuk Dipelajari!
              </button>
            </div>
          </div>
        </section>

        <section className="card-section">
          <h2 className="section-title">Koleksi Video Pembelajaran Unggulan</h2>
          <p className="section-desc">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <div className="kategori">
            <a href="#">Semua Kelas</a>
            <a href="#">Pemasaran</a>
            <a href="#">Desain</a>
            <a href="#">Pengembangan Diri</a>
            <a href="#">Bisnis</a>
          </div>
        </section>

        <section className="card-grid">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              img={card.img}
              avatar={card.avatar}
              {...cardProps}
            />
          ))}
        </section>

        <section className="hero hero-secondary">
          <div className="hero-image">
            <img src={Image2} alt="Hero 2" />
            <div className="hero-overlay">
              <h5>NEWSLETTER</h5>
              <h1>Mau Belajar Lebih Banyak?</h1>
              <p>
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik hariesok.id
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Masukkan Emailmu"
                  required
                />
                <button type="submit" className="btn-subcribe">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BerandaPage;
