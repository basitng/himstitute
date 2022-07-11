import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useId } from "react";

export default function Main() {
  const contents = [
    { title: "Vetted once, eligible for life", id: useId(), icon: "user.svg" },
    { title: "Exclusive Himstitute support", id: useId(), icon: "message.svg" },
    { title: "Affordable tuition", id: useId(), icon: "Debit.svg" },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(1, 24, 16, 0.744)",
        p: "100px 50px",
      }}
    >
      <Box sx={{ position: "absolute", top: "0%", right: "-5%" }}>
        <Image src={"/media/svg/spaced_dot.svg"} width={200} height={200} />
      </Box>
      <Box sx={{ position: "absolute", bottom: "0%", right: "-5%" }}>
        <Image src={"/media/svg/circle.svg"} width={500} height={500} />
      </Box>
      <Box>
        <Typography variant="h2" sx={{ width: "60%" }} color="white">
          Why are the best students using Himstitue?{" "}
          <span className="color--base">Because they want</span>{" "}
          <span className="color--base1">careers, not gigs.</span>
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        {contents.map((item) => (
          <Box key={item.id} sx={{ display: "flex", alignItems: "center" }}>
            <Image src={`/media/svg/${item.icon}`} width={60} height={60} />
            <Typography sx={{ ml: 1 }} variant="h5" color="white">
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
