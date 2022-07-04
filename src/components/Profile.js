import React, { useContext } from "react";
import "../styles/Profile.css";
import { UserContext } from "../App";
import { Avatar, Card, CardContent } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import BadgeIcon from "@mui/icons-material/Badge";
import WcIcon from "@mui/icons-material/Wc";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FlagIcon from "@mui/icons-material/Flag";
import { capitalizeString, formatDateOfBirth } from "../utils";

function Profile() {
  const user = useContext(UserContext);
  //   console.log(user);
  return (
    <div className="profile">
      <Avatar src={user.picture} className="profile__picture"></Avatar>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BadgeIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="profile__item__text"
            primary="Name"
            secondary={`${user.first} ${user.last}`}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WcIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="profile__item__text"
            primary="Gender"
            secondary={capitalizeString(user.details.gender)}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CalendarMonthIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="profile__item__text"
            primary="Date Of Birth"
            secondary={formatDateOfBirth(user.details.dob.date)}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="profile__item__text"
            primary="Cell"
            secondary={user.details.cell}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="profile__item__text"
            primary="Email"
            secondary={user.details.email}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FlagIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="profile__item__text"
            primary="Country"
            secondary={user.details.location.country}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default Profile;
