import React from "react";
import { Hidden } from "@mui/material";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Main() {
  return (
    <React.Fragment>
      <Hidden smDown>
        <Desktop />
      </Hidden>
      <Hidden smUp>
        <Mobile />
      </Hidden>
    </React.Fragment>
  );
}
