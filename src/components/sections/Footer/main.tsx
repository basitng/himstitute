import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function main() {
  const customerLinks = [
    { name: "Book a call", link: "" },
    { name: "Customer Reviews", link: "" },
    { name: "Get a Mentor", link: "" },
  ];
  const studentLinks = [
    { name: "Study Abroad", link: "" },
    { name: "Student Login", link: "" },
    { name: "Student Blog", link: "" },
    { name: "Get Help", link: "" },
  ];
  const companyLinks = [
    { name: "Blog", link: "" },
    { name: "About Us", link: "" },
    { name: "Career", link: "" },
    { name: "Articles", link: "" },
  ];
  const socialLinks = [
    {
      name: "Facebook",
      link: "",
      icon: (
        <Facebook
          fontSize="large"
          sx={{
            color: "#fff",
            transition: "400ms ease-out",
            "&:hover": { color: "var(--primary)" },
          }}
        />
      ),
    },
    {
      name: "Linkedin",
      link: "",
      icon: (
        <LinkedIn
          fontSize="large"
          sx={{
            color: "#fff",
            transition: "400ms ease-out",
            "&:hover": { color: "var(--primary)" },
          }}
        />
      ),
    },
    {
      name: "Twitter",
      link: "",
      icon: (
        <Twitter
          fontSize="large"
          sx={{
            color: "#fff",
            transition: "400ms ease-out",
            "&:hover": { color: "var(--primary)" },
          }}
        />
      ),
    },
    {
      name: "Instagram",
      link: "",
      icon: (
        <Instagram
          fontSize="large"
          sx={{
            color: "#fff",
            transition: "400ms ease-out",
            "&:hover": { color: "var(--primary)" },
          }}
        />
      ),
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        background: "#000",
        p: "100px 50px",
      }}
    >
      <Box sx={{ position: "absolute", top: "0%", right: "-5%" }}>
        <Image src={"/media/svg/singledot.svg"} width={300} height={300} />
      </Box>
      <Box>
        <Typography variant="h3" color="white" sx={{ width: "60%" }}>
          Join Himstitute today and unleash your{" "}
          <span className="color--base">unseen</span>{" "}
          <span className="color--base1">potential</span>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 6 }}>
        <Button
          sx={{ height: 50, width: 180, borderRadius: 48 }}
          variant="contained"
        >
          Enroll now
        </Button>
        <Typography variant="body1">or</Typography>
        <Button
          sx={{ height: 50, width: 180, borderRadius: 48 }}
          variant="outlined"
        >
          Mentorship
        </Button>
      </Box>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Typography variant="h4" color="white">
            Himstitute
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {socialLinks.map((link) => (
              <IconButton key={link.name}>{link.icon}</IconButton>
            ))}
          </Box>
          <Box sx={{}}>
            <Typography variant="body2" color="white">
              &copy;2022 HIMSTITUTE 18 Jimoh Ola’s Street, Lagos Nigeria
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography color="white" variant="h5">
              Customers
            </Typography>

            {customerLinks.map((link) => (
              <Typography
                variant="body1"
                color="white"
                sx={{
                  cursor: "pointer",
                  transition: "400ms ease-out",
                  fontFamily: "ngo-small",
                  color: "#ddd",
                  "&:hover": {
                    color: "var(--primary)",
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography color="white" variant="h5">
              Students
            </Typography>
            {socialLinks.map((link) => (
              <Typography
                variant="body1"
                color="white"
                sx={{
                  cursor: "pointer",
                  transition: "400ms ease-out",
                  fontFamily: "ngo-small",
                  color: "#ddd",
                  "&:hover": {
                    color: "var(--primary)",
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography color="white" variant="h5">
              Company
            </Typography>
            {companyLinks.map((link) => (
              <Typography
                variant="body1"
                color="white"
                sx={{
                  cursor: "pointer",
                  transition: "400ms ease-out",
                  fontFamily: "ngo-small",
                  color: "#ddd",
                  "&:hover": {
                    color: "var(--primary)",
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
