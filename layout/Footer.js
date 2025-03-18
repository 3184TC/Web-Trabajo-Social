"use client";
import React, { useEffect, useState } from 'react';
import Counter from "@/components/Counter";
import Link from "next/link";

const Footer = ({ footer, insta }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    default:
      return <Footer2 insta={insta} />;
  }
};
export default Footer;

const FooterInstagram = () => {
  return (
    <div className="container">
      <div className="footer-instagram pt-100 mb-70">
        {/* <div className="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram1.jpg"
            >
              <img
                src="assets/images/instagram/instagram1.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram2.jpg"
            >
              <img
                src="assets/images/instagram/instagram2.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram3.jpg"
            >
              <img
                src="assets/images/instagram/instagram3.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram4.jpg"
            >
              <img
                src="assets/images/instagram/instagram4.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram5.jpg"
            >
              <img
                src="assets/images/instagram/instagram5.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram6.jpg"
            >
              <img
                src="assets/images/instagram/instagram6.jpg"
                alt="Instagram"
              />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Footer1 = () => {
  const [institucion, setInstitucion] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchInstitucion = async () => {
      try {
        const response = await fetch("https://serviciopagina.upea.bo/api/InstitucionUPEA/36");
        const data = await response.json();
        setInstitucion(data.Descripcion);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitucion();
  }, []);
  return (
    <footer
      className="main-footer bgs-cover overlay rel z-1 pb-25"
      style={{
        backgroundImage: "url(assets/images/TS-3.jpg)",
      }}
    >
      {/* <div className="container">
        <div className="footer-top pt-100 pb-30">
          <div className="row justify-content-between">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
                <p>
                  WeELBA curate bespoke itineraries tailored to your preferences,
                  ensuring every trip is seamless and enriching hidden gems
                  beaten
                </p>
                <div className="social-style-one mt-15">
                  <Link href="contact">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-pinterest" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title counter-text-wrap mb-35">
                <h2>Subscribe Newsletter</h2>
                <p>
                  One site{" "}
                  <span className="count-text plus">
                    <Counter end={34500} />
                  </span>{" "}
                  most popular experience you’ll remember
                </p>
              </div>
              <form className="newsletter-form mb-50" action="#">
                <input
                  id="news-email"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <button
                  type="submit"
                  className="theme-btn bgc-secondary style-two"
                >
                  <span data-hover="Subscribe">Subscribe</span>
                  <i className="fal fa-arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="widget-area pt-95 pb-45">
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-widget footer-text">
                  <div className="footer-logo mb-25">
                    <Link href="/">
                      <img src="assets/images/logos/logoTS.png" alt="Logo" />
                    </Link>
                    <Link href="https://utic.upea.bo/" target="_blank">
                      <img src="assets/images/logos/logo-utic-foother.png" alt="Logo" />
                    </Link>
                  </div>
                  <p>

                  </p>
                  <div className="social-style-one mt-15">
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-youtube" />
                    </Link>
                    {/* <Link href="contact">
                    <i className="fab fa-pinterest" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-twitter" />
                  </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>ENLACES</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="destination-details">Matriculación</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Inscripciones</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Campus Virtual</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Publicaciones</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Cursos</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>MODALIDADES DE ADMISIÓN</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="contact">PSA</Link>
                  </li>
                  <li>
                    <Link href="contact">Preuniversitario</Link>
                  </li>
                  <li>
                    <Link href="contact">Excelencia</Link>
                  </li>
                  <li>
                    <Link href="contact">Admisión Especial</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-md-6 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                {institucion && (
                  <>
                    <div className="footer-title">
                      <h5>DIRRECIÓN</h5>
                    </div>
                    <ul className="list-style-one">
                      <li>
                        <i className="fal fa-map-marked-alt" /> {institucion.institucion_direccion}
                      </li>
                      <li>
                        <i className="fal fa-envelope" />{" "}
                        <a href="#">
                          {institucion.institucion_correo1}
                        </a>
                      </li>
                      <li>
                        <i className="fal fa-clock" /> Lunes - Viernes, 08:00 a.m. - 18:00 p.m.
                      </li>
                      <li>
                        <i className="fal fa-phone-volume" />{" "}
                        <a href="#">{institucion.institucion_celular1}</a>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  @Universidad Pública de El Alto <a href="">ETC</a>/Todos los derechos
                </p>
              </div>
            </div>
            {/* <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Terms</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="about">Legal notice</Link>
                </li>
                <li>
                  <Link href="about">Accessibility</Link>
                </li>
              </ul>
            </div> */}
          </div>
          {/* Scroll Top Button */}
          {/* <button className="scroll-top scroll-to-target" data-target="html">
            <img src="assets/images/icons/scroll-up.png" alt="Scroll  Up" />
          </button> */}
        </div>
      </div>
    </footer>
  );
};

