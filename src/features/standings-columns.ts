import { StandingsColumn, TeamStandings } from "./standings-types";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<TeamStandings>()

export const columns: ColumnDef<TeamStandings>[] = [
    columnHelper.accessor('teamName', { 
        header: "Team", 
        cell: data => data.renderValue()
    })
] 