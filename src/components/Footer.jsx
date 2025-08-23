import React from "react";
import Logo from "../assets/Logo.png";
import {
  FaChevronRight,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <img src={Logo} alt="Logo" className="logo" />
        <h4>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h4>
        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
        <p>+62-877-7123-1234</p>
      </div>
      <div className="footer-right">
        <div>
          <h4 className="footer-toggle">
            Kategori
            <button
              className="footer-arrow"
              type="button"
              aria-label="Toggle Kategori"
            >
              <FaChevronRight size={14} />
            </button>
          </h4>
          <ul>
            <li>
              <a href="#">Digital & Teknologi</a>
            </li>
            <li>
              <a href="#">Pemasaran</a>
            </li>
            <li>
              <a href="#">Manajemen Bisnis</a>
            </li>
            <li>
              <a href="#">Pengembangan Diri</a>
            </li>
            <li>
              <a href="#">Desain</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="footer-toggle">
            Perusahaan
            <button
              className="footer-arrow"
              type="button"
              aria-label="Toggle Kategori"
            >
              <FaChevronRight size={14} />
            </button>
          </h4>
          <ul>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Kebijakan Privasi</a>
            </li>
            <li>
              <a href="#">Ketentuan Layanan</a>
            </li>
            <li>
              <a href="#">Bantuan</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="footer-toggle">
            Komunitas
            <button
              className="footer-arrow"
              type="button"
              aria-label="Toggle Kategori"
            >
              <FaChevronRight size={14} />
            </button>
          </h4>
          <ul>
            <li>
              <a href="#">Tips Sukses</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-copyright">
        &copy; 2023 Gerobak Sayur All Rights Reserved.
      </div>
      <div className="footer-social">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
