import React from 'react';
import Timer from "../components/timer";
import Grid from "../components/grid";
import Attempt from '../components/attempt';

const Multi = () => {
  return <div>
    <h2>Multiplayer</h2>
    <Timer />
    <div id='ourgrid'>
      <Grid userGrid={true} />
      <Attempt />
    </div>
    <div id='oponentgrid'>
      <Grid userGrid={false} />
    </div>
  </div>;
};

export default Multi;
