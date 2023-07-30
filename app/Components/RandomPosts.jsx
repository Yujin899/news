"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { blue } from "@mui/material/colors";

const Slidero = () => {

  const [data , setData] = useState([])

  fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  })
    .then((res) => res.json())
    .then((res) => setData(res));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  data.splice(10 , data.length - 10)


  return (
    <div className="Random-posts">
      <h2>New Posts</h2>
      <Slider {...settings}>
        {data.map((post) => (
          <div className="random-post" key={post.id}>
            <h3 className="random-postTitle">{post.title}</h3>
            <p className="random-postBody">{post.body}</p>
            <Link href={`/posts/${post.id}`}>
              <Button sx={{backgroundColor: blue[500] , color: "#fff" , m: "20px 0" , width: "100%"}}>Show Post</Button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slidero;
