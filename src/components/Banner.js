import React from "react";
import "../styles/Banner.css";
import { Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner__info">
        <Typography variant="h3" className="banner__info__title">
          Get out and stretch your imagination
        </Typography>
        <Typography variant="h5" className="banner__info__subtitle">
          Plan a different kind of getaway to uncover the hidden gems near you
        </Typography>
        {/* <Link className="banner__search__link" to="search"> */}
        <Button
          onClick={() => navigate("search")}
          className="banner__info__button"
          variant="outlined"
        >
          Explore Nearby
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Banner;
