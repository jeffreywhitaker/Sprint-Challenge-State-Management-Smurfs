import React from "react";

import SmurfCardList from './SmurfCardList'
import "./App.css";


function App() {

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>List of Smurfs:</div>
      <SmurfCardList />
    </div>
  );
}

export default App
