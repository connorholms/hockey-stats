import { PlayerResponse } from "../features/player/types/player-types";

export async function getPlayerInfo(playerId: string){ 
    const response = await fetch(`/api/player/${playerId}`);
    const json: PlayerResponse = await response.json()
    return json
}