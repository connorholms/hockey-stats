import { TeamResponse } from "../features/teams/team-types";
import { isActiveTeam } from "../types/active-teams";

export async function getActiveTeams() {
  const response = await fetch("api/active-teams");
  const json = await response.json()
  const allTeams: TeamResponse[] = json.data
  const activeTeams = allTeams.filter(teamData => { 
    return isActiveTeam(teamData.fullName)
  })
  return activeTeams
}

getActiveTeams();
