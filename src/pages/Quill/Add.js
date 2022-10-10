import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { prodUrl } from "../../config";
import "./App.css"
import { FormControl, Grid, InputLabel, MenuItem } from "@mui/material";

// function Add(props) {

//     const ClubSelect = styled(Select)`
//   width: 100%;
//   /* margin: 1rem 0; */
// `;
//     const ondescription = (value) => {
//         setuserInfo({
//             ...userInfo,
//             description: value
//         });
//     }

//     return (
//         <>
//             <div className="App">
//                 <div className="container">
//                     <div className="row">
//                         <form onSubmit={props.handleSubmit} className="update__forms">
//                             <h3 className="myaccount-content"> Add  </h3>
//                             <div className="form-row">
//                                 <div className="form-group col-md-12">
//                                     <label className="font-weight-bold"> Name <span className="required"> * </span> </label>
//                                     <input type="text" name="name" value={props.title} className="form-control" placeholder="Event Name" required />
//                                 </div>
//                                 <Grid item xs={12}>
//                                     <FormControl
//                                         fullWidth
//                                         sx={{ minWidth: "100%", margin: "1rem 0" }}
//                                     >
//                                         <InputLabel id="demo-simple-select-standard-label">
//                                             Club
//                                         </InputLabel>
//                                         <ClubSelect
//                                             labelId="demo-simple-select-standard-label"
//                                             id="demo-simple-select-standard"
//                                             // label="Club"
//                                             label="Club"
//                                             value={club}
//                                             onChange={(e) => {
//                                                 setClub(e.target.value);
//                                             }}
//                                         >
//                                             {clubData.length !== 0 &&
//                                                 clubData.map((club) => (
//                                                     <MenuItem value={club.value}>{club.label}</MenuItem>
//                                                 ))}
//                                         </ClubSelect>
//                                     </FormControl>
//                                 </Grid>
//                                 <div className="form-group col-md-12">
//                                     <label className="font-weight-bold"> Date <span className="required"> * </span> </label>
//                                     <input type="text" name="title" value={userInfo.title} onChange={onChangeValue} className="form-control" placeholder="Title" required />
//                                 </div>
//                                 <div className="form-group col-md-12">
//                                     <label className="font-weight-bold"> Time <span className="required"> * </span> </label>
//                                     <input type="text" name="title" value={userInfo.title} onChange={onChangeValue} className="form-control" placeholder="Title" required />
//                                 </div>
//                                 <div className="form-group col-md-12">
//                                     <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
//                                     <input type="text" name="title" value={userInfo.title} onChange={onChangeValue} className="form-control" placeholder="Title" required />
//                                 </div>
//                                 <div className="form-group col-md-12">
//                                     <Grid item xs={12}>
//                                         <Switch
//                                             checked={checked}
//                                             onChange={handleChange}
//                                             inputProps={{ "aria-label": "controlled" }}
//                                         />
//                                     </Grid>
//                                 </div>
//                                 <div className="clearfix"></div>
//                                 <div className="form-group col-md-12 editor">
//                                     <label className="font-weight-bold"> Description <span className="required"> * </span> </label>
//                                     <EditorToolbar toolbarId={'t1'} />
//                                     <ReactQuill
//                                         theme="snow"
//                                         value={userInfo.description}
//                                         onChange={ondescription}
//                                         placeholder={"Write something awesome..."}
//                                         modules={modules('t1')}
//                                         formats={formats}
//                                     />
//                                 </div>
//                                 <br />
//                                 {isError !== null && <div className="errors"> {isError} </div>}
//                                 <div className="form-group col-sm-12 text-right">
//                                     <button type="submit" className="btn btn__theme"> Submit  </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Add
