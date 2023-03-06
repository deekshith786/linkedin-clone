import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { login } from "../features/userSlice";
import logo from "../images/login-hero.svg";
import "../login/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
        dispatch(login({
             email: userAuth.user.email,
             uid: userAuth.user.uid,
             displayName: userAuth.user.displayName,
             profileUrl: userAuth.user.photoURL,
        }))
    }).catch(error => alert(error ));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-2011.png"
            alt=""
            height={100}
            width={150}
          />
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography sx={{ padding: 2, fontWeight: "bold" }}>
            {" "}
            Join now
          </Typography>
          <Button
            variant="outlined"
            sx={{ borderRadius: "100px", fontWeight: "bold" }}
          >
            Sign in
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "80px", alignSelf: "flex-start", paddingTop:3 }}>
          <Typography
            sx={{
              fontWeight: 100,
              fontSize: "56px",
              color: "#8f5849",
              level: "h1",
              fontFamily:
                "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande', Helvetica, Arial, sans-serif",
            }}
          >
            Welcome to your professional community
          </Typography>


          

          <Box className="login" sx={{ placeItems: "start", paddingTop: 2 }}>
            <form>
              {/* <label>UserName</label> */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name (required if registering)"
                type="text"
                name=""
                id=""
              />
              <input
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder="Profile pic URL (optional)"
                type="text"
                name=""
                id=""
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                name=""
                id=""
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name=""
                id=""
              />
              <button type="submit" onClick={loginToApp}>
                Sign In
              </button>
            </form>

            <p>
              Not a member?{" "}
              <span className="login__register" onClick={register}>
                Register Now
              </span>
            </p>
          </Box>
        </Box>
        <img src={logo} alt="" width={600} height={600} />
      </Box>
    </Box>
  );
}

export default Login;
