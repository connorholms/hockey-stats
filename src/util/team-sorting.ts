import {
  DivisionTeamsStandings,
  ConferenceTeamsStandings,
  TeamStandings,
} from "../types/standings/standings-types";

export function sortTeamsByDivision(
  teams: TeamStandings[],
): DivisionTeamsStandings {
  const teamsByDivision = {
    atlantic: [],
    central: [],
    metropolitan: [],
    pacific: [],
  };

  teams.forEach((team) => {
    teamsByDivision[team.divisionName.toLowerCase()].push(team);
  });

  return teamsByDivision;
}

export function sortTeamsByConference(
  teams: TeamStandings[],
): ConferenceTeamsStandings {
  const teamsByConference = {
    eastern: [],
    western: [],
  };

  teams.forEach((team) => {
    teamsByConference[team.conferenceName.toLowerCase()].push(team);
  });

  return teamsByConference;
}
