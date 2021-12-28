import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    position: "relative",
    Width: "100%",
    Height: "100%",
  },
  card: {
    display: "block",
    Width: "100%",
    Height: "100%",
    "&:hover": {
      transition: "width  2s ease-in-out 2s",
      transform: "scale3d(2x)",
      opacity: "0.5",
    },
    zIndex: "0",
  },
  typoBoder: {
    borderColor: "black",
  },
  button: {
    width: "100%",
    opacity: "0",
    display: "flex",
    position: "absolute",
    left: "0px",
    bottom: "20vh",
    zIndex: "1",
    flexDirection: "row",
  },
  btn1: {
    flexGrow: "1",
    height: "7vh",
    width: "10vw",
    whiteSpace: "nowrap",
    fontFamily: "HurmeGeometricSans3",
    fontWeight: "bold",
    //fontSize: "150%",
    margin: "0%",
    background: "white",
    textAlign: "center",
    variant: "outlined",
    borderRadius: "1px",
    "&:hover": {
      variant: "contain",
      background: "rgb(41 50 56)",
      color: "white",
    },
  },
  btn2: {
    flexGrow: "1",
    height: "7vh",
    width: "10vw",
    whiteSpace: "nowrap",
    fontFamily: "HurmeGeometricSans3",
    margin: "0%",
    fontWeight: "bold",
    textAlign: "center",
    variant: "contain",
    borderRadius: "1px",
    background: "white",
    "&:hover": {
      variant: "contain",
      background: "rgb(41 50 56)",
      color: "white",
    },
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const refVisible = useRef(null);
  const [refReady, setRefReady] = useState(false);

  useEffect(() => {
    setRefReady(true);
    console.log(refVisible.current);
  }, []);

  return (
    <div className={classes.root}>
      <Card
        onMouseEnter={() => {
          refVisible.current.style.opacity = "1";
        }}
        onMouseLeave={() => {
          refVisible.current.style.opacity = "0";
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.card}
            component="img"
            alt={props.title}
            height="250vh"
            image={props.imgsrc}
            title={props.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              borderBottom={1}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.quality}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className={classes.button} ref={refVisible}>
            <Button className={classes.btn1}>Shop Men</Button>

            <Button className={classes.btn2}>Shop Women</Button>
          </div>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