const Footer2 = ({ insta }) => {
  const [institucion, setInstitucion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstitucion = async () => {
      try {
        const response = await fetch("https://serviciopagina.upea.bo/api/InstitucionUPEA/36");
        const data = await response.json();
        setInstitucion(data.Descripcion);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitucion();
  }, []);
  return (
    <footer
      className={`main-footer footer-two bgp-bottom bgc-black rel z-15 ${insta ? "" : "pt-100 pb-115"
        }`}
      style={{
        backgroundImage: "",
      }}
    >
      {insta && <FooterInstagram />}
      <div className="widget-area">
        <div className="container">
          <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-40">
                  <Link href="/">
                    <img src="assets/images/logos/logoTS.png" alt="Logo" />
                  </Link>
                  <Link href="https://utic.upea.bo/" target="_blank">
                    <img src="assets/images/logos/logo-utic-foother.png" alt="Logo" />
                  </Link>
                </div>
                <div className="footer-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.0855870684092!2d-68.19366395539603!3d-16.491503316894953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf000bc37627%3A0x69c742b286b7ef6d!2sCarrera%20de%20Ciencias%20de%20la%20Comunicaci%C3%B3n%20Social!5e0!3m2!1ses!2sbo!4v1742163985678!5m2!1ses!2sbo"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              {/* <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>MENCIONES 2</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="about">About Company</Link>
                  </li>
                  <li>
                    <Link href="blog">Community Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Jobs and Careers</Link>
                  </li>
                  <li>
                    <Link href="blog">latest News Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>ENLACES</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="destination-details">Matriculación</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Inscripciones</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Campus Virtual</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Publicaciones</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Cursos</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>MODALIDADES DE ADMISIÓN</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="#">PSA</Link>
                  </li>
                  <li>
                    <Link href="#">Preuniversitario</Link>
                  </li>
                  <li>
                    <Link href="#">Excelencia</Link>
                  </li>
                  <li>
                    <Link href="#">Admisión Especial</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-md-6 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                {institucion && (
                  <>
                    <div className="footer-title">
                      <h5>DIRRECIÓN</h5>
                    </div>
                    <ul className="list-style-one">
                      <li>
                        <i className="fal fa-map-marked-alt" /> {institucion.institucion_direccion}
                      </li>
                      <li>
                        <i className="fal fa-envelope" />{" "}
                        <a href="#">
                          {institucion.institucion_correo1}
                        </a>
                      </li>
                      <li>
                        <i className="fal fa-clock" /> Lunes - Viernes, 08:00 a.m. - 18:00 p.m.
                      </li>
                      <li>
                        <i className="fal fa-phone-volume" />{" "}
                        <a href="#">{institucion.institucion_celular1}</a>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-transparent pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  @Universidad Pública de El Alto <a href="">ETC</a>/Todos los derechos
                </p>
              </div>
            </div>
            {/* <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Terms</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="about">Legal notice</Link>
                </li>
                <li>
                  <Link href="about">Accessibility</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
