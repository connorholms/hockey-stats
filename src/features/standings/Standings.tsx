import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getStandings } from "../../api/standings";
import {
  StandingsSortOptions,
  TeamStandings,
} from "../../types/standings/standings-types";
import StandingsWidget from "./components/Standings-widget";
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

  console.log("sorted Standings", sortedStandings);

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
          <StandingsWidget standingsData={sortedStandings["central"]} />
          <StandingsWidget standingsData={sortedStandings["pacific"]} />
          <StandingsWidget standingsData={sortedStandings["atlantic"]} />
          <StandingsWidget standingsData={sortedStandings["metropolitan"]} />
        </div>
      )}
      {displaySettings === "conference" && (
        <div>
          <StandingsWidget standingsData={sortedStandings["western"]} />
          <StandingsWidget standingsData={sortedStandings["eastern"]} />
        </div>
      )}
      {displaySettings === "league" && (
        <div>
          <StandingsWidget standingsData={standings} />
        </div>
      )}
      {displaySettings === "wildcard" && (
        <div>
          <StandingsWidget standingsData={sortedStandings["central"]} />
          <StandingsWidget standingsData={sortedStandings["pacific"]} />
          <StandingsWidget standingsData={sortedStandings["western"]} />
          <StandingsWidget standingsData={sortedStandings["atlantic"]} />
          <StandingsWidget standingsData={sortedStandings["metropolitan"]} />
          <StandingsWidget standingsData={sortedStandings["eastern"]} />
        </div>
      )}
    </div>
  );
}
