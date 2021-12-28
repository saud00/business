import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const drawerWidth = "35%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    display: "block",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "100%",
      minWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      maxWidth: "40%",
      minWidth: "40%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "35%",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  category: {
    fontSize: "16px",
    fontWeight: 600,
    margin: "10px 0",
  },
  image: { margin: "10px 0", height: "90px", width: "90px" },
  img: { height: "100%", width: "100%" },
  table: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "noWrap",
    padding: "10%",
    overflow: "auto",
  },
  space: { margin: "0 auto" },
  incDec2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    border: "1px solid black",
  },
  plus: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
  },
  quantity: {
    display: "flex",
    width: "33%",
    justifyContent: "center",
  },

  minus: {
    display: "flex",
    width: "33%",
    justifyContent: "center",
  },
  delete: {
    fontSize: "16px",
    fontWeight: "bolder",
    margin: "10px 0",
    borderRadius: "250px",
    "&:hover": { backgroundColor: "grey" },
  },
}));
export default function CartInfo(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);
  const { products, netQuantity, discountPrice, netPrice } = useSelector(
    (state) => state.CartReducer
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={() => {
              setOpen(false);
              props.setCartOn(false);
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <div>
          <Typography variant="h5" align="center">
            Your Cart
          </Typography>
        </div>
        <div className={classes.cartDiv}>
          {products.map((val) => (
            <div>
              <div className={classes.table}>
                <span className={classes.space}>
                  <div className={classes.image}>
                    <img
                      className={classes.img}
                      src={`/img/${val.image}.jpg`}
                      alt="img1"
                    />
                  </div>
                </span>
                <span className={classes.space}>
                  <div className={classes.category}>{val.category}</div>
                  <div>{val.name}</div>
                  <div className={classes.incDec2}>
                    <span
                      className={classes.plus}
                      onClick={() => {
                        dispatch({
                          type: "INC",
                          payload: {
                            id: val.id,
                            discount: val.discount,
                            quantity: val.quantity,
                            price: val.price,
                          },
                        });
                      }}
                    >
                      +
                    </span>
                    <span className={classes.quantity}>{val.quantity}</span>
                    <span
                      className={classes.minus}
                      onClick={() => {
                        dispatch({
                          type: "DEC",
                          payload: {
                            id: val.id,
                            discount: val.discount,
                            quantity: val.quantity,
                            price: val.price,
                          },
                        });
                      }}
                    >
                      -
                    </span>
                  </div>
                </span>
                <span className={classes.space}>
                  <div></div>
                </span>
                <span>
                  <div
                    className={classes.delete}
                    onClick={() => {
                      dispatch({
                        type: "DELETE_CART",
                        payload: {
                          id: val.id,
                          discount: val.discount,
                        },
                      });
                    }}
                  >
                    X
                  </div>
                  <div>${val.price}</div>
                </span>
              </div>
              <div>${Math.round(val.discount * val.quantity)}</div>
              <Divider />
            </div>
          ))}
        </div>
        <div>{netQuantity}</div>
        <div>
          <strong>
            Total price to be paid : <color> ${netPrice}</color>
          </strong>
        </div>
      </Drawer>
    </div>
  );
}
