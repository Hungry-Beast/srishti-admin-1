import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Autocomplete,
  Switch,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styled from "styled-components";
import { prodUrl } from "../../config";
import { user } from "../../localStore";

const ChooseFile = styled.input`
  margin-bottom: 10px;
`;
const EventDesc = styled(TextField)`
  margin-bottom: 10px !important;
`;

const ClubSelect = styled(Autocomplete)`
  width: 100% !important;
`;

const CLUB_NAMES = [
  {
    key: 1,
    name: "option 1",
  },
  {
    key: 2,
    name: "option 2",
  },
  {
    key: 3,
    name: "option 3",
  },
];

const ClubEvent = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [club, setClub] = useState(null);

  // const[name, value, ]

  // console.log(club);

  // const [ClubData, setClubData] = useState([])

  //   useEffect(() => {
  //     fetch(prodUrl+" /clubs")
  //       .then((data) => data.json())
  //       .then((data) => setClubData(data))

  //   }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.authToken);

    var formdata = new FormData();
    formdata.append("name", e.target.name.value);
    formdata.append("date", e.target.name.value);
    formdata.append("time", "12:00");
    formdata.append("clubId", "6322e56fb3ac64c6f9b87b6e");
    formdata.append("clubName", "kaddos");
    formdata.append("desc", e.target.desc.value);
    // formdata.append("venue", "kaali pahadi");
    formdata.append("file", e.target.pic.files[0]);

    // console.log(club)

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
                  sx={{ margin: "10px auto" }}
                  name="name"
                  label="Name"
                  placeholder="Enter Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <ClubSelect
                  disablePortal
                  options={CLUB_NAMES}
                  sx={{ width: 300, marginBottom: "10px" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Club Name"
                      name="clubname"
                      required
                    />
                  )}
                  getOptionLabel={(options) => options.name}
                  value={club}
                  onChange={(_event, newclub) => {
                    setClub(newclub);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <DatePicker
                  label="Pick Date"
                  placeholder="DD/MM/YYYY"
                  // name="date"
                  name={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ marginBottom: "10px" }}
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TimePicker
                  label="Time"
                  value={time}
                  onChange={(newValue) => {
                    setTime(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ marginBottom: "10px" }}
                      required
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ margin: "10px auto" }}
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
                <Switch
                  // checked={checked}
                  // onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
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
    </LocalizationProvider>
  );
};

export default ClubEvent;
