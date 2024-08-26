import React from 'react'
import '../styles/Home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-Tours/FeaturedTourList';
import MasonryImageGallery from '../components/Image-Gallery/MasonryImageGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';


function Home() {
  return (
    <>
      {/* =========== hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Oh the places you will go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Jaipur, where history and culture comes {" "}
                  <span className="highlight"> alive </span>
                </h1>
                <p>
                  Jaipur was founded in 1727 by Sawai Jai Singh II, the Kachhwaha Rajput ruler of Amer, after 
                  whom the city is named .It is one of the earliest planned cities of modern India, designed by 
                  Vidyadhar Bhattacharya. During the British colonial period, the city served as the capital of 
                  Jaipur State. After Indian independence in 1947, Jaipur was made the capital of the newly 
                  formed state of Rajasthan in 1949.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls loop/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========== hero section end ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========= Featured Tour Section Start ========= */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========= Featured Tour Section End ========= */}

      {/* ========= Experience section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                We are best tour operator in Jaipur that specializes in providing travel-related services, such as booking accommodations, transportation, and organizing tours for individuals and groups. They are responsible for designing, planning, and executing tours for their clients. Tour operator in Jaipur offers a wide range of packages, including Jaipur local sightseeing, Jaipur sightseeing place, Jaipur city sightseeing, heritage tours, city tours, cultural tours, adventure tours, and wildlife tours, sightseeing in Jaipur, among others.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2K+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= Experience section end =========== */}

      {/* ========= Gallery Section Start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= Gallery Section End ======== */}

      {/* ========= Testimonial Section Start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= Testimonial Section End ======== */}
      <NewsLetter />


    </>
  )
}

export default Home;
