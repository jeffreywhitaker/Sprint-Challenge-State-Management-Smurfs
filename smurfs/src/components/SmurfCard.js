import React from "react";
import styled from 'styled-components'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions/actions'

import "./App.css";


function SmurfCard(props) {
    const handleDeleteSmurf = (e) => {
        e.preventDefault()
        props.deleteSmurf(props.smurf.id)
    }

  return (
    <SmurfCardDiv>
        <p>{props.smurf.name}</p>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
        <DeleteSmurfButton onClick={handleDeleteSmurf}>Delete</DeleteSmurfButton>
    </SmurfCardDiv>
  );
}

export default connect(null, {deleteSmurf})(SmurfCard)

// styled components

const SmurfCardDiv = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 20px auto;
    width: 200px;
`

const DeleteSmurfButton = styled.button`
    
`