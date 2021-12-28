import React from "react";
import { withFormik, Form, Field } from "formik";
import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    margin: "10vh auto",
    width: "30%",
  },
  paper: {
    display: "block",
    textAlign: "center",
    lineHeight: "4rem",
  },
  field: {
    width: "20vw",
    height: "40px",
    borderRadius: "100px",
    position: "relative",
  },
  placeholder: {
    position: "absolute",
    backgroundColor: "white",
    height: "20px",
    top: "05px",
    left: "20%",
    zIndex: "1",
    fontWeight: "bold",
  },
}));

const Login = ({
  values,
  errors,
  touched,
  isSubmitting,
  isValid,
  dirty,
  setNewUser,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={10} className={classes.root}>
      <Form className={classes.paper}>
        <div>
          <img
            style={{ marginTop: "20px" }}
            src="https://img.icons8.com/color/96/000000/fill-in-form.png"
            alt="form"
          />
          <Typography variant="h3" color="secondary">
            Sign In
          </Typography>
        </div>
        <div style={{ position: "relative" }}>
          <Typography className={classes.placeholder}>Name</Typography>
          <span>
            <Field
              className={classes.field}
              type="username"
              name="username"
              value={values.username}
              autofocus
            />
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <Typography className={classes.placeholder}>Email</Typography>
          <span>
            <Field
              className={classes.field}
              type="email"
              name="email"
              value={values.name}
            />
          </span>
        </div>
        <div style={{ padding: "0px" }}>
          <div>{touched.password && errors.password}</div>
          <div style={{ position: "relative" }}>
            <Typography className={classes.placeholder}>Password</Typography>
            <span>
              <Field
                className={classes.field}
                type="password"
                name="password"
                value={values.password}
              />
            </span>
          </div>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting || !isValid || !dirty}
          color="secondary"
        >
          Sign in
        </Button>

        <Button onClick={() => setNewUser(true)}>New user? Register</Button>
      </Form>
    </Paper>
  );
};

const FormikApp = withFormik({
  mapsPropsToValue({ username, email, password }) {
    return {
      username: username || " ",
      email: email || " ",
      password: password || " ",
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().required().min(8, "Weak Password"),
  }),
  handleSubmit(values, { setStatus, props, setSubmitting }) {
    //event.preventDefault();
    props.createUser({
      variables: values,
    });

    setTimeout(() => {
      setSubmitting(false);
      setStatus("sent");
      console.log("Thanks!");
    }, 1000);
  },
})(Login);

const Signin = (props) => {
  return <FormikApp setNewUser={props.setNewUser} />;
};

export default Signin;
