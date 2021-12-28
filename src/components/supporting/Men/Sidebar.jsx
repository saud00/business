import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputLabel,
  ListItem,
  MenuItem,
  Typography,
  makeStyles,
  Divider,
  Grid,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%", height: "100%" },
  Select: {
    minWidth: "80%",
    height: "35px",
    border: "5px solid red",
    margin: "0px auto",
  },
  label: { margin: "0px auto" },
  accordLabel: {
    display: "flex",
    flexWrap: "wrap",
  },
  sizeItem: {
    border: "1px solid black",
    margin: "3px 3px",
  },
  color: {
    width: "100%",
    margin: theme.spacing(1),
  },
  arrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "20px",
  },
}));

const Sidebar = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { menProducts } = useSelector((state) => state.ProductReducers);

  var mapColors = menProducts.map((val) => val.color);
  let setColors = [...new Set(mapColors)];

  const [maxPrice, setMaxPrice] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [color, setColor] = React.useState("");

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const sizeRef = useRef(null);
  const colorRef = useRef(null);
  const priceRef = useRef(null);
  const prevRef = useRef(null);

  const priceReducer = (e) => {
    setMaxPrice(e.target.value);
  };
  const sizeReducer = (e) => {
    setSize(e.target.value);
  };
  const accordSize = () => {
    setOpen2(!open2);
    prevRef.current.style.backgroundColor = "inherit";
    sizeRef.current.style.backgroundColor = "cadetblue";
    prevRef.current = sizeRef.current;
  };
  const accordColor = () => {
    setOpen3(!open3);
    prevRef.current.style.backgroundColor = "inherit";
    colorRef.current.style.backgroundColor = "cadetblue";
    prevRef.current = colorRef.current;
  };
  const accordPrice = () => {
    setOpen1(!open1);
    prevRef.current.style.backgroundColor = "inherit";
    priceRef.current.style.backgroundColor = "cadetblue";
    prevRef.current = priceRef.current;
  };

  useEffect(() => {
    prevRef.current = priceRef.current;
  }, []);

  useEffect(() => {
    console.log(maxPrice);
    dispatch({
      type: "PRICE_MEN",
      maxPrice,
    });
  }, [maxPrice]);

  useEffect(() => {
    console.log(size);
    dispatch({
      type: "SIZE_MEN",
      size,
    });
  }, [size]);

  useEffect(() => {
    console.log(color);
    dispatch({
      type: "COLOR_MEN",
      color,
    });
  }, [color]);

  return (
    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography align="center" color="textPrimary" variant="h5">
          Filter by
        </Typography>
      </Grid>
      <Grid item xs={4} sm={4} md={12} lg={12} xl={12}>
        <Accordion square={true}>
          <AccordionSummary ref={priceRef} onClick={accordPrice}>
            <span className={classes.arrow}>
              <InputLabel id="label">Max price</InputLabel>
              {open1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem className={classes.accordLabel}>
              <MenuItem value="100" onClick={priceReducer}>
                100
              </MenuItem>
              <Divider />
              <MenuItem value="200" onClick={priceReducer}>
                200
                <Divider />
              </MenuItem>
              <MenuItem value="500" onClick={priceReducer}>
                500
                <Divider />
              </MenuItem>
              <MenuItem value="1000" onClick={priceReducer}>
                1000
              </MenuItem>
              <Divider />
            </ListItem>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={4} sm={4} md={12} lg={12} xl={12}>
        <Accordion square={true}>
          <AccordionSummary ref={sizeRef} onClick={accordSize}>
            <span className={classes.arrow}>
              <InputLabel id="label">Size</InputLabel>
              {open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem className={classes.accordLabel}>
              <MenuItem
                value="6"
                onClick={sizeReducer}
                className={classes.sizeItem}
              >
                6
              </MenuItem>
              <Divider />
              <MenuItem
                value="7"
                onClick={sizeReducer}
                className={classes.sizeItem}
              >
                7
              </MenuItem>
              <Divider />
              <MenuItem
                value="8"
                onClick={sizeReducer}
                className={classes.sizeItem}
              >
                8
              </MenuItem>
              <Divider />
              <MenuItem
                value="9"
                onClick={sizeReducer}
                className={classes.sizeItem}
              >
                9
              </MenuItem>
              <Divider />
            </ListItem>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={4} sm={4} md={12} lg={12} xl={12}>
        <Accordion square={true}>
          <AccordionSummary ref={colorRef} onClick={accordColor}>
            <span className={classes.arrow}>
              <InputLabel id="label">Color</InputLabel>
              {open3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem className={classes.accordLabel}>
              {setColors.map((val) => (
                <div>
                  <MenuItem value={val} onClick={() => setColor(val)}>
                    {val}
                  </MenuItem>
                  <Divider />
                </div>
              ))}
            </ListItem>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
