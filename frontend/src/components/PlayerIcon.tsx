import React from "react";

type PlayerIconProps = {
  skillName: string;
};

export const PlayerIcon: React.FC<PlayerIconProps> = ({ skillName }) => {
  {
    switch (skillName) {
      case "Overall": {
        return <p>Overall</p>;
      }
      default: {
        return (
          <img
            src={`https://oldschool.runescape.wiki/images/${skillName}_icon.png`}
            alt={skillName}
          />
        );
      }
    }
  }
};
