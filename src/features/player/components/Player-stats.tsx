import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { PlayerStatTotals } from "../types/player-types";

const columns = [];

export default function PlayerStats({ playerStatTotals }) {
  const table = useReactTable<PlayerStatTotals>({
    data: playerStatTotals,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return <p>Player Stats Coming Soon!</p>;
}
