import { useState } from "react";
import { getStandings } from "../../api/standings";
import { TeamStandings } from "../../types/standings/standings-types";
import StandingsWidget from "./components/Standings-widget";
import { buttonOptions } from "./types/standings";
import ToggleButton from "../../components/ui/Toggle-button";

import { useQuery } from "@tanstack/react-query";

export default function Standings() {
  const [displaySettings, setDisplaySettings] = useState(buttonOptions[0].name);
  const { isLoading: isLoadingStandings, data: standings } = useQuery<
    TeamStandings[]
  >({
    queryKey: ["standings"],
    queryFn: () => getStandings(),
    // UX felt ok so not caching for now,
    // might try to add more logic at some point to cache during the day/not game time
    //staleTime: 3600000
  });

  if (isLoadingStandings) {
    return <h1>Loading the current NHL Standings ...</h1>;
  }
  if (!standings) {
    return <h1>Error getting standings</h1>;
  }

  console.log("buttonState, ", displaySettings);

  return (
    <div>
      <h1>Standings</h1>
      <ToggleButton
        buttonOptions={buttonOptions}
        setButtonState={setDisplaySettings}
      />

      {displaySettings === "division" && (
        <StandingsWidget standingsData={standings} />
      )}
      {displaySettings === "conference" && (
        <StandingsWidget standingsData={standings} />
      )}
      {displaySettings === "league" && (
        <StandingsWidget standingsData={standings} />
      )}
      {displaySettings === "wildcard" && (
        <StandingsWidget standingsData={standings} />
      )}
    </div>
  );
}
