import {
  TableCell,
  TableCellLayout,
  TableRow,
} from "@fluentui/react-components";
import React from "react";
import { PlayerIcon } from "./PlayerIcon";
import { capitalize } from "~/utils/capitalize";

type PlayerSkillsProps = {
  skills: any;
};

export const PlayerSkills: React.FC<PlayerSkillsProps> = ({ skills }) => {
  return skills.map((skill: any, index: number) => (
    <TableRow key={index}>
      <TableCell>
        <TableCellLayout>
          <PlayerIcon skillName={capitalize(skill)} />
        </TableCellLayout>
      </TableCell>
      <TableCell>
        <TableCellLayout>{skill[1]["rank"]}</TableCellLayout>
      </TableCell>
      <TableCell>
        <TableCellLayout>{skill[1]["level"]}</TableCellLayout>
      </TableCell>
      <TableCell>
        <TableCellLayout>{skill[1]["xp"]}</TableCellLayout>
      </TableCell>
    </TableRow>
  ));
};
