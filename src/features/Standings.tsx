import './Standings.css'
import { getStandings } from "../api/standings";
import { columns } from "./standings-columns";
import { useQuery } from "@tanstack/react-query";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TeamStandings } from "./standings-types";




export default function Standings() { 
    const { isLoading: isLoadingStandings, data: standings }= useQuery<TeamStandings[]>({
        queryKey: ['standings'], 
        queryFn: () => getStandings(), 
        //staleTime: 3600000 // one hour in milliseconds
    })

    const table = useReactTable<TeamStandings>({ 
        columns, 
        data: standings!, // want to look into a better way to do this at some point 
        getCoreRowModel: getCoreRowModel()
    })

    return ( 
        !isLoadingStandings ? (
        <div className="standings-container">
            <table className="standings-table">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => {
                        return ( 
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} colSpan={header.colSpan}>{flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        )
                    })}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => 
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => 
                                <td key={cell.id} align={cell.column.columnDef?.meta?.align}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

        ) : (
            <div>
                <h1>Loading the current NHL Standings ...</h1>
            </div>
        )
    )
}