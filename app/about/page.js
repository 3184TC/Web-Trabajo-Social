"use client";
import React, { useEffect, useState } from 'react';
import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import SectionTitle from "@/components/SectionTitle";
import Client from "@/components/slider/Client";
import Testimonial from "@/components/slider/Testimonial";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

const page = () => {

  const [institucion, setInstitucion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchInstitucion = async () => {
      try {
        const response = await fetch("https://serviciopagina.upea.bo/api/InstitucionUPEA/18");
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


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://serviciopagina.upea.bo/api/AutoridadAll/36");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  return (
    <ReveloLayout>
      <Banner pageTitle={"TRABAJO SOCIAL"} />
      {/* About Area start */}
      <section className="about-area-two py-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-3"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mb-35">Trabajo Social</span>
            </div>
            <div className="col-xl-9">
              <div
                className="about-page-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row">
                  {institucion && (
                    // Agrupamos los elementos con un fragmento <>
                    <>
                      <div key={institucion.institucion_id} className="col-lg-8 pe-lg-5 me-lg-5">
                        <div className="section-title mb-25">
                          <h2>HISTORIA</h2>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <p dangerouslySetInnerHTML={{ __html: institucion.institucion_historia }} />
                        <ul className="list-style-two mt-35">
                          <li>Excelencia Adadémica</li>
                          <li>5 años de Estudio</li>
                        </ul>
                        <Link href="about" className="theme-btn style-three mt-30">
                          <span data-hover="Explore Tours">Saber Más</span>
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Area end */}
      {/* Features Area start */}
      <section className="about-features-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="about-feature-image"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/TS.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="about-feature-image"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/TS-3.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-4 col-md-8">
            <div
                className="about-feature-image"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/TS-4.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* About Us Area start */}
      {/* <section className="about-us-area pt-70 pb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div
                className="about-us-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <h2>
                    Travel with Confidence Top Reasons to Choose Our Agency
                  </h2>
                </div>
                <p>
                  We work closely with our clients to understand challenges and
                  objectives, providing customized solutions to enhance
                  efficiency boost profitability, and foster sustainable growth.
                </p>
                <div className="row pt-25">
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span className="count-text k-plus">
                        <Counter end={3} />
                      </span>
                      <span className="counter-title">Popular Destination</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span className="count-text m-plus">
                        <Counter end={9} />
                      </span>
                      <span className="counter-title">Satisfied Clients</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn mt-10 style-two"
                >
                  <span data-hover="Explore Destinations">
                    Explore Destinations
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-us-page">
                <img src="assets/images/about/about-page.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* About Us Area end */}
      {/* Team Area start */}
      <section className="about-team-area pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"AUTORIDADES"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {users.map((user, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="team-item hover-content"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src={`https://serviciopagina.upea.bo/InstitucionUpea/Autoridad/${user.foto_autoridad}`}
                    alt={user.nombre_autoridad}
                  />
                  <div className="content">
                    <h6>{user.nombre_autoridad}</h6>
                    <span className="designation">Cargo:{user.cargo_autoridad}</span>
                    <div className="social-style-one inner-content">
                      <Link href="contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Features Area start */}
      <section className="about-feature-two bgc-black pt-100 pb-45 rel z-1">
        <div className="container">
          <div
            className="section-title text-center text-white counter-text-wrap mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <SectionTitle title={"PRINCIPIOS INSTITUCIONALES"} />
          </div>
          <div className="row">
            {institucion && (
              // Agrupamos los elementos con un fragmento <>
              <>
                <div
                  className="col-xl-4 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="feature-item style-two">
                    {/* <div className="icon">
                      <i className="flaticon-save-money" />
                    </div> */}
                    <div className="content">
                      <h5>
                        <Link href="destination-details">MISIÓN</Link>
                      </h5>
                      <p dangerouslySetInnerHTML={{__html: institucion.institucion_mision}}/>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="feature-item style-two">
                    <div className="content">
                      <h5>
                        <Link href="destination-details">VISIÓN</Link>
                      </h5>
                      <p dangerouslySetInnerHTML={{__html: institucion.institucion_vision}}/>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="feature-item style-two">
                    <div className="content">
                      <h5>
                        <Link href="destination-details">OBJETIVOS</Link>
                      </h5>
                      <p dangerouslySetInnerHTML={{__html: institucion.institucion_objetivos}}/>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="shape">
          <img src="assets/images/video/shape1.png" alt="shape" />
        </div>
      </section>
      {/* Features Area end */}
      {/* Video Area start */}
      {/* 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777 */}
      {/* <div className="video-area pt-25 rel z-1">
        <div className="container">
          <div
            className="video-wrap"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/video/video-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
              tabIndex={-1}
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="for-bg bgc-black">
          <div className="shape">
            <img src="assets/images/video/shape2.png" alt="shape" />
          </div>
        </div>
      </div> */}
      {/* Video Area end */}
      {/* Testimonials Area start */}
      {/* <section className="testimonials-area py-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="testimonial-left-content rmb-50"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/testimonials/testimonial-left2.png"
                  alt="Testimonial"
                />
                <div className="happy-customer text-white bgc-primary">
                  <h6>850K+ Happy Customer</h6>
                  <div className="feature-authors mb-15">
                    <img
                      src="assets/images/features/feature-author1.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author2.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author3.jpg"
                      alt="Author"
                    />
                    <span>4k+</span>
                  </div>
                  <hr />
                  <p>Positive Reviews</p>
                  <div className="testi-header">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="testimonial-right-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-55">
                  <h2>
                    <span>5280</span> Global Clients Say About Us Services
                  </h2>
                </div>
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonials Area end */}
      {/* Client Logo Area start */}
      {/* <div className="client-logo-area mb-100">
        <div className="container">
          <div className="client-logo-wrap pt-60 pb-55">
            <div
              className="text-center mb-40"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6>We’re recommended by:</h6>
            </div>
            <Client />
          </div>
        </div>
      </div> */}
      {/* Client Logo Area end */}
    </ReveloLayout>
  );
};
export default page;
