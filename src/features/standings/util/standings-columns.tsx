import { TeamStandings } from "../../../types/standings/standings-types";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<TeamStandings>();

export const columns: ColumnDef<TeamStandings>[] = [
  {
    accessorFn: (row): string => row.teamName.default,
    header: "Team",
    cell: (cell) => {
      const teamValues: any = cell.row.original;
      return (
        <div className="standings-team-name">
          <img src={teamValues.teamLogo} alt="team logo" />
          <span className="standings-team-name-text">
            {teamValues.teamName.default}
          </span>
        </div>
      );
    },
  },

  columnHelper.accessor("gamesPlayed", {
    header: "GP",
    cell: (data) => data.renderValue(),
    meta: {
      align: "center",
    },
  }),
  columnHelper.accessor("wins", {
    header: "W",
    cell: (data) => data.renderValue(),
    meta: {
      align: "center",
    },
  }),
  columnHelper.accessor("losses", {
    header: "L",
    cell: (data) => data.renderValue(),
    meta: {
      align: "center",
    },
  }),
  columnHelper.accessor("otLosses", {
    header: "OT",
    cell: (data) => data.renderValue(),
    meta: {
      align: "center",
    },
  }),
  columnHelper.accessor("points", {
    header: "PTS",
    cell: (data) => data.renderValue(),
    meta: {
      align: "center",
    },
  }),
];
