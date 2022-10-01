import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { prodUrl } from "../../config";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleSubmit = (e) =>{

    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    

    var raw = JSON.stringify({
      regNo: e.target.regNo.value,
      password: e.target.pass.value,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(prodUrl+"/api/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('user',JSON.stringify(result))
        console.log(result)
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        sx={{ fontFamily: "Roboto" }}
      >
        Login Page
      </Typography>
      <Card sx={{ maxWidth: "450px", margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}></Grid>

            <Grid item xs={12}>
              <TextField
                sx={{ margin: "5px auto" }}
                name="regNo"
                label="Registration no"
                placeholder="Enter your registration no"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="pass"
                sx={{ marginBottom: "5px" }}
                label="Password"
                variant="outlined"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                // onChange={someChangeHandler}
                // InputProps={{
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                // }}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
