import "./Standings-sidebar.css";
import { getStandings } from "../../api/standings";
import { columns } from "../../types/standings/standings-columns";
import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TeamStandings } from "../../types/standings/standings-types";

export default function Standings() {
  const { isLoading: isLoadingStandings, data: standings } = useQuery<
    TeamStandings[]
  >({
    queryKey: ["standings"],
    queryFn: () => getStandings(),
    // UX felt ok so not caching for now,
    // might try to add more logic at some point to cache during the day/not game time
    //staleTime: 3600000
  });

  const table = useReactTable<TeamStandings>({
    columns,
    data: standings ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoadingStandings) {
    return <h1>Loading the current NHL Standings ...</h1>;
  }
  if (!standings) {
    return <h1>Error getting standings</h1>;
  }

  return (
    <div className="standings-container">
      <table className="standings-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} align={cell.column.columnDef?.meta?.align}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
