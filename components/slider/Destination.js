"use client";
import React, { useEffect, useState } from 'react';
import { sliderProps } from "@/utility/sliderprops";
import Link from "next/link";
import Slider from "react-slick";

const Destination = () => {
  const [ofertas, setOfertas] = useState([])

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
    
    <Slider {...sliderProps.destination} className="destination-active">
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}>
        <div className="image">
          <img
            src="assets/images/destinations/destination-five1.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Oferta Académica 1</Link>
          </h6>
          <span className="tours">Descripcion iferta academica 1</span>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        
        <div className="image">
          <img
            src="assets/images/destinations/destination-five2.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Oferta Académica 2</Link>
          </h6>
          <span className="tours">Descripcion oferta academica 2</span>
        </div>
      </div>
      
      {/* <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five4.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Thailand</Link>
          </h6>
          <span className="tours">258 tours</span>
        </div>
      </div> */}
      {/* <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={150}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five5.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Rome, Italy</Link>
          </h6>
          <span className="tours">258 tours</span>
        </div>
      </div> */}
      {/* <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five2.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Indonesia</Link>
          </h6>
          <span className="tours">258 tours</span>
        </div>
      </div> */}
    </Slider>
  );
};
export default Destination;
