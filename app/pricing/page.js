"use client";
import React, { useEffect, useState } from 'react';
import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Client from "@/components/slider/Client";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {

  const [gaceta, setGaceta] = useState([])

  useEffect(() => {
    const fetchGaceta = async () => {
      try {
        const response = await fetch("https://serviciopagina.upea.bo/api/gacetaunivAll/36");
        const data = await response.json();
        setGaceta(data);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchGaceta();
  }, []);

  return (
    <ReveloLayout>
      <Banner pageTitle={"Gaceta"} />
      {/* Pricing Area start */}
      <section className="pricing-area pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"GACETA"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {gaceta.map((gaceta, index) => (
              <div key={index} className="col-xl-4 col-md-6">
                <div
                  className="pricing-plan-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  {/*  <div className="content">
                  <div className="price">
                    <span>$200</span> /per person
                  </div>
                  <h6>Budget Travel Packages</h6>
                </div> */}
                  <div className="pdf-container">
                    <iframe
                      src={`https://serviciopagina.upea.bo/Gaceta/${gaceta.gaceta_documento}`}
                      width="100%"
                      height="500px"
                      style={{ border: "none" }}
                    ></iframe>
                  </div>

                  {/* <div className="images">

                    <img
                      className="one"
                      src={`https://serviciopagina.upea.bo/Gaceta/${gaceta.gaceta_documento}`} alt="img" width={500} height={300} layout="responsive" unoptimized />
                  </div> */}
                  <div className="content">
                    <h6>
                      <p dangerouslySetInnerHTML={{ __html: gaceta.gaceta_titulo }} />
                    </h6>
                    {/* <ul className="list-style-four">
                      <li>DESCRIPCION GACETA 1</li>

                    </ul> */}
                    {/* <Link href="contact" className="theme-btn style-three">
                    <span data-hover="Choose Package">Choose Package</span>
                    <i className="fal fa-arrow-right" />
                  </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Area end */}
      {/* Client Logo Area start */}
      {/* <div className="client-logo-area">
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
      {/* Mobile App Area start */}
      {/* <section className="mobile-app-area py-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="mobile-app-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    We Are Available On the Store Get Our Mobile Apps Very
                    Easily
                  </h2>
                </div>
                <p>
                  We go above and beyond to make your travel dreams a reality.
                  Trust us to handle the details so you can creating
                  unforgettable memories. Explore the world with confidence
                </p>
                <ul className="list-style-two mt-35 mb-30">
                  <li>Experience Agency</li>
                  <li>Professional Team</li>
                  <li>Low Cost Travel</li>
                  <li>Online Support 24/7</li>
                </ul>
                <div className="google-play-app-store">
                  <a href="#">
                    <img
                      src="assets/images/mobile-app/g-play.jpg"
                      alt="Google Play"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/mobile-app/a-store.jpg"
                      alt="App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mobile-app-images">
                <div className="bg">
                  <img src="assets/images/mobile-app/phone-bg.png" alt="BG" />
                </div>
                <div className="images">
                  <img
                    src="assets/images/mobile-app/phone2.png"
                    alt="Phone"
                    data-aos="fade-down-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  />
                  <img src="assets/images/mobile-app/phone.png" alt="Phone" />
                  <img
                    src="assets/images/mobile-app/phone3.png"
                    alt="Phone"
                    data-aos="fade-up-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Mobile App Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
