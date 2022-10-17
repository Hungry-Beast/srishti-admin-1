import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { prodUrl } from "../../config";
import { React, useEffect, useState } from "react";
import { Backdrop, Button, CardActions, CircularProgress } from "@mui/material";
import { Add, EditOutlined } from "@mui/icons-material";
import parse from 'html-react-parser';



const Single1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [eventList, setEventList] = useState([]);

  let url = prodUrl + location.pathname;
  var myHeaders = new Headers();
  const { authToken } = JSON.parse(localStorage.getItem("user"));
  myHeaders.append("Authorization", `Bearer ${authToken}`);

  // var formdata = new FormData();
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEventList(result.reverse());
        setLoading(false)
      })
      .catch((error) => console.log("error", error));
    console.log(eventList)

  }, [url]);

  // const editRequest = (id, formdata) => {

  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: 'follow'
  //   }
  //   fetch(`${prodUrl}/events/edit/${id}`, requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result)
  //       const newEvent = eventList.forEach(event => {
  //         if (event._id === id) {
  //           event.name = result.name;
  //           event.date = result.date;
  //           event.time = result.time;
  //           event.club = result.clubId;
  //           event.clubName = result.clubName;
  //           event.desc = result.desc;
  //           event.date = result.date;
  //           event.time = result.time;
  //           event.duration = result.duration;
  //           event.venue = result.venue;
  //           event.isOpen = result.isOpen;
  //           event.isPaid = result.isPaid;
  //           event.priceO = result.priceO ? result.priceO : "";
  //           event.priceN = result.priceN ? result.priceN : "";
  //           event.isMainEvent = result.isMainEvent
  //           event.image = result.image
  //         }
  //         console.log(newEvent)
  //         // setEventList(newEvent)
  //       })
  //     })
  //     .catch(error => console.log('error', error));

  // }
  const [element, setElement] = useState([])
  let formdata = ''
  const editEvent = (ele) => {
    let newEle = []
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${prodUrl}/events/noAuth/${ele.club}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        newEle = result.filter(e => ele.id === e._id)
        newEle = newEle[0];
        navigate('/edit', {
          state: [newEle, eventList]
          // formdata: JSON.stringify({ name, date, time, clubName, desc, })
        })

      })
      .catch(error => console.log('error', error));

    // editRequest(id, formdata)

  }
  const deleteEvent = (id) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`${prodUrl}/events/delete/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {

        const a = eventList.filter(e => e.id !== result.event._id)
        console.log(eventList.filter(e => e.id !== result.event._id), a);
        setEventList(a)
      })
      .catch(error => console.log('error', error));
  }


  return (
    <div className="single">
      <div className="side">
        <Sidebar />
      </div>
      <div className="right">
        <Navbar />
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "1px 0"
        }} className="divofevents">
          <Link style={{
            margin: "1rem auto !important"
          }} className="linkToCreateEvent" to="/clubEvent">
            <Button variant="contained" className="addEventButton">
              <Add />
              Add Event
            </Button>
          </Link>
        </div>
        <div className="main">
          {!loading ? (
            eventList.length ? (
              eventList.map((ele, i) => {
                return (

                  <div className="card" key={i} >
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '2em 3em' }}>
                      <h1 className="title">Information</h1>

                      <div className="item">
                        <img src={ele.image} alt="" className="itemImg" />
                        <div className="details">
                          <h1 className="itemTitle">{ele.name}</h1>
                          {/* <div className="detailItem">
                          <span className="itemKey">Description:</span>
                          <span className="itemValue" >{parse(ele.desc)}</span>
                        </div> */}
                          <div className="detailItem">
                            <span className="itemKey">Event Date:</span>
                            <span className="itemValue">{ele.date}</span>
                          </div>
                          <div className="detailItem">
                            <span className="itemKey">Event Time:</span>
                            <span className="itemValue">{ele.time}</span>
                          </div>
                          <div className="detailItem">
                            <span className="itemKey">Club Name:</span>
                            <span className="itemValue">{ele.clubName}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="head" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <CardActions>
                        <Button
                          onClick={() => deleteEvent(ele["_id"])}
                          sx={{ color: "#6439ff", borderColor: "#6439ff" }}
                          variant="outlined"
                        >
                          Delete
                        </Button>
                      </CardActions>
                      <CardActions>
                        <Button
                          onClick={() =>
                            navigate(`/registration/${ele["_id"]}`, {
                              state: ele,
                            })
                          }
                          sx={{ color: "#6439ff", borderColor: "#6439ff" }}
                          variant="outlined"
                        >
                          Participants
                        </Button>
                      </CardActions>
                      <CardActions>
                        <Button
                          onClick={() =>
                            navigate(`/`)
                          }
                          sx={{ color: "#6439ff", borderColor: "#6439ff" }}
                          variant="outlined"
                        >
                          Description
                        </Button>
                      </CardActions>
                      <CardActions>
                        <Button
                          onClick={() => editEvent(ele)}
                          sx={{ color: "#6439ff", borderColor: "#6439ff" }}
                          variant="outlined"
                        >
                          Edit
                        </Button>
                      </CardActions>
                    </div>
                  </div>

                )
              })
            ) : (
              <h1
                style={{ textAlign: "center", width: "100%", margin: "5rem" }}
              >
                No Events Added Yet
              </h1>
            )
          ) : (
            <Backdrop
              sx={{
                color: "#7451f8",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={loading}
            // onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </div>
      </div>
    </div >
  );
};

export default Single1;
