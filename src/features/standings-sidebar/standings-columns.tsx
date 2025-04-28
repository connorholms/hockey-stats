import { JSX } from "react";
import {  TeamStandings, StandingsTeamName } from "../../types/standings/standings-types";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

type TeamNameRow = { 
    logoUrl: string, 
    teamName: StandingsTeamName
}

const columnHelper = createColumnHelper<TeamStandings>()

export const columns: ColumnDef<TeamStandings>[] = [
    {
        accessorFn: (row): TeamNameRow => { 
            return { 
                logoUrl: row.teamLogo, 
                teamName: row.teamName
            }
        },
        header: "Team", 
        cell: (cell) => {
            const teamValues: any = cell.getValue()
            return (
                <div className="standings-team-name"><img src={teamValues.logoUrl} alt="team logo"/> 
                    <span className="standings-team-name-text">{teamValues.teamName.default}</span>
                </div>
            )
        }
    },

    columnHelper.accessor('gamesPlayed', { 
        header: "GP", 
        cell: data => data.renderValue(),
        meta: { 
            align: 'center'
        }
    }),
    columnHelper.accessor('wins', { 
        header: "W", 
        cell: data => data.renderValue(),
        meta: { 
            align: 'center'
        }
    }),
    columnHelper.accessor('losses', { 
        header: "L", 
        cell: data => data.renderValue(),
        meta: { 
            align: 'center'
        }
    }),
    columnHelper.accessor('otLosses', { 
        header: "OT", 
        cell: data => data.renderValue(),
        meta: { 
            align: 'center'
        }
    }),
    columnHelper.accessor('points', { 
        header: "PTS", 
        cell: data => data.renderValue(),
        meta: { 
            align: 'center'
        }
    }),
] 