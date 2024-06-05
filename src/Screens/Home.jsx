// Pages/Home.jsx
import React, { useEffect, useRef } from "react";
import "./Home.css";
import Navigation from "../Components/Navigation";
import CardsList from "../Components/CardsLists";
import Footer from "../Components/Footer";

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentIndex = 0;
    const items = carousel.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    const moveCarousel = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      carousel.scrollTo({
        left: items[currentIndex].offsetLeft,
        behavior: "smooth",
      });
    };

    const intervalId = setInterval(moveCarousel, 3000); // Change the interval time as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <Navigation />
      <div className="carousel " ref={carouselRef}>
        <div className="carousel-item">
          <img src="../../public/images/banner1.jpg" alt="Banner 1" />
        </div>
        <div className="carousel-item">
          <img src="../../public/images/banner2.jpg" alt="Banner 2" />
        </div>
        <div className="carousel-item">
          <img src="../../public/images/banner3.jpg" alt="Banner 3" />
        </div>
      </div>
      <div className="explore">
        <p>Explore Our Mother Dishes</p>
      </div>
      <div className="card-container">
        <CardsList />
      </div>
      <div className="img-container bg-white">
        <img src="../../public/images/4.jpg" alt="Example" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
