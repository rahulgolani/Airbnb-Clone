import React from "react";
import "../styles/Card.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

function CardComponent({ src, title, description, price }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={src}
        />
        <CardContent>
          <Typography
            className="card__title"
            gutterBottom
            variant="h4"
            component="div"
          >
            {title}
          </Typography>
          <Typography className="card__description" variant="h6">
            {description}
          </Typography>
          <Typography className="card__price" variant="h6" color="error">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
