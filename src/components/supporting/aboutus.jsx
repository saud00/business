import React from "react";
import { Grid, Typography, MenuItem, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  paraDiv: { lineHeight: "5vh", padding: "0 6vw" },
  para: { justifyContent: "left" },
}));

const Aboutus = () => {
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
          <strong>ABOUT US</strong>
        </Typography>
        <div className={classes.para}>
          <Typography varient="body1" paragraph="true" align="left">
            In 1958, Hush Puppies introduced the world to a new kind of footwear
            - shoes with casual style and an easygoing attitude made to relax
            in.
          </Typography>
          <Typography varient="body1" paragraph="true" align="left">
            With over 17 million pairs of shoes sold every year in 150 countries
            around the world, Hush Puppies is a global brand, a household name
            and a cultural icon.
          </Typography>
          Yet our single obsession to create everyone's "favourite pair of
          shoes" remains the measurement of our success.
          <Typography varient="body1" paragraph="true" align="left">
            With a unique formula of style and comfort in product, world-class
            marketing.
          </Typography>
          <Typography varient="body1" paragraph="true" align="left">
            Inspired by the wonderful characteristics of our beloved basset
            hound icon, Hush Puppies is individualistic, easygoing and fun.
            Experience what it means to never take yourself too seriously, have
            fun and don't be afraid to break into a howl if the mood should
            strike you.
          </Typography>
          <Typography varient="body1" paragraph="true" align="left">
            {" "}
            Feel the Hush. Hush Puppies
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Aboutus;
