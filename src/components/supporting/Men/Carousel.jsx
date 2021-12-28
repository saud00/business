import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { IconButton, Grid, Button } from "@material-ui/core";
import { WomenSlideData, MenSlideData } from "./SlideData";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  imgDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "noWrap",
    width: "100%",
    jusitfyContent: "center",
    height: "50vh",
    position: "relative",
    overflow: "hidden",
  },
  stepper: {
    padding: "0 auto",
    width: "100%",
    height: "100%",
  },
  stepperDiv: {
    marginTop: "-2.5vw",
    maxWidth: 300,
    height: 40,
    margin: "0 auto",
    flexGrow: 1,
    background: "inherit",
    zIndex: "2",
  },
  gridLeft: {
    position: "absolute",
    left: "-50vw",
    width: "60vw",
    height: "100%",
  },
  gridMid: {
    position: "absolute",
    left: "20vw",
    width: "60vw",
    height: "100%",
  },
  gridRight: {
    position: "absolute",
    right: "-50vw",
    width: "60vw",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    zIndex: "0",
  },

  left: {
    position: "absolute",
    top: "25vh",
    left: "10vw",
    zIndex: "1",
  },
  right: {
    position: "absolute",
    top: "25vh",
    right: "10vw",
    zIndex: "1",
  },
}));

const Carousel = ({ name }) => {
  const classes = useStyles();
  const len = MenSlideData.length - 1;
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(1);
  const [active3, setActive3] = useState(2);

  function left() {
    setActive(active <= 0 ? len : (prevActive) => prevActive - 1);
    setActive2(active2 <= 0 ? len : (prevActive) => prevActive - 1);
    setActive3(active3 <= 0 ? len : (prevActive) => prevActive - 1);
  }
  function right() {
    setActive(active >= len ? 0 : (prevActive) => prevActive + 1);
    setActive2(active2 >= len ? 0 : (prevActive) => prevActive + 1);
    setActive3(active3 >= len ? 0 : (prevActive) => prevActive + 1);
  }

  React.useEffect(() => {
    const slideTime = setTimeout(() => {
      right();
    }, 2000);
    return () => clearTimeout(slideTime);
  }, [active, active2, active3]);

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
      <div className={classes.imgDiv}>
        <span>
          <IconButton className={classes.left} onClick={left}>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton className={classes.right} onClick={right}>
            <KeyboardArrowRight />
          </IconButton>
        </span>

        {name === "Men"
          ? MenSlideData.map((val, key) => (
              <div>
                {key === active && (
                  <span className={classes.gridLeft}>
                    <img
                      src={val.imgsrc}
                      alt="slider"
                      className={classes.img}
                    />
                  </span>
                )}
                {key === active2 && (
                  <span className={classes.gridMid}>
                    <img
                      src={val.imgsrc}
                      alt="slider"
                      className={classes.img}
                    />
                  </span>
                )}
                {key === active3 && (
                  <span className={classes.gridRight}>
                    <img
                      src={val.imgsrc}
                      alt="slider"
                      className={classes.img}
                    />
                  </span>
                )}
              </div>
            ))
          : WomenSlideData.map((val, key) => (
              <div>
                {key === active && (
                  <span className={classes.gridLeft}>
                    <img
                      src={val.imgsrc}
                      alt="slider"
                      className={classes.img}
                    />
                  </span>
                )}
                {key === active2 && (
                  <span className={classes.gridMid}>
                    <img
                      src={val.imgsrc}
                      alt="slider"
                      className={classes.img}
                    />
                  </span>
                )}
                {key === active3 && (
                  <span className={classes.gridRight}>
                    <img
                      src={val.imgsrc}
                      alt="slider"
                      className={classes.img}
                    />
                  </span>
                )}
              </div>
            ))}
      </div>
      <div className={classes.stepperDiv}>
        <DotsMobileStepper
          setActive2={setActive2}
          active2={active2}
          left={left}
          right={right}
        />
      </div>
    </Grid>
  );
};

function DotsMobileStepper({ active2, left, right }) {
  const classes = useStyles();

  const handleNext = () => {
    right();
  };

  const handleBack = () => {
    left();
  };

  return (
    <MobileStepper
      variant="dots"
      steps={4}
      position="static"
      activeStep={active2}
      className={classes.stepper}
      nextButton={
        <Button size="small" onClick={handleNext}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}

export default Carousel;
