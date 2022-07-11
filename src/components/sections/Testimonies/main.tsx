import { Avatar, Box, Typography } from "@mui/material";
import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FormatQuote } from "@mui/icons-material";

export default function Main() {
  const Testimonials = [
    {
      p: "HIMSTITUE is a great company that have helped alot of her students become successful in their various careers as students.",
      name: "JOHNSON SIMON",
      avatar: "1.jpg",
      id: useId(),
    },
    {
      p: "HIMSTITUE is a great company that have helped alot of her students become successful in their various careers as students.",
      name: "James Parker",
      avatar: "2.jpg",
      id: useId(),
    },
    {
      p: "HIMSTITUE is a great company that have helped alot of her students become successful in their various careers as students.",
      name: "Ajaga Abdul Basit",
      avatar: "3.jpg",
      id: useId(),
    },
  ];
  return (
    <Box
      sx={{
        p: "100px 50px",
        width: "100%",
        // height: "100vh",
        background: `url(/media/images/banner4.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",

        "&::before": {
          content: `""`,
          height: "100%",
          width: "100%",
          background: "linear-gradient(180deg, #0a4b, #000);",
          opacity: 0.4,
          position: "absolute",
          top: 0,
          left: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 3 }}>
        <Typography variant="h2" color="white">
          TESTIMONIALS
        </Typography>
        <Typography
          sx={{ width: "40%", lineHeight: "1.3rem" }}
          variant="h6"
          color="white"
        >
          We are loved by thousands of institutions and students all over the
          world. Here are the great things our clients says about us
        </Typography>
      </Box>
      <Swiper
        className="testimonial-swiper"
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        speed={600}
        pagination
        autoplay={{ delay: 1000 }}
        style={{ overflowX: "hidden" }}
      >
        {Testimonials.map((item) => (
          <SwiperSlide>
            <center>
              <Box
                sx={{
                  mt: 10,
                  background: "#0bf6a4b7",
                  height: "70vh",
                  borderRadius: " 66px 0px",
                  p: "50px 20px",
                  width: "60%",
                  position: "relative",
                  //   overflow: "visible",
                }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  sx={{ fontFamily: "ngo-small", width: "60%" }}
                >
                  {item.p}
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{ fontFamily: "ngo-small" }}
                >
                  <FormatQuote />
                  {item.name}
                </Typography>
                <Box
                  sx={{
                    zIndex: 100000,
                    position: "absolute",
                    bottom: "0%",
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    display: "block",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 180,
                      height: 180,
                    }}
                    src={`/media/images/avatars/${item.avatar}`}
                  />
                </Box>
              </Box>
            </center>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}