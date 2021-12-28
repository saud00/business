import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../supporting/home/Title";

const useStyles = makeStyles((theme) => ({
  reduxCont: {
    width: "100%",
  },
  reduxRow: {
    width: "25%",
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
}));

const Ourmaterials = () => {
  const classes = useStyles();
  var currencyFormatter = require("currency-formatter");
  const { products } = useSelector((products) => products.ProductReducers);
  console.log(products);
  return (
    <div className={classes.reduxCont}>
      <Title title="Our Materials" />
      <div className="redux-grid">
        {products.map((val) => (
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
                      {currencyFormatter.format(val.discount, { code: "USD" })}
                    </span>
                    <span className={classes.discPer}> {val.disVal} %</span>
                  </div>
                </div>
                <div>
                  <div className="redux-dis2">
                    Actual price
                    <div>
                      <span className="redux-price">
                        {currencyFormatter.format(val.price, { code: "USD" })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourmaterials;
