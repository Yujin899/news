"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Box, Container } from '@mui/material';

import imageOne from "../assets/pexels-oleksandr-canary-islands-2166553.jpg"
import imageTwo from "../assets/pexels-abdullah-ghatasheh-1631665.jpg"
import imageThree from "../assets/pexels-andrei-tanase-3469505.jpg"
import imageFour from "../assets/pexels-andrei-tanase-3469505.jpg"
import imageFive from "../assets/pexels-paul-deetman-2960887.jpg"

console.log(imageOne)



const Hero = () => {
  return (
    <Container sx={{ pt: "40px", mb: "100px" , height: {xs: "50vh" , md: "80vh"} , display: "flex"   , gap: "30px" }}>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img style={{width: "100%" , height: "100%"}} src={imageOne.src} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img style={{width: "100%" , height: "100%"}} src={imageTwo.src} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img style={{width: "100%" , height: "100%"}} src={imageThree.src} alt="..." />
        </SwiperSlide>
      </Swiper>


      <Box sx={{height: "100%", width: "800px" ,  display: {xs: "none" , md: "flex" , flexDirection: "column"} , gap: "30px" }}>
        <img src={imageFour.src} style={{width: "100%" , height: "calc(50% - 15px)"}} alt="" />
        <img src={imageFive.src} style={{width: "100%" , height: "calc(50% - 15px)"}} alt="" />
      </Box>
    </Container> 
  );
};

export default Hero;
