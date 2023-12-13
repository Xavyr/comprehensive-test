import React from "react";

const Player = (props) => {
  const stats = [{ pointAvg: 20 }, { assistAvg: 5 }, { reboundAvg: 5 }];
  return (
    <div>
      <h3>Player Component</h3>
      <p>{`Team: ${props.teamName}`}</p>
      <p>{`Coach: ${props.coach}`}</p>
      <p>{`Location: ${props.location}`}</p>
      {/* {stats} */}
    </div>
  );
};

export default Player;
