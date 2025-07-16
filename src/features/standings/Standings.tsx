import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getStandings } from "../../api/standings";
import {
  StandingsSortOptions,
  TeamStandings,
} from "../../types/standings/standings-types";
import StandingsTable from "./components/Standings-table";
import { buttonOptions } from "./types/standings";
import ToggleButton from "../../components/ui/Toggle-button";
import "./standings.css";
import { sortTeams } from "../../util/team-sorting";

export default function Standings() {
  const [displaySettings, setDisplaySettings] = useState<StandingsSortOptions>(
    buttonOptions[0].name,
  );
  const { isLoading: isLoadingStandings, data: standings } = useQuery<
    TeamStandings[]
  >({
    queryKey: ["standings"],
    queryFn: () => getStandings(),
    // UX felt ok so not caching for now,
    // might try to add more logic at some point to cache during the day/not game time
    //staleTime: 3600000
  });
  const sortedStandings = useMemo(() => {
    if (!standings) return [];
    return sortTeams(displaySettings, standings);
  }, [displaySettings, standings]);

  if (isLoadingStandings) {
    return <h1>Loading the current NHL Standings ...</h1>;
  }
  if (!standings) {
    return <h1>Error getting standings</h1>;
  }

  return (
    <div>
      <h1>Standings</h1>
      <ToggleButton
        buttonOptions={buttonOptions}
        setButtonState={setDisplaySettings}
      />

      <hr />

      {displaySettings === "division" && (
        <div>
          <h2>Central Division</h2>
          <StandingsTable standingsData={sortedStandings["central"]} />
          <h2>Pacific Division</h2>
          <StandingsTable standingsData={sortedStandings["pacific"]} />
          <h2>Atlantic Division</h2>
          <StandingsTable standingsData={sortedStandings["atlantic"]} />
          <h2>Metropolitan Division</h2>
          <StandingsTable standingsData={sortedStandings["metropolitan"]} />
        </div>
      )}
      {displaySettings === "conference" && (
        <div>
          <h2>Western Conference</h2>
          <StandingsTable standingsData={sortedStandings["western"]} />
          <h2>Eastern Conference</h2>
          <StandingsTable standingsData={sortedStandings["eastern"]} />
        </div>
      )}
      {displaySettings === "league" && (
        <div>
          <StandingsTable standingsData={standings} />
        </div>
      )}
      {displaySettings === "wildcard" && (
        <div>
          <h2>Central Division</h2>
          <StandingsTable standingsData={sortedStandings["central"]} />
          <h2>Pacific Division</h2>
          <StandingsTable standingsData={sortedStandings["pacific"]} />
          <h2>Wildcard West</h2>
          <StandingsTable standingsData={sortedStandings["western"]} />
          <h2>Atlantic Division</h2>
          <StandingsTable standingsData={sortedStandings["atlantic"]} />
          <h2>Metropolitan Division</h2>
          <StandingsTable standingsData={sortedStandings["metropolitan"]} />
          <h2>Wildcard East</h2>
          <StandingsTable standingsData={sortedStandings["eastern"]} />
        </div>
      )}
    </div>
  );
}
