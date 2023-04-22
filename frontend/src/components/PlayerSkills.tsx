import React from "react";

type PlayerSkillsProps = {
  player: any;
  error: boolean;
  styles: any;
};

export const PlayerSkills: React.FC<PlayerSkillsProps> = ({
  player,
  error,
  styles,
}) => {
  if (player.length > 0 && !error) {
    return player.map(
      (data: { [key: string]: any }, index: number | string) => {
        return Object.entries(data["skills"]).map((skills, _) => {
          const skillName =
            skills[0].charAt(0).toUpperCase() + skills[0].slice(1);
          return (
            <div className={styles.scrollMiddle} key={index}>
              {skillName != "Overall" ? (
                <img
                  src={`https://oldschool.runescape.wiki/images/${skillName}_icon.png`}
                  alt={skillName}
                />
              ) : (
                <p>Overall</p>
              )}
            </div>
          );
        });
      },
    );
  } else if (error && player.length == 0) {
    return <p>Player not found!</p>;
  }
  return null;
};
