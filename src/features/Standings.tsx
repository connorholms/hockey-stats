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

    let table
    if (standings) {
        table = useReactTable<TeamStandings>({ 
            columns, 
            data: standings,
            getCoreRowModel: getCoreRowModel()
        })
    }

    return ( 
        !isLoadingStandings ? (
        <div>
            <table>
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
                    
                </tbody>
            </table>
        </div>

        ) : (
            <div>
                <h1>Loading the current NHL Standings</h1>
            </div>
        )
    )
}