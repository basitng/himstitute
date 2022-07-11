import React, { useId } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Main() {
  const bannerSlides = [
    {
      paginationValue: 1,
      id: useId(),
      title: "YOUR DREAMS ARE",
      colorBase: "ACHEIVABLE",
      otherTitle: "WITH US",
      content:
        "Get the chance to study in any part of the world with the help of himstitute organization",
      btnLabel: "Explore",
      btnPath: "#about",
      img: "/media/images/banner1.jpg",
    },
    {
      paginationValue: 2,
      id: useId(),
      title: "EXPLORE OPPORTUNTIES TO",
      colorBase: "STUDY",
      otherTitle: "ABROAD",
      content:
        "Get the chance to study in any part of the world with the help of himstitute organization",
      btnLabel: "Explore",
      btnPath: "#about",
      img: "/media/images/banner2.jpg",
    },
    {
      paginationValue: 3,
      id: useId(),
      title: "GET REAL MENTORSHIP FROM",
      colorBase: "PROFESSIONALS",
      otherTitle: "",
      content:
        "Get the chance to study in any part of the world with the help of himstitute organization",
      btnLabel: "Explore",
      btnPath: "#about",
      img: "/media/images/banner3.jpg",
    },
  ];
  return (
    <Box sx={{ position: "relative", display: "block" }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        speed={600}
        navigation
        pagination
        style={{ overflow: "hidden" }}
      >
        {bannerSlides.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                background: `url(${banner.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",

                "&::before": {
                  content: `""`,
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(180deg, rgba(11, 247, 162, 0.61) 0%, rgba(44, 35, 35, 0) 100%);",
                  opacity: 0.4,
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                "&::after": {
                  content: `""`,
                  position: "absolute",
                  width: "1728px",
                  height: "1117px",
                  left: "0px",
                  top: "0px",
                  background: "rgba(0, 0, 0, 0.41)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  left: "40%",
                  top: "50%",
                  zIndex: 1,
                }}
              >
                <Box sx={{ width: "90%" }} className="resp-width">
                  <Typography className="resp-h1" variant="h2" color="white">
                    {banner.title}
                    <span className="color--base">
                      {" "}
                      {banner.colorBase}
                    </span>{" "}
                    {banner.otherTitle}
                  </Typography>
                  <Typography
                    sx={{
                      width: "70%",
                      fontFamily: "ngo-small",
                      lineHeight: "1.4rem",
                    }}
                    color="white"
                    variant="h6"
                    className="resp-width"
                  >
                    {banner.content}
                  </Typography>
                  <Button
                    sx={{
                      height: 60,
                      width: 200,
                      mt: 3,
                      borderRadius: 50,
                      color: "#fff",
                      boxShadow: " 5px 6px 45px 2px rgba(11, 247, 162, 0.8)",
                    }}
                    size="large"
                    variant="contained"
                    disableElevation
                  >
                    {banner.btnLabel}
                  </Button>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
