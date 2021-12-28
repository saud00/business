import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../../styles/img/home1.jpg";
import Grid2 from "../supporting/home/Grid2";
import { useSelector } from "react-redux";
import Title from "../supporting/home/Title";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    width: "100%",
    maxWidth: "100%",
  },
  grid1: {
    height: "100vh",
    minWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    backgroundImage: `url(${img1})`,
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    //opacity: "0.7",
  },
  grid2: {
    height: "110vh",
    width: "100%",
  },
  grid3: {
    [theme.breakpoints.down("sm")]: {
      height: "90vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "20vh",
    },
    //backgroundColor: "teal ",
  },
  img1: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    zIndex: "0",
    position: "relative",
    opacity: "0.7",
  },
  font1: {
    marginBlockStart: "0.67em",
    marginBlockEnd: "0.1em",
    fontFamily: "HurmeGeometricSans3",
    fontWeight: "bold",
    fontSize: "67px",
    lineHeight: "1.25",
    color: "white",
  },
  font2: {
    fontFamily: "HurmeGeometricSans3",
    fontSize: "16px",
    color: "white",
    fontWeight: "700",
    letterSpacing: "1.5px",
  },
  gridbtn: {
    width: "100%",
    margin: "2vh 25%",
    marginBlockStart: "6.67em",
    paddingBottom: "1%",
    justifyContent: "center",
  },
  btn1: {
    height: "100%",
    width: "100%",
    whiteSpace: "nowrap",
    fontFamily: "HurmeGeometricSans3",
    fontWeight: "bold",
    //fontSize: "150%",
    //padding: "1vh 0",
    color: "inherit",
    variant: "outlined",
    borderRadius: "1px",
    background: "white",
    "&:hover": {
      variant: "contain",
      background: "rgb(41 50 56)",
      color: "white",
    },
  },
  btn2: {
    height: "100%",
    width: "100%",
    whiteSpace: "nowrap",
    fontFamily: "HurmeGeometricSans3",
    //padding: "1vh 0",
    fontWeight: "bold",
    color: "inherit",
    variant: "outlined",
    borderRadius: "1px",
    background: "white",
    "&:hover": {
      variant: "contain",
      background: "rgb(41 50 56)",
      color: "white",
    },
  },
}));

const Home = () => {
  const products = useSelector((store) => store);
  console.log(products);
  const classes = useStyles();
  return (
    <>
      <Title title={"Home"} />
      <Grid
        container
        xs={12}
        sm={12}
        lg={12}
        md={12}
        xl={12}
        className={classes.root}
      >
        <Grid
          item
          md={12}
          lg={12}
          xl={12}
          sm={12}
          xs={12}
          className={classes.grid1}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            style={{
              alignSelf: "center",
              textAlign: "center",
              justifyItems: "center",
              marginTop: "35vh",
              lineHeight: "3vh",
            }}
          >
            <Typography className={classes.font1}>
              Shoes made from wool
            </Typography>
            <Typography className={classes.font2}>Now in new colors</Typography>
          </Grid>
          <Grid
            container
            lg={6}
            md={6}
            xl={6}
            xs={8}
            sm={8}
            spacing={1}
            className={classes.gridbtn}
          >
            <Grid item xs={5} sm={5} lg={5} md={5} xl={5}>
              <Button className={classes.btn1}>
                <Typography variant="button">Shop Men</Typography>
              </Button>
            </Grid>
            <Grid item xs={5} sm={5} lg={5} md={5} xl={5}>
              <Button className={classes.btn2}>
                <Typography variant="button">Shop Women</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12} className={classes.grid2}>
          <Grid2 />
        </Grid>

        <Grid item xs={12} md={12} lg={12} className={classes.grid3}></Grid>

        <Grid item xs={12} md={12} lg={5} className={classes.grid4}></Grid>

        <Grid item xs={12} md={12} lg={5} className={classes.grid5}></Grid>

        <Grid item xs={12} md={12} lg={5} className={classes.grid6}></Grid>
      </Grid>
    </>
  );
};

export default Home;
