export async function getRoster(team: string, season: string) { 
    const response = await fetch(`/api/roster/${team}/${season}`)
    const json = await response.json()
    return json

}