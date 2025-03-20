import { TeamResponse } from "../features/teams/team-types";
import { isActiveTeam } from "../types/active-teams";

export async function getActiveTeams() {
  const response = await fetch("api/active-teams");
  const json = await response.json()
  const allTeams: TeamResponse[] = json.data
  const activeTeams = allTeams.filter(teamData => { 
    return isActiveTeam(teamData.fullName)
  })


  const sortedActiveTeams = activeTeams.sort((a, b) => { 
    const teamA = a["fullName"]
    const teamB = b["fullName"]
    if (teamA < teamB) {
      return -1;
    }
    if (teamA > teamB) {
      return 1;
    }
    return 0;
  })
  return sortedActiveTeams
}

getActiveTeams();
