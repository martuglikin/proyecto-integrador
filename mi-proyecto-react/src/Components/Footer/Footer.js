import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer>
        <p>Copyright © Dashboard 2022</p>

        <div class="linea-divisoria"></div>
        <h1 class="footer-title">Integrantes</h1>

        <div class="row">
            <div class="col-12 col-lg-4">
                <article class="footer-data">
                    <img src="/images/footer/footer-i1.jpeg" class="footer-icon"/>
                    <h2>Martina Glikin</h2>
                </article>
            </div>
            <div class="col-12 col-lg-4">
                <article class="footer-data">
                    <img src="/images/footer/footer-i2.jpg" class="footer-icon"/>
                    <h2>Milagros Alonso</h2>
                </article>
            </div>
            <div class="col-12 col-lg-4">
                <article class="footer-data">
                    <img src="/images/footer/footer-i3.jpg" class="footer-icon"/>
                    <h2>Felicitas Reilly</h2>
                </article>
            </div>
        </div>
    </footer>
);
}

export default Footer;