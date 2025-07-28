import { useQuery } from "@tanstack/react-query";
import { getActiveTeams } from "../../api/teams";
import { Link } from "@tanstack/react-router";
import { Team } from "../../types/teams/teams-list";
import "./Teams.css";

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
            <div className="team-name-container" key={team.id}>
              <Link className="team-name" to={`${team.triCode}/current`}>
                <img
                  src={team.teamLogo}
                  alt={team.fullName}
                  className="team-logo"
                />
                <span>{team.fullName}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
