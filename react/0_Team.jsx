import React from "react";
import PlayerComponent from "./1_Player";

const Team = () => {
  const teamData = {
    teamName: "Lakers",
    coach: "Coach Johnson",
    location: "Los Angeles",
  };

  return (
    <div>
      <h2>Team Component</h2>
      <PlayerComponent teamData={teamData} />
    </div>
  );
};

export default Team;
