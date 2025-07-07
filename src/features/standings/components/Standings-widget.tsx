import { TeamStandings } from "../../../types/standings/standings-types";
import { columns } from "../util/standings-columns";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export default function StandingsWidget({ standingsData }) {
  const table = useReactTable<TeamStandings>({
    columns,
    data: standingsData ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

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
