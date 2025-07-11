import { useQuery } from "@tanstack/react-query";
import { getRoster } from "../../api/roster";
import { Link } from "@tanstack/react-router";
import { Route } from "../../routes/teams/$team.$season";

export default function Roster() {
  const { season, team } = Route.useLoaderData();

  const { isLoading: isLoadingRoster, data: roster } = useQuery<any>({
    queryKey: ["roster", team],
    queryFn: () => getRoster(team, season),
  });

  if (isLoadingRoster) {
    return <p> Loading Roster....</p>;
  }

  return (
    <>
      <h1>Current Roster</h1>
      <div>
        <h3>Forwards</h3>
        {roster.forwards.map((player) => {
          return (
            <div key={player.id}>
              <Link to={`/players/${player.id}`}>
                {player.firstName.default} {player.lastName.default}
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Defensemen</h3>
        {roster.defensemen.map((player) => {
          return (
            <div key={player.id}>
              <Link to={`/players/${player.id}`}>
                {player.firstName.default} {player.lastName.default}
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Goalies</h3>
        {roster.goalies.map((player) => {
          return (
            <div key={player.id}>
              <Link to={`/players/${player.id}`}>
                {player.firstName.default} {player.lastName.default}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
