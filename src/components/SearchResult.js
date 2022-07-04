import React from "react";
import "../styles/SearchResult.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Rating,
} from "@mui/material";
function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <Card className="card__result">
      <CardActionArea className="card__action__area">
        <CardMedia
          component="img"
          //   height="140"
          className="card__media"
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={img}
        />
        <CardContent className="card__content">
          {/* <Typography
            className="card__title"
            gutterBottom
            variant="h4"
            component="div"
          >
            {title}
          </Typography> */}
          <Typography className="card__title_v1" variant="h4">
            {title}
          </Typography>
          <Typography className="card__location" variant="h5">
            {location}
          </Typography>
          <Typography className="card__description" variant="h6">
            {description}
          </Typography>
          <div className="card__metrics">
            {/* <Typography className="card__stars" variant="h6">
              {star}
            </Typography> */}
            <Rating name="read-only" value={star} precision={0.5} readOnly />
            <Typography className="card__price__v2" variant="h6" color="error">
              {price}
            </Typography>
          </div>
          <div className="card__total__price">
            <Typography className="card__price__v2" variant="h6" color="error">
              {total}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SearchResult;
