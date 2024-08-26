import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Hourly Weather · 1 AM 81°. rain drop 0% · 2 AM 81°. rain drop 0% · 3 AM 81°. rain drop 0% · 4 AM 80°.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "We have customised some of the best tour services, and have organised to provide you more information about the history of Jaipur & North India.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Get your Free Walking Tour in Jaipur and discover its culture, incredible sites, stories & legends with entertaining and passionate local guides.",
    },
]

const ServiceList = () => {
  return (
    <>
        {
            servicesData.map((item,index) => (
                <Col lg='3' md='6' sm='12' className='mb-4' key={index}> 
                    <ServiceCard item={item}/>
                </Col>
            ))
        }
    </>
  )
}

export default ServiceList;
