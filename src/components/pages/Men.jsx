import React from "react";
import Title from "../supporting/home/Title";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Sidebar from "../supporting/Men/Sidebar";
import Carousel from "../supporting/Men/Carousel";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  reduxCont: {
    width: "100%",
  },
  carousel: {
    minWidth: "100%",
    height: "50vh",
    overflow: "hidden",
    marginBottom: "30px",
  },
  reduxRow: {
    width: "100%",
    padding: "25px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "33%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%",
    },
  },
  discPer: { color: "silver", fontSize: "small" },
  imgTransition: {
    "&:hover": {
      transform: "scale3d(1.2, 1.2, 1)",
      transition: "transform 1s ease-in-out",
    },
  },
  sidebar: {
    width: "100%",
    paddingTop: "25px",
  },
}));

const Men = () => {
  const { name } = useParams();
  console.log(name);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [rate, setRate] = React.useState(2);
  var currencyFormatter = require("currency-formatter");
  const { products, menProducts } = useSelector(
    (state) => state.ProductReducers
  );

  console.log(menProducts.length);

  React.useEffect(() => {
    dispatch({ type: "MEN_PRODUCT", filter: `${name} wear` });
  }, [name]);

  console.log(menProducts);
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
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.carousel}
      >
        <Carousel name={name} />
      </Grid>

      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          xl={2}
          className={classes.sidebar}
        >
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <div className={classes.reduxCont}>
            <Title title={`${name} wear`} />
            <div>
              {menProducts.length < 1 ? (
                <div>Sorry no products in this category</div>
              ) : menProducts.length === undefined ? (
                <div>{menProducts}</div>
              ) : (
                <div className="redux-grid">
                  {menProducts.map((val) => (
                    <div className={classes.reduxRow}>
                      <div className="redux-col">
                        <div className={"redux-img" && classes.imgTransition}>
                          <Link to={`/details/${val.id}`}>
                            <img src={`/img/${val.image}.jpg`} alt="foo" />
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="redux-col2">
                          <div className="redux-dis1">
                            Discount price
                            <div>
                              <span className="redux-discPer1">
                                {currencyFormatter.format(val.discount, {
                                  code: "USD",
                                })}
                              </span>
                              <span className={classes.discPer}>
                                {" "}
                                {val.disVal} %
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="redux-dis2">
                              Actual price
                              <div>
                                <span className="redux-price">
                                  {currencyFormatter.format(val.price, {
                                    code: "USD",
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Rating
                            name="simple-controlled"
                            rate={rate}
                            onChange={(event, newValue) => {
                              setRate(newValue);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Men;
