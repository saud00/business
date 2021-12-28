import React from "react";
import { Grid, Typography, MenuItem, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  paraDiv: { lineHeight: "5vh", padding: "0 6vw" },
  para: { justifyContent: "left" },
}));

const Contact = () => {
  const classes = useStyles();
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
        xs={0}
        sm={0}
        md={2}
        lg={2}
        xl={2}
        className={classes.root}
      ></Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        lg={10}
        xl={10}
        className={classes.paraDiv}
      >
        <Typography varient="h2" paragraph="true" align="center">
          <strong>CONTACT US</strong>
        </Typography>
        <div className={classes.para}>
          <Typography varient="body1" paragraph="true" align="left">
            CONTACT US Can't find an answer in our FAQ? No problem! Feel free to
            send us a message including your enquiry or return details using the
            below form. Our friendly team will be available to answer your email
            queries Monday - Friday, 8.30am - 5pm AEST We are currently
            experiencing a high volume of emails and apologise for any delay in
            response.
          </Typography>
          <Typography varient="body2" paragraph="true" align="left">
            Thank you for your patience, our customer service team will do their
            best to respond to your enquiry as soon as possible.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
