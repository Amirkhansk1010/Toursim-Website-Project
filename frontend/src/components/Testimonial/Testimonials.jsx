import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';


function Testimonials() {

  const settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoPlaySpeed:2000,
    slideToShow: 3,

    responsive:[
      {
        breakpoint: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        }, 
      }
    ]

  }

  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
              While the appreciation of the city with regards to its colossal history and unique heritage could go on and on, here are few reasons why it is also one of the finest cities in India for the denizens to reside.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
                <div>
                  <h6 className="mb-0 mt-3">Virat Kohli</h6>
                  <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
              Jaipur is the ultimate haven for shopping lovers. From the narrow Pink city lanes heavily endowed with beautiful handicrafts, Rajasthani antiques, bandani and leheriya saris and dupattas, royal mojris, exquisite kundan-meena jewellery pieces to the ultra-modern
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                <div>
                  <h6 className="mb-0 mt-3">Allu Arjun</h6>
                  <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
              Jaipur, in its perfection, has more than enough to offer, from the sky touching arches of Nahargarh to the Shila Devi ji Temple in Amer where Prasad includes alcohol – every nook and corner has its own story.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
                <div>
                  <h6 className="mb-0 mt-3">MS Dhoni</h6>
                  <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials;
