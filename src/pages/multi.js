import React from 'react';
import Timer from "../components/timer";
import Grid from "../components/grid";
import Attempt from '../components/attempt';

const Multi = () => {
  return <div>
    <h2>Multiplayer</h2>
    <Timer />
    <div id='ourgrid'>
      <Grid />
      <Attempt />
    </div>
    <div id='oponentgrid'>
      <Grid />
    </div>
  </div>;
};

export default Multi;
