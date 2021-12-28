import React from "react";
import {
  Grid,
  Typography,
  MenuItem,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { NavLink, useHistory } from "react-router-dom";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "45vh",
    backgroundColor: "silver",
    marginTop: "10vh",
  },
  titleDiv: {
    height: "100%",
    paddingTop: "3vh",
  },
  pageLink: {
    justifyContent: "center",
  },
  iconHover: {
    textAlign: "center",
    marginTop: "3vh",
    "&:hover": {
      transform: "translateY(-10px)",
      transition: "transform 1s ease-in-out",
    },
  },
  icon: {
    "&:hover": {
      color: "black",
      transform: "translateY(-10px)",
      //  transition: "transform 1s ease-in-out",
    },
  },
  iconMobile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  arrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "20px",
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  function handleOpen1() {
    setOpen1(!open1);
  }
  function handleOpen2() {
    setOpen2(!open2);
  }
  function handleOpen3() {
    setOpen3(!open3);
  }

  if (isWidthUp("sm", props.width))
    return (
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.root}
      >
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          xl={3}
          className={classes.titleDiv}
        >
          <Typography style={{ fontSize: "20px" }}>
            <strong>Follow Us</strong>
          </Typography>
          <Divider />
          <div className={classes.iconHover}>
            <NavLink
              to="https://www.linkedin.com/in/saud-malik%F0%9F%92%AD-2b50a2120/"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </NavLink>
          </div>
          <div className={classes.iconHover}>
            <NavLink
              to="https://www.facebook.com/saud_A-malik/"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </NavLink>
          </div>
          <div className={classes.iconHover}>
            <NavLink
              to="https://www.twitter.com/saud_sahib"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </NavLink>
          </div>
          <div className={classes.iconHover}>
            <NavLink
              to="https://www.instagram.com/saud_a-malik"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </NavLink>
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          xl={3}
          className={classes.titleDiv}
        >
          <Typography style={{ fontSize: "20px" }}>
            <strong>SHOP</strong>
          </Typography>
          <Divider />
          <div style={{ marginTop: "3vh" }}>
            <div>
              <MenuItem
                className={classes.pageLink}
                onClick={() => {
                  history.push("/Men");
                }}
              >
                MEN
              </MenuItem>
            </div>
            <div>
              <MenuItem
                className={classes.pageLink}
                onClick={() => {
                  history.push("/Women");
                }}
              >
                WOMEN
              </MenuItem>
            </div>
            <div>
              <MenuItem
                className={classes.pageLink}
                onClick={() => {
                  history.push("/Ourmaterials");
                }}
              >
                OUR MATERIALS
              </MenuItem>
            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          xl={3}
          className={classes.titleDiv}
        >
          <Typography style={{ fontSize: "20px" }}>
            <strong>INFO</strong>
          </Typography>
          <Divider />
          <div style={{ marginTop: "3vh" }}>
            <div>
              <MenuItem
                className={classes.pageLink}
                onClick={() => {
                  history.push("/aboutus");
                }}
              >
                About Us
              </MenuItem>
            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          xl={3}
          className={classes.titleDiv}
        >
          <Typography style={{ fontSize: "20px" }}>
            <strong>CONTACTS</strong>
          </Typography>
          <Divider />
          <div style={{ marginTop: "3vh" }}>
            <div>
              <MenuItem
                className={classes.pageLink}
                onClick={() => {
                  history.push("/Contact");
                }}
              >
                Contact Us
              </MenuItem>
            </div>
          </div>
        </Grid>
      </Grid>
    );

  return (
    <div>
      <div>
        <Accordion>
          <AccordionSummary onClick={handleOpen1}>
            <span className={classes.arrow}>
              <strong>SHOP</strong>
              {open1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ marginTop: "1vh" }}>
              <div>
                <MenuItem
                  className={classes.pageLink}
                  onClick={() => {
                    history.push("/Men");
                  }}
                >
                  MEN
                </MenuItem>
              </div>
              <div>
                <MenuItem
                  className={classes.pageLink}
                  onClick={() => {
                    history.push("/Women");
                  }}
                >
                  WOMEN
                </MenuItem>
              </div>
              <div>
                <MenuItem
                  className={classes.pageLink}
                  onClick={() => {
                    history.push("/Ourmaterials");
                  }}
                >
                  OUR MATERIALS
                </MenuItem>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionSummary onClick={handleOpen2}>
            <span className={classes.arrow}>
              <strong>ABOUT US</strong>
              {open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <div style={{ marginTop: "1vh" }}>
              <div>
                <MenuItem
                  className={classes.pageLink}
                  onClick={() => {
                    history.push("/aboutus");
                  }}
                >
                  About Us
                </MenuItem>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionSummary onClick={handleOpen3}>
            <span className={classes.arrow}>
              <strong>CONTACTS</strong>
              {open3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <div style={{ marginTop: "1vh" }}>
              <div>
                <MenuItem
                  className={classes.pageLink}
                  onClick={() => {
                    history.push("/Contact");
                  }}
                >
                  Contact Us
                </MenuItem>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Typography style={{ fontSize: "20px" }}>
          <strong>Follow Us</strong>
        </Typography>

        <Divider />
        <div className={classes.iconMobile}>
          <span className={classes.iconMobile}>
            <NavLink
              to="https://www.linkedin.com/in/saud-malik-2b50a2120"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </NavLink>
          </span>
          <span className={classes.iconMobile}>
            <NavLink
              to="https://www.facebook.com/saud_A-malik/"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </NavLink>
          </span>
          <span className={classes.iconMobile}>
            <NavLink
              to="https://www.twitter.com/saud_sahib"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </NavLink>
          </span>
          <span className={classes.iconMobile}>
            <NavLink
              to="https://www.instagram.com/saud_a-malik"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default withWidth()(Footer);
