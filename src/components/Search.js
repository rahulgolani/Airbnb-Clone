import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Search.css";
function Search() {
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <Button
        fullWidth
        variant="outlined"
        className="search__button"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        {showDatePicker ? "Hide" : "Search Dates"}
      </Button>
      {showDatePicker && (
        <div className="search__datepicker">
          <DateRangePicker
            className="datepicker"
            ranges={[selectionRange]}
            onChange={handleSelect}
          />
          <div className="search__options">
            <TextField
              type="number"
              min="0"
              className="search__options__guests"
              placeholder="Number Of Guests"
            ></TextField>
            {/* <Link className="datepicker__search__link" to="search"> */}
            <Button
              onClick={() => navigate("search")}
              className="search__options__button"
              variant="outlined"
            >
              Search Airbnb
            </Button>
            {/* </Link> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
