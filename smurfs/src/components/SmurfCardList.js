import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { getSmurfs, postSmurf } from '../actions/actions'
import styled from 'styled-components'

import SmurfCard from './SmurfCard'

function SmurfCardList({getSmurfs, postSmurf, smurfs}) {
    const [newSmurfName, setNewSmurfName] = useState('')
    const [newSmurfAge, setNewSmurfAge] = useState('')
    const [newSmurfHeight, setNewSmurfHeight] = useState('')

    useEffect(() => {
        getSmurfs()
      }, [getSmurfs])

    const makeNewSmurf = (e) => {
        e.preventDefault()
        let newSmurf = {
            name: newSmurfName,
            age: newSmurfAge,
            height: newSmurfHeight
        }
        postSmurf(newSmurf)
    }

    return (
      <div>
          {smurfs.map(smurf => {
              return <SmurfCard smurf={smurf} key={smurf.id}/>
          })}
          <br/>
          New Smurf Name: <input onChange={(e) => {setNewSmurfName(e.target.value)}} value={newSmurfName}/>
          <br/>
          New Smurf Age: <input onChange={(e) => {setNewSmurfAge(e.target.value)}} value={newSmurfAge}/>
          <br/>
          New Smurf Height: <input onChange={(e) => {setNewSmurfHeight(e.target.value)}} value={newSmurfHeight}/>
          <br/>
          <AddSmurfButton onClick={makeNewSmurf}>Add Smurf</AddSmurfButton>
      </div>
    );
  }

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {getSmurfs, postSmurf})(SmurfCardList)

  // styled components

  const AddSmurfButton = styled.button`
    margin: 10px;
  `