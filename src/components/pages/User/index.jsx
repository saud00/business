import React from "react";
import Signin from "./Signin";
import Register from "./Signup";

function Index() {
  const [newUser, setNewUser] = React.useState(true);

  return newUser ? (
    <Register setNewUser={setNewUser} />
  ) : (
    <Signin setNewUser={setNewUser} />
  );
}

export default Index;
