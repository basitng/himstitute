import { Hidden } from "@mui/material";
import { Container } from "@mui/system";
import { NextPage } from "next";
import React, { Profiler } from "react";
import { Main } from "../src/components/AppBar";
import { AboutMain } from "../src/components/sections/About";
import { BannerMain } from "../src/components/sections/Banner";
import { FooterMain } from "../src/components/sections/Footer";
import { MentorMain } from "../src/components/sections/mentor";
import { TestimoniesMain } from "../src/components/sections/Testimonies";
import { WhyMain } from "../src/components/sections/Why";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Main />
      <BannerMain />
      <Container>
        <AboutMain />
      </Container>
      <MentorMain />
      <WhyMain />
      <TestimoniesMain />
      <FooterMain />
    </React.Fragment>
  );
};

export default Home;
