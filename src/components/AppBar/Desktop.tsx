import React, { useId } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Desktop() {
  const NavLinks = [
    {
      name: "Home",
      id: useId(),
      path: "",
    },
    {
      name: "About Us",
      id: useId(),
      path: "about",
    },
    {
      name: "Mentorship",
      id: useId(),
      path: "mentorship",
    },
    {
      name: "Career",
      id: useId(),
      path: "career",
    },
  ];
  return (
    <AppBar
      variant="elevation"
      elevation={0}
      sx={{ background: "transparent", color: "#fff" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src="/navlogo.svg" className="nav--logo" />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.path}>
              <Typography
                sx={{
                  m: 2,
                  cursor: "pointer",
                  transition: "300ms ease-in-out",
                  color: "#fff",
                  "&:hover": {
                    color: "var(--primary)",
                  },
                }}
                variant="body1"
              >
                {link.name}
              </Typography>
            </Link>
          ))}
          <Box sx={{ ml: 6 }}>
            <Button
              disableElevation
              size="large"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 50,
                background: "transparent",
                outline: "1px solid #fff",
                color: "#fff",
                width: "210px",
                height: 55,
              }}
            >
              Articles
            </Button>
            <Button
              disableElevation
              size="large"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 50,
                background: "transparent",
                outline: "1px solid #fff",
                color: "#fff",
                width: "210px",
                height: 55,
              }}
            >
              Study Abroad
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
