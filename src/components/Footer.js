import React from "react";
import { Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <Typography className="footer__content" variant="body2">
        <CopyrightIcon fontSize="small" />
        {` @${new Date().getFullYear()} - Airbnb -No Rights Reserved`}
      </Typography>
    </div>
  );
}

export default Footer;
