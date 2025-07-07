import { isActiveTeam } from "../types/teams/active-teams";
import { Team, TeamSortOptions } from "../types/teams/teams-list";

export async function getActiveTeams(sortBy: TeamSortOptions = "league") {
  const response = await fetch("api/active-teams");
  const json = await response.json();
  const allTeams: Team[] = json.data;
  const activeTeams = allTeams.filter((teamData) => {
    return isActiveTeam(teamData.fullName);
  });
  return sortTeamsAlphabetical(activeTeams);
}

function sortTeamsAlphabetical(teams: Team[]) {
  const sortedActiveTeams = teams.sort((a, b) => {
    const teamA = a["fullName"];
    const teamB = b["fullName"];
    if (teamA < teamB) {
      return -1;
    }
    if (teamA > teamB) {
      return 1;
    }
    return 0;
  });
  return sortedActiveTeams;
}
