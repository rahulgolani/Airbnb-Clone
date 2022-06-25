import React from "react";
import "../styles/Banner.css";
import { Typography, Button } from "@mui/material";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <Typography variant="h3" className="banner__info__title">
          Get out and stretch your imagination
        </Typography>
        <Typography variant="h5" className="banner__info__subtitle">
          Plan a different kind of getaway to uncover the hidden gems near you
        </Typography>
        <Button className="banner__info__button" variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
