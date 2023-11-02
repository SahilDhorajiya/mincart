import { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUserName] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [error, setError] = useState("");
  const router = useRouter();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    margin: "auto",
  };

  const formStyle = {
    width: "100%",
    marginTop: "20px",
  };

  const textFieldStyle = {
    marginBottom: "20px",
  };

  const errorStyle = {
    color: "red",
    marginTop: "10px",
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (response.ok) {
        const data = await response.json(); // Parse the response body
        localStorage.setItem("token", data.token);
        router.push("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };

  return (
    <div style={containerStyle}>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h4">Login</Typography>
        <form style={formStyle} onSubmit={handleLogin}>
          <TextField
            type="text"
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            style={textFieldStyle}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={textFieldStyle}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        {error && (
          <Typography variant="subtitle1" style={errorStyle}>
            {error}
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default Login;
