import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { connectAdvanced, useDispatch, useSelector } from "react-redux";
import { Grid, Button, Typography } from "@material-ui/core";
import { FiPlus, FiMinus } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "Wrap",
    marginTop: "10vh",
    width: "100%",
    maxWidth: "100%",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "100%",
    },
  },
  imgGrid: {
    display: "block",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    backgroundColor: "grey",
  },
  imgdiv: {
    height: "60%",
    width: "60%",
    display: "block",
    margin: "15vh auto",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  PrdDetails: {
    display: "block",
    backgroundColor: "silver",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  btns: { display: "flex", margin: "5vh 5vw", cursor: "pointer" },
  btnSpan: {
    display: "flex",
    flexWrap: "noWrap",
    width: "100%",
  },
  btnPlus: {
    "&:hover": { backgroundColor: "khaki" },
    border: "1px solid black",
    height: "50px",
    width: "35px",
  },
  plusIcon: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnNum: {
    textAlign: "center",
    "&:hover": { backgroundColor: "khaki" },
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    height: "50px",
    width: "35px",
  },
  btn: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexWrap: "noWrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cartBtn: {
    backgroundColor: "pink",
    width: "150%",
    height: "50px",
    marginLeft: "10px",
    borderRadius: "0",
  },
}));

const PrdDetails = () => {
  const classes = useStyles();
  var currencyFormatter = require("currency-formatter");

  const { id } = useParams();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.ProductReducers);

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.price);
  const [discount, setDiscount] = useState(product.discount);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setDiscount((prevDiscount) => prevDiscount + product.discount);
    setPrice((prevPrice) => prevPrice + product.price);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity <= 1 ? 1 : prevQuantity - 1));
    setPrice((prevPrice) =>
      prevPrice <= product.price ? product.price : prevPrice - product.price
    );
    setDiscount((prevDiscount) =>
      prevDiscount <= product.discount
        ? product.discount
        : prevDiscount - product.discount
    );
  };

  function AddCart() {
    dispatch({
      type: "ADD_CART",
      payload: { product, quantity, discount, price },
    });
    alert("new item added to your cart");
  }

  useEffect(() => {
    dispatch({ type: "FIND_PRODUCT", id: id });
  }, [id]);

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
        md={6}
        lg={6}
        xl={6}
        className={classes.imgGrid}
      >
        <div className={classes.imgdiv}>
          <img
            className={classes.img}
            src={`/img/${product.image}.jpg`}
            alt="prdImg"
          />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        className={classes.PrdDetails}
      >
        <div>
          <span>
            <Typography variant="h3" align="center">
              {product.name}
            </Typography>
          </span>
          <span className={classes.btns}>
            <span>
              <span className={classes.btnSpan}>
                <span className={classes.btnPlus}>
                  <span className={classes.plusIcon} onClick={decrement}>
                    <FiMinus />
                  </span>
                </span>
                <span className={classes.btnNum}>
                  <span className={classes.btn}>{quantity}</span>
                </span>
                <span className={classes.btnPlus}>
                  <span className={classes.plusIcon} onClick={increment}>
                    <FiPlus />
                  </span>
                </span>

                <span>
                  <Button className={classes.cartBtn} onClick={AddCart}>
                    Add to Cart
                  </Button>
                </span>
              </span>
            </span>
          </span>
          <div>
            <div spacing="5px">
              <span
                style={{ textDecoration: "line-through", fontWeight: "bold" }}
              >
                {currencyFormatter.format(discount, { code: "USD" })}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontWeight: "bold" }}>
                {currencyFormatter.format(price, { code: "USD" })}
              </span>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
      </Grid>
    </Grid>
  );
};

export default PrdDetails;
