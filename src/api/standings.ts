import { TeamStandings } from "../features/standings-types"

export async function getStandings() { 
    const response = await fetch("api/standings")
    const data = await response.json()
    const standings: TeamStandings[] = data.standings
    return standings
}