import { useQuery } from "@tanstack/react-query";
import { getActiveTeams } from "../../api/teams";
import { Link } from "@tanstack/react-router";
import { Team } from "../../types/teams/teams-list";

export default function Teams() {
  const {
    isLoading: isLoadingTeams,
    data: activeTeams,
    error: error,
  } = useQuery<Team[]>({
    queryKey: ["teams"],
    queryFn: () => getActiveTeams(),
  });

  if (error) {
    return <p>Error Getting Team Data</p>;
  }

  if (isLoadingTeams) {
    return <p>Loading active NHL Teams....</p>;
  }

  if (!activeTeams) {
    return <p>No active teams found</p>;
  }

  return (
    <>
      <h1>Active NHL teams</h1>
      <div className="teams-list">
        {activeTeams.map((team) => {
          return (
            <div key={team.id}>
              <Link to={`${team.triCode}/current`}>{team.fullName}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
