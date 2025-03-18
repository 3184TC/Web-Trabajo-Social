"use client";
import React, { useEffect, useState } from 'react';
import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  const [cursos, setCursos] = useState([])
  const [ofertas, setOfertas] = useState([])

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch("https://serviciopagina.upea.bo/api/cursosAll/36");
        const data = await response.json();
        setCursos(data);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchCursos();
  }, []);
  
  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await fetch("https://serviciopagina.upea.bo/api/OfertasAcademicasAll/36");
        const data = await response.json();
        setOfertas(data);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchOfertas();
  }, []);

  return (
    <ReveloLayout>
      <Banner pageTitle={"Cursos"} search={true} />
      {/* Page Banner End */}
      {/* Popular Destinations Area start */}
      {/* <section className="popular-destinations-area pt-100 pb-90 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Explore Popular Destinationsdfhj,hgfdsad"} />
                <ul className="destinations-nav mt-30">
                  <li data-filter="*" className="active">
                    Show All
                  </li>
                  <li data-filter=".features">Features</li>
                  <li data-filter=".recent">Recent</li>
                  <li data-filter=".city">City</li>
                  <li data-filter=".rating">Rating</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row gap-10 destinations-active justify-content-center">
              <div className="col-xl-3 col-md-6 item recent rating">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination1.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">Thailand beach</Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 item features">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination2.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">Parga, Greece</Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 item recent city rating">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination3.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">
                        Castellammare del Golfo, Italy
                      </Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 item city features">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination4.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">
                        Reserve of Canada, Canada
                      </Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 item recent">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination5.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">
                        Dubai united states
                      </Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 item features rating">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination6.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">Milos, Greece</Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Popular Destinations Area end */}
      {/* Hotel Area start */}
      <section className="hotel-area bgc-black pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="destination-left-content mb-35">
                <div
                  className="section-title text-white counter-text-wrap mb-45"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <SectionTitle
                    title={"CURSOS"}
                  />
                </div>
                <Link
                  href="destination1"
                  className="theme-btn style-four mb-15"
                >
                  <span data-hover="Explore More Hotel">
                    Mas Cursos
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-8">
            {cursos.map((cursos, index) => (
              <div
              key={index}
                className="destination-item style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}>
                <div className="image">
                  {/* <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div> */}
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src={`https://serviciopagina.upea.bo/Cursos/${cursos.det_img_portada}`} alt="img" width={500} height={300} layout="responsive" unoptimized />
                </div>
                <div className="content">
                  <span className="location">
                    {/* <i className="fal fa-map-marker-alt" /> */} CURSO
                  </span>
                  <h5>
                    <Link href="tour-details">
                    <p dangerouslySetInnerHTML={{__html:cursos.det_titulo}}/>
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <p dangerouslySetInnerHTML={{__html:cursos.det_descripcion}}/>
                    </li>
                  </ul>
                  <div className="destination-footer">
                   {/*  <span className="price">
                      <span>85.00</span>/Bs.
                    </span> */}
                    <Link href="tour-details" className="read-more">
                    <p dangerouslySetInnerHTML={{__html: cursos.det_modalidad}}/>
                     {/* <i className="fal fa-angle-right" /> */}
                    </Link>
                    <Link href="tour-details" className="read-more">
                    <p dangerouslySetInnerHTML={{__html: cursos.det_hora_ini}}/>
                     {/* <i className="fal fa-angle-right" /> */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
      {/* Hotel Area end */}
      {/* Hot Deals Area start */}
      <section className="hot-deals-area pt-70 pb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Ofertas Académicas"} />
              </div>
            </div>
          </div>
          <div className="row">
          {ofertas.map((ofertas, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  {/* <span className="badge">10% Off</span> */}
                  <a href="#" className="heart">
                    {/* <i className="fas fa-heart" /> */}
                  </a>
                  <img
                    src={`https://serviciopagina.upea.bo/Carrera/OfertasAcademicas/${ofertas.ofertas_imagen}`} alt="img" width={500} height={300} layout="responsive" unoptimized />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> 
                    <p dangerouslySetInnerHTML={{__html:ofertas.ofertas_referencia}}/>
                  </span>
                  <h5>
                    <Link href="tour-details">
                    <p dangerouslySetInnerHTML={{__html:ofertas.ofertas_titulo}}/>
                    </Link>
                  </h5>
                </div>
                {/* <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div> */}
                {/* <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link> */}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
      {/* Hot Deals Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
