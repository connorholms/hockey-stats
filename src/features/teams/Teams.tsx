import { useQuery } from "@tanstack/react-query"
import { getActiveTeams } from "../../api/teams"
import { TeamResponse } from "./team-types"
import { Link } from "@tanstack/react-router"


export default function Teams() { 

    const { isLoading: isLoadingTeams, data: activeTeams, error: error, isSuccess }= useQuery<TeamResponse[]>({
        queryKey: ['teams'], 
        queryFn: () => getActiveTeams(), 
    })

    if(!isSuccess || error) { 
        return <p>Error Getting Team Data</p>
    }

    if(isLoadingTeams) { 
        return <p>Loading active NHL Teams....</p>
    }
        
    return (
    <>
        <h1>Active NHL teams</h1>
        <div className="teams-list">
            {activeTeams
                .map(team => { 
                    return (
                        <div>
                            <Link to={`${team.triCode}/current`}>{team.fullName}</Link>
                        </div>
                    )
                })}
        </div>
    </>
    )
}