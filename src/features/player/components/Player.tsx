import { useQuery } from "@tanstack/react-query";
import { getPlayerInfo } from "../../../api/player";
import { Route } from "../../../routes/players/$playerId";
import PlayerHeader from "./Player-bio";
import PlayerStats from "./Player-stats";
import { PlayerStatTotals } from "../types/player-types";

export default function Player() {
  const { playerId }: { playerId: string } = Route.useLoaderData();

  const { isLoading: isLoadingPlayer, data: playerData } = useQuery<any>({
    queryKey: ["playerInfo", playerId],
    queryFn: () => getPlayerInfo(playerId),
  });

  const playerStatTotals: PlayerStatTotals = {
    careerTotals: playerData.careerTotals,
    seasonTotals: playerData.seasonTotals,
  };

  if (isLoadingPlayer) {
    return <div>Loading Player Data...</div>;
  }

  return (
    <>
      <PlayerHeader playerInfo={playerData} />
      <PlayerStats playerStatTotals={playerStatTotals} />
    </>
  );
}
