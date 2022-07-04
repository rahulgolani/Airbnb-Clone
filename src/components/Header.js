import React, { useContext } from "react";
// import {useState,useEffect} from 'react'
import "../styles/Header.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Typography, Avatar, Tooltip } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Header() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  // const [user, setUser] = useState({
  //   first: "",
  //   last: "",
  //   initials: "RU",
  //   picture: "",
  // });

  // useEffect(() => {
  //   axios
  //     .get("https://randomuser.me/api/")
  //     .then((response) => {
  //       const userData = response.data.results[0];
  //       setUser({
  //         first: userData.name.first,
  //         last: userData.name.last,
  //         initials: userData.name.first[0] + userData.name.last[0],
  //         picture: userData.picture.large,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
        <Tooltip title="Coming Soon!">
          <Typography variant="h6" className="header__menu__title">
            Become a Host
          </Typography>
        </Tooltip>
        <Tooltip title="Coming Soon!">
          <LanguageIcon fontSize="large" className="header__menu__language" />
        </Tooltip>
        <Tooltip title="Coming Soon!">
          <KeyboardArrowDownIcon
            fontSize="large"
            className="header__menu__arrow"
          />
        </Tooltip>
        {/* <Link to="profile"> */}
        <Avatar
          sx={{ bgcolor: "#FF5A5F" }}
          src={user.picture}
          alt={user.initials}
          className="pointer"
          onClick={() => navigate("profile")}
        >
          {user.initials}
        </Avatar>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Header;
