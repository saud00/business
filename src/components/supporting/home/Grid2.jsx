import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import Grid2Slide from "./Grid2Slide";
import sli from "../../../styles/img/sli.jpg";
import sli2 from "../../../styles/img/sli2.jpg";
import sli3 from "../../../styles/img/sli3.jpg";
import apparel1 from "../../../styles/img/apparel1.jpg";
import apparel2 from "../../../styles/img/apparel2.jpg";
import apparel3 from "../../../styles/img/apparel3.jpg";
import basics1 from "../../../styles/img/basics1.jpg";
import basics2 from "../../../styles/img/basics2.jpg";
import basics3 from "../../../styles/img/basics3.jpg";

const useStyles = makeStyles((theme) => ({
  grid2: {
    display: "block",
    Width: "100%",
  },
  h2div: {
    display: "block",
    Width: "100%",
    marginBlockStart: "5em",
    // backgroundColor: "darkolivegreen",
  },
  h3div: {
    width: "100%",
    maxWidth: "100vw",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexGrow: "1",
    borderBottom: "3px solid grey",
    flexDirection: "row",
    marginTop: "3vh",
  },
  h3: {
    fontFamily: "HurmeGeometricSans3",
    fontWeight: "bold",
    fontSize: "150%",
    padding: "1vh 0vw",
    borderRadius: "1px",
    color: "grey",
    [theme.breakpoints.down("sm")]: {
      margin: "-3px 2vw",
    },
    [theme.breakpoints.up("sm")]: {
      letterSpacing: "3px",
      margin: "-3px 5vw",
    },
    "&:hover": { color: "black", borderBottom: "3px solid black" },
  },
  space: {
    flexGrow: "1",
  },

  spaceHalf: {
    flexGrow: "0.5",
  },
  h2: {
    fontFamily: "HurmeGeometricSans3",
    fontWeight: "bold",
    fontSize: "46px",
    letterSpacing: "01px",
    textAlign: "center",
  },
}));

const Grid2 = () => {
  const shoesData = [
    {
      imgsrc: sli,
      title: "Tree Dasher",
      quality: "Daily Running Shoe",
    },
    {
      imgsrc: sli2,
      title: "Tree Runner",
      quality: "Light and Breezy Sneaker",
    },
    {
      imgsrc: sli3,
      title: "Wool Runner ",
      quality: "Cozy Sneaker",
    },
  ];
  const apparelData = [
    {
      imgsrc: apparel1,
      title: "black dotted",
      quality: "Daily Running Shoe",
    },
    {
      imgsrc: apparel2,
      title: "Wool Hoodie",
      quality: "Light and Breezy Sneaker",
    },
    {
      imgsrc: apparel3,
      title: "Wool Cardi - Long",
      quality: "Cozy Sneaker",
    },
  ];
  const basicsData = [
    {
      imgsrc: basics1,
      title: "Trino™ Boxer Brief",
      quality: "Daily Running Shoe",
    },
    {
      imgsrc: basics2,
      title: "wool ",
      quality: "Light and Breezy Sneaker",
    },
    {
      imgsrc: basics3,
      title: "Trino™ Brief",
      quality: "Cozy Sneaker",
    },
  ];
  const classes = useStyles();
  var [slideData, setSlideData] = useState(shoesData);
  const currRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const prevref = useRef(null);

  useEffect(() => {
    currRef.current = ref1.current;
    ref1.current.style.borderBottom = "3px solid grey";
    ref1.current.style.color = "3px solid grey";
    prevref.current = ref1.current;
    setSlideData(shoesData);
    console.log(slideData);
  }, []);

  const clickShoes = () => {
    setSlideData(shoesData);
    console.log(slideData);
    currRef.current = ref1.current;
    prevref.current.style.borderBottom = "3px solid grey";
    prevref.current.style.color = "3px solid grey";
    ref1.current.style.borderBottom = "3px solid black";
    ref1.current.style.color = "3px solid black";
    prevref.current = ref1.current;
  };
  const clickApprel = () => {
    setSlideData(apparelData);
    currRef.current = ref2.current;
    prevref.current.style.borderBottom = "3px solid grey";
    prevref.current.style.color = "3px solid grey";
    ref2.current.style.borderBottom = "3px solid black";
    ref2.current.style.color = "3px solid black";
    prevref.current = ref2.current;
  };
  const clickBasics = () => {
    setSlideData(basicsData);
    currRef.current = ref3.current;
    prevref.current.style.color = "3px solid grey";
    prevref.current.style.borderBottom = "3px solid grey";
    ref3.current.style.borderBottom = "3px solid black";
    ref3.current.style.color = "3px solid black";
    prevref.current = ref3.current;
  };
  return (
    <div>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.grid2}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          xl={12}
          className={classes.h2div}
        >
          <Typography variant="h2" className={classes.h2}>
            Our Favourites
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          xl={12}
          className={classes.h3div}
        >
          <Button ref={ref1} className={classes.h3} onClick={clickShoes}>
            SHOES
          </Button>
          <Button ref={ref2} className={classes.h3} onClick={clickApprel}>
            APPAREL
          </Button>
          <Button ref={ref3} className={classes.h3} onClick={clickBasics}>
            BASICS
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid2Slide slideData={slideData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Grid2;
