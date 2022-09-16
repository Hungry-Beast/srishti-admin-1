import React from "react";
import styled from "styled-components";
import { Paper, TextField, Button } from "@mui/material";

const ClubForm = styled.form`
    display: flex;
    justify-content: center;
    margin: 10em 5em;
`;

const ClubPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: red;

    
    padding: 2em 3em;
    /* border: 2px solid red; */
`;

const Heading = styled.h1`
    text-align: center;
    margin-bottom: 10%;
`;


const ClubInput = styled(TextField)`
    margin: 20px;
    
`;

const ChoosePoster = styled.input`
    margin: 25px 0;
    /* font-family: sans-serif; */
    /* padding: 10px; */
`;

const ClubDescription = styled.textarea`
    margin-bottom: 25px;
    border-radius: 5px;
    padding: 10px;
`;

const ClubButton = styled(Button)`
    /* margin: 20px; */

    
`;

const register = () => {
  return (
    <ClubForm>
      <ClubPaper>
        <Heading>Club Registration</Heading>
        <ClubInput name="clubname" label="Club Name" variant="filled" required />
        <ChoosePoster name="poster" type="file" accept="image/png, image/gif, image/jpeg" />
        <ClubDescription name="desc" rows="7" cols="50" placeholder="Desc ..." />
        <ClubButton variant="contained">Submit</ClubButton>
      </ClubPaper>
    </ClubForm>
  );
};

export default register;
