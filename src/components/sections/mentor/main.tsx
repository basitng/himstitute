import { Box, Grid, Typography } from "@mui/material";
import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function Main() {
  const contents = [
    {
      content:
        "Meet professor Dapo a medical doctor for the past 20 years, he has received many prestigious awards in his career as a medical practional. He has also help more than 1,000 students become successful",
      id: useId(),
      company: "Unilag",
      name: "Dapo Olayinka",
      role: "Doctor, Faith Hospital",
      avatar: "/media/images/Avatars/1.jpg",
    },
    {
      content:
        "Meet Jackson Ugwu a Software Engineer for the past 10 years, he has received many prestigious awards in his career as a medical practional. He has also help more than 1,000 students become successful",
      id: useId(),
      company: "Andela",
      name: "Jackson Ugwu",
      role: "Software Engr, Andela",
      avatar: "/media/images/Avatars/2.jpg",
    },
    {
      content:
        "Meet Samuel Luke a medical Doctor for the past 10 years, he has received many prestigious awards in his career as a medical practional. He has also help more than 1,000 students become successful",
      id: useId(),
      company: "Charity Hospital",
      name: "Samuel Luke",
      role: "Doctor, Charity Hospital",
      avatar: "/media/images/Avatars/3.jpg",
    },
    {
      content:
        "Meet Samuel Luke a medical Doctor for the past 10 years, he has received many prestigious awards in his career as a medical practional. He has also help more than 1,000 students become successful",
      id: useId(),
      company: "Charity Hospital",
      name: "Samuel Luke",
      role: "Doctor, Charity Hospital",
      avatar: "/media/images/Avatars/4.jpg",
    },
    {
      content:
        "Meet Samuel Luke a medical Doctor for the past 10 years, he has received many prestigious awards in his career as a medical practional. He has also help more than 1,000 students become successful",
      id: useId(),
      company: "Charity Hospital",
      name: "Samuel Luke",
      role: "Doctor, Charity Hospital",
      avatar: "/media/images/Avatars/5.jpg",
    },
  ];
  return (
    <Box
      sx={{
        background: "var(--bg1)",
        p: "100px 50px",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: "0%", right: "-5%" }}>
        <Image src={"/media/svg/Dotted.svg"} width={700} height={700} />
      </Box>
      <Box sx={{ mb: 10 }}>
        <Typography color="white" sx={{ width: "46%" }} variant="h2">
          Become <span className="color--base">Successful</span> In Your Career
        </Typography>
        <Typography
          sx={{ fontFamily: "ngo-small", width: "60%", color: "#ddd" }}
          variant="h5"
        >
          Get started quickly with one of these templates. Click to connect your
          Git provider. Netlify will clone the repository and deploy your new
          site automatically.
        </Typography>
      </Box>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        speed={600}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
        pagination
        style={{ overflow: "hidden" }}
      >
        {contents.map((item) => (
          <SwiperSlide>
            <Box sx={{ background: "#adc3e99f", p: 2, borderRadius: 2 }}>
              <Typography sx={{ color: "var(--primary)" }} variant={"h6"}>
                {item.company}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "ngo-small",
                  color: "#ddd",
                  lineHeight: "1.2rem",
                }}
                variant={"body1"}
              >
                {item.content}
              </Typography>
              <Box>
                <img
                  src={item.avatar}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    width: 50,
                    height: 50,
                  }}
                />
                <Box>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography variant="body2">{item.role}</Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
