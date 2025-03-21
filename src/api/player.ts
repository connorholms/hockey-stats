export async function getPlayerInfo(playerId: string){ 
    const response = await fetch(`/api/player/${playerId}`);
    const json = await response.json()
    return json
}