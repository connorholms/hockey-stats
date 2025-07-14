import {
  DivisionTeamsStandings,
  ConferenceTeamsStandings,
  TeamStandings,
  WildcardTeamsStandings,
  StandingsSortOptions,
} from "../types/standings/standings-types";

export function sortTeams(
  sortType: StandingsSortOptions,
  teams: TeamStandings[],
) {
  if (sortType === "league") {
    return teams;
  }
  if (sortType === "conference") {
    return sortTeamsByConference(teams);
  }
  if (sortType === "division") {
    return sortTeamsByDivision(teams);
  }
  if (sortType === "wildcard") {
    return sortTeamsByWildcard(teams);
  }

  throw new Error("team-sorting error: sorting type is invalid");
}

function sortTeamsByDivision(teams: TeamStandings[]): DivisionTeamsStandings {
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

function sortTeamsByConference(
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

function sortTeamsByWildcard(teams: TeamStandings[]): WildcardTeamsStandings {
  const wildcardTeams = {
    atlantic: [],
    central: [],
    metropolitan: [],
    pacific: [],
    western: [],
    eastern: [],
  };

  teams.forEach((team) => {
    if (wildcardTeams[team.divisionName.toLowerCase()].length < 3) {
      wildcardTeams[team.divisionName.toLowerCase()].push(team);
    } else {
      wildcardTeams[team.conferenceName.toLowerCase()].push(team);
    }
  });

  return wildcardTeams;
}
