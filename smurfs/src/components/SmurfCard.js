import React from "react";
import styled from 'styled-components'

import "./App.css";


function SmurfCard(props) {
  return (
    <SmurfCardDiv>
        <p>{props.smurf.name}</p>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
    </SmurfCardDiv>
  );
}

export default SmurfCard

// styled components

const SmurfCardDiv = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 20px auto;
    width: 200px;
`