import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Typography, Avatar } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { Link } from "react-router-dom";

function Header() {
  const [user, setUser] = useState({
    first: "",
    last: "",
    initials: "RU",
    picture: "",
  });

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const userData = response.data.results[0];
        setUser({
          first: userData.name.first,
          last: userData.name.last,
          initials: userData.name.first[0] + userData.name.last[0],
          picture: userData.picture.large,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="header">
      {/* Image */}
      <div className="header__image">
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="Airbnb"
          ></img>
        </Link>
      </div>
      {/* Search  */}
      <div className="header__search">
        <TextField
          placeholder="Search"
          className="header__search__input"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon className="pointer" />
              </InputAdornment>
            ),
          }}
          size="Normal"
        ></TextField>
      </div>
      <div className="header__menu">
        <Typography variant="h6" className="header__menu__title pointer">
          Become a Host
        </Typography>
        <LanguageIcon
          fontSize="large"
          className="header__menu__language pointer"
        />
        <KeyboardArrowDownIcon
          fontSize="large"
          className="header__menu__arrow pointer"
        />

        <Avatar
          sx={{ bgcolor: "#FF5A5F" }}
          src={user.picture}
          alt={user.initials}
          className="pointer"
        >
          {user.initials}
        </Avatar>
      </div>
    </div>
  );
}

export default Header;
