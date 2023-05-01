import React from "react";
import {
  TableBody,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
} from "@fluentui/react-components";

import { PlayerSkills } from "./PlayerSkills";
import { PlayerNotFound } from "./PlayerNotFound";
import { columns } from "~/utils/tableHeader";

type PlayerListProps = {
  player: any;
};

export const PlayerList: React.FC<PlayerListProps> = ({ player }) => {
  const filterPlayerSkills = () => {
    return Object.entries(player[0].skills).filter((skill: any[], _) => {
      if (skill[1]["rank"] != "-1") return skill;
    });
  };

  if (player.length > 0) {
    if (player[0].skills && [player[0].skills].length > 0) {
      return (
        <Table size="medium" style={{ marginTop: "30px" }}>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.columnKey}>
                  {column.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <PlayerSkills skills={filterPlayerSkills()} />
          </TableBody>
        </Table>
      );
    } else {
      return <PlayerNotFound />;
    }
  }
  return null;
};
