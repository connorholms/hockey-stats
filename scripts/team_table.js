import { Pool } from "pg";

export const activeTeams = [
  "Montréal Canadiens",
  "Buffalo Sabres",
  "New York Islanders",
  "San Jose Sharks",
  "Columbus Blue Jackets",
  "Pittsburgh Penguins",
  "Florida Panthers",
  "Carolina Hurricanes",
  "Vegas Golden Knights",
  "Dallas Stars",
  "Winnipeg Jets",
  "Tampa Bay Lightning",
  "Utah Hockey Club",
  "Nashville Predators",
  "Philadelphia Flyers",
  "New Jersey Devils",
  "Ottawa Senators",
  "Colorado Avalanche",
  "Seattle Kraken",
  "Washington Capitals",
  "Anaheim Ducks",
  "Los Angeles Kings",
  "Vancouver Canucks",
  "Minnesota Wild",
  "Toronto Maple Leafs",
  "New York Rangers",
  "Edmonton Oilers",
  "Calgary Flames",
  "Boston Bruins",
  "St. Louis Blues",
  "Chicago Blackhawks",
  "Detroit Red Wings",
];

const successTeams = [];
const failedTeams = [];

function isActiveTeam(teamName) {
  return activeTeams.includes(teamName);
}

// add manually if needed or to process.env
const POSTGRES_USER = "";
const POSTGRES_PASSWORD = "";
const POSTGRES_DB = "";

const db = new Pool({
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: "localhost",
  database: POSTGRES_DB,
  port: 5432,
});

async function createTeamTable() {
  const client = await db.connect();

  const teamRes = await fetch("https://api.nhle.com/stats/rest/en/team");
  const team = await teamRes.json();
  const activeTeams = team.data.filter((team) => {
    return isActiveTeam(team.fullName);
  });

  const standingsRes = await fetch("https://api-web.nhle.com/v1/standings/now");
  const standings = await standingsRes.json();

  const activeTeamsWithLogos = activeTeams.map((team) => {
    const standingsInfo = standings.standings.find(
      (standingsTeam) => standingsTeam.teamAbbrev.default === team.triCode,
    );
    console.log("found: ", standingsInfo.teamName.default, team);

    return {
      ...team,
      teamLogo: standingsInfo.teamLogo,
      conference: standingsInfo.conferenceName,
      division: standingsInfo.divisionName,
    };
  });

  for (const team of activeTeamsWithLogos) {
    const values = [
      team.id,
      team.franchiseId,
      team.fullName,
      team.leagueId,
      team.rawTricode,
      team.triCode,
      team.teamLogo,
      team.conference,
      team.division,
    ];
    const queryText = `INSERT INTO teams (id, franchise_id, full_name, league_id, raw_tricode, tricode, team_logo, conference_name, division_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

    try {
      const res = await client.query(queryText, values);
      console.log(res);
      successTeams.push(team.tricode);
    } catch (e) {
      console.log(e);
      failedTeams.push(team);
    }
  }
  process.exit(0);
}

createTeamTable();
