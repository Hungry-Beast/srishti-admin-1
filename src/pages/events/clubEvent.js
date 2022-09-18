import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styled from "styled-components";
import { prodUrl } from "../../config";
import { user } from "../../localStore";

const ChooseFile = styled.input`
  margin-bottom: 5px;
`;
const EventDesc = styled(TextField)`
  margin-bottom: 5px !important;
`;

const ClubEvent = () => {
  const [value, setValue] = useState("");
  const [Time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.authToken);

    var formdata = new FormData();
    formdata.append("name", e.target.name.value);
    formdata.append("date", e.target.date.value);
    formdata.append("time", e.target.time.value);
    formdata.append("clubId", "6322e56fb3ac64c6f9b87b6e");
    formdata.append("clubName", e.target.clubname.value);
    formdata.append("desc", e.target.desc.value);
    formdata.append("venue", "kaali pahadi");
    formdata.append("file", e.target.pic.files[0]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(prodUrl + "/events", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          sx={{ fontFamily: "Roboto" }}
        >
          Club Events
        </Typography>

        <Card sx={{ maxWidth: "450px", margin: "0 auto", padding: "20px 5px" }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}></Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ margin: "5px auto" }}
                  name="name"
                  label="Name"
                  placeholder="Enter Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ margin: "5px auto" }}
                  name="clubname"
                  label="Club Name"
                  placeholder="Enter your Club Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <DatePicker
                  label="Pick Date"
                  placeholder="DD/MM/YYYY"
                  name="date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ marginBottom: "5px" }}
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TimePicker
                  label="Time"
                  name="time"
                  value={Time}
                  onChange={(newValue) => {
                    setTime(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ marginBottom: "5px" }}
                      required
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ margin: "5px auto" }}
                  name="venue"
                  label="Venue"
                  placeholder="Enter the venue"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <EventDesc
                  multiline
                  rows={5}
                  name="desc"
                  label="Desc ..."
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <ChooseFile name="pic" type="file" accept="image/*" />
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
    </LocalizationProvider>
  );
};

export default ClubEvent;
