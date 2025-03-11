import {  TeamStandings } from "./standings-types";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<TeamStandings>()

export const columns: ColumnDef<TeamStandings>[] = [
    columnHelper.accessor('teamName', { 
        header: "Team", 
        cell: data => { 
            const teamObject = data.getValue()
            return teamObject?.default
        }
    }), 
    columnHelper.accessor('gamesPlayed', { 
        header: "Games Played", 
        cell: data => data.renderValue()
    }),
    columnHelper.accessor('wins', { 
        header: "W", 
        cell: data => data.renderValue()
    }),
    columnHelper.accessor('losses', { 
        header: "L", 
        cell: data => data.renderValue()
    }),
    columnHelper.accessor('otLosses', { 
        header: "OT", 
        cell: data => data.renderValue()
    }),
    columnHelper.accessor('points', { 
        header: "PTS", 
        cell: data => data.renderValue()
    }),
] 