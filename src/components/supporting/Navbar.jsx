import React, { useRef, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Drawer } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import CartInfo from "./CartInfo";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "10vh",
    width: "100%",
    backgroundColor: "grey",
  },
  homebtn: {
    margin: "0% 18%",
  },
  menbtn: {
    marginLeft: "3vh",
  },
  storebtn: {
    marginRight: "3vh",
    flexGrow: "1",
  },
  cartbtn: {
    alignContent: "flex-end",
    marginRight: "1vh",
    flexGrow: "1",
  },
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
  drawerCloseIcon: {
    display: "flex",
    justifyContent: "flex-end",
  },
  Drawer: {
    flexShrink: 0,
    alignContent: "center",
  },
  drawerPaper: {
    [theme.breakpoints.down("sm")]: {
      width: "75%",
      maxWidth: "75%",
      minWidth: "75%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "35%",
      maxWidth: "35%",
      minWidth: "35%",
    },
    display: "flex",
    flexWrap: "wrap",
    overflow: "wrap",
    width: "35%",
  },
  drawerHover: {
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      backgroundColor: "lightgreen",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { netQuantity } = useSelector((state) => state.CartReducer);

  const [address, setAddress] = useState(null);
  const { pathname } = useLocation();
  const [location, setLocation] = useState(pathname);

  const menRef = useRef(null);
  const womenRef = useRef(null);
  const allbirdsRef = useRef(null);
  const storeRef = useRef(null);
  const userRef = useRef(null);
  const materialsRef = useRef(null);
  const prevRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [cartOn, setCartOn] = useState(false);

  useEffect(() => {
    prevRef.current = allbirdsRef.current;
  }, []);

  useEffect(() => {
    setAddress(location);
    setLocation(pathname);
  }, [pathname]);

  function men() {
    prevRef.current.style.backgroundColor = "inherit";
    history.push("/Men");
    menRef.current.style.backgroundColor = "yellow";
    prevRef.current = menRef.current;
  }

  function women() {
    prevRef.current.style.backgroundColor = "inherit";
    history.push("/Women");
    womenRef.current.style.backgroundColor = "yellow";
    prevRef.current = womenRef.current;
  }

  function allbirds() {
    prevRef.current.style.backgroundColor = "inherit";
    history.push("/");
    allbirdsRef.current.style.backgroundColor = "yellow";
    prevRef.current = allbirdsRef.current;
  }

  function ourmaterials() {
    prevRef.current.style.backgroundColor = "inherit";
    history.push("/Ourmaterials");
    materialsRef.current.style.backgroundColor = "yellow";
    prevRef.current = materialsRef.current;
  }

  function contact() {
    prevRef.current.style.backgroundColor = "inherit";
    history.push("/Contact");
    storeRef.current.style.backgroundColor = "yellow";
    prevRef.current = storeRef.current;
  }
  function users() {
    prevRef.current.style.backgroundColor = "inherit";
    history.push("/User");
    userRef.current.style.backgroundColor = "yellow";
    prevRef.current = userRef.current;
  }

  function handleMenuClick(e) {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  if (isWidthUp("md", props.width)) {
    return (
      <>
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.main}
        >
          <Grid item xs={1} sm={1} md={1} lg={1} style={{ marginLeft: "3vh" }}>
            <Button ref={menRef} onClick={men}>
              Men
            </Button>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Button ref={womenRef} onClick={women}>
              Women
            </Button>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={1} className={classes.homebtn}>
            <Button ref={allbirdsRef} onClick={allbirds}>
              <code> allbirds </code>
            </Button>
          </Grid>
          <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5}>
            <Button ref={materialsRef} onClick={ourmaterials}>
              Our Materials
            </Button>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Button ref={storeRef} onClick={contact}>
              Contact
            </Button>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Button ref={userRef} onClick={users}>
              <AccountCircleIcon />
            </Button>
          </Grid>

          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            lg={1}
            style={{ justifySelf: "flex-end" }}
          >
            <div>
              <IconButton aria-label="cart">
                <Badge badgeContent={netQuantity} color="secondary">
                  <ShoppingCartIcon
                    onClick={() => {
                      setCartOn(true);
                    }}
                  />
                  {cartOn ? <CartInfo setCartOn={setCartOn} /> : null}
                </Badge>
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ marginLeft: "15px", width: "35%" }}>
          <MenuIcon onClick={handleMenuClick} style={{ cursor: "pointer" }} />
          <CssBaseline />
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            className={classes.Drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerCloseIcon}>
              <IconButton onClick={handleClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <MenuItem
              className={classes.drawerHover}
              onClick={() => {
                history.push("/Men");
              }}
            >
              Men
            </MenuItem>
            <Divider />
            <MenuItem
              className={classes.drawerHover}
              onClick={() => {
                history.push("/Women");
              }}
            >
              Women
            </MenuItem>
            <Divider />
            <MenuItem
              className={classes.drawerHover}
              onClick={() => {
                history.push("/Ourmaterials");
              }}
            >
              Ourmaterials
            </MenuItem>
            <Divider />
            <MenuItem
              className={classes.drawerHover}
              onClick={() => {
                history.push("/Contact");
              }}
            >
              Contact
            </MenuItem>
            <Divider />
            <MenuItem
              className={classes.drawerHover}
              onClick={() => {
                history.push("/User");
              }}
            >
              Users
            </MenuItem>
            <Divider />
          </Drawer>
        </span>
        <span>
          <Button
            ref={allbirdsRef}
            onClick={() => {
              prevRef.current.style.backgroundColor = "inherit";
              history.push("/");
              allbirdsRef.current.style.backgroundColor = "yellow";
              prevRef.current = allbirdsRef.current;
            }}
          >
            <code> allbirds </code>
          </Button>
        </span>

        <span style={{ marginRight: "19px" }}>
          <IconButton aria-label="cart" className={classes.badge}>
            <Badge badgeContent={netQuantity} color="secondary">
              <ShoppingCartIcon
                onClick={() => {
                  setCartOn(true);
                }}
              />
              {cartOn ? <CartInfo setCartOn={setCartOn} /> : null}
            </Badge>
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default withWidth()(Navbar);
