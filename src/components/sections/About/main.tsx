import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useId } from "react";

export default function Main() {
  const data = [
    {
      width: 150,
      height: 150,
      mt: true,
      title: "Study Abroad",
      content:
        "Study in your dream university and location with the unlimited support of HIMSTITUTE.",
      id: useId(),
      icon: "/media/svg/abroad.svg",
    },
    {
      width: 100,
      height: 100,
      title: "Mentorship",
      content:
        "Get the right mentorship you need to susceed as a student of any professional career.",
      id: useId(),
      icon: "/media/svg/mentor.svg",
    },
    {
      width: 100,
      height: 100,
      title: "Articles",
      content:
        "Stay up to date with the latest information you need to grow as a student with got you covered.",
      id: useId(),
      icon: "/media/svg/article.svg",
    },
  ];
  return (
    <Box sx={{ position: "relative", pt: 20, pb: 20 }}>
      <Box sx={{ position: "absolute", left: "-9%", top: "16%" }}>
        <Image src="/media/svg/outlined_circle.svg" width={50} height={50} />
      </Box>
      <Box sx={{ position: "absolute", left: "50%", top: "-6%" }}>
        <Image src="/media/svg/hemisphere.svg" width={200} height={200} />
      </Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ mt: item.mt ? -2 : 0 }}>
                <Image
                  width={item.width}
                  height={item.height}
                  src={item.icon}
                />
              </Box>
              <Box sx={{ mt: item.mt ? -5 : 0 }}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography
                  sx={{ color: " #AEB8C8", fontFamily: "ngo-small" }}
                  variant="body1"
                >
                  {item.content}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ mt: 10, position: "relative" }}
      >
        <Grid item xs={12} md={7}>
          <Box sx={{ position: "absolute", left: "30%", top: "-1%" }}>
            <Image
              src="/media/svg/outline_hemisphere.svg"
              width={50}
              height={50}
            />
          </Box>
          <Typography sx={{ width: "70%" }} variant="h3">
            HIMSTITUTE Since 2022 Till Date.
          </Typography>
          <Typography
            sx={{ color: "#ADC3E9", width: "70%", mt: 1, lineHeight: "1.4rem" }}
            variant="h6"
          >
            We belive that education is the key to a successful career
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#AEB8C8",
              fontFamily: "ngo-small",
              mt: 2,
              lineHeight: "1.8rem",
            }}
          >
            Our main aim is to help curious and talented students like you get
            into top notch university outside of your various region depending
            on your choice. Himstitute is reputable for the amazing services she
            offers to talented students like you . No wonder we are reputable
            all over the globe for connecting potential students to a potential
            university while assuring good mentorship.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src={"/media/svg/imageBox.svg"}
            style={{ width: "100%", height: "60vh" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
