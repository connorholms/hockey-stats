export type TeamSortOptions = "league" | "conference" | "division";

export interface ConferenceTeams {
  easternConference: Team[];
  westernConference: Team[];
}

export interface DivisionTeams {
  atlanticDivision: Team[];
  centralDivision: Team[];
  metropolitanDivision: Team[];
  pacificDivision: Team[];
}

export type Team = {
  id: number;
  franchiseId: number;
  fullName: string;
  leagueId: number;
  rawTricode: string;
  triCode: string;
};
