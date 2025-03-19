import { useQuery } from "@tanstack/react-query"
import { getActiveTeams } from "../../api/teams"
import { TeamResponse } from "./team-types"


export default function Teams() { 

    const { isLoading: isLoadingTeams, data: activeTeams, error: error, isSuccess }= useQuery<TeamResponse[]>({
        queryKey: ['teams'], 
        queryFn: () => getActiveTeams(), 
    })

    if(!isSuccess) { 
        return <p>Error Getting Team Data</p>
    }

    if(isLoadingTeams) { 
        return <p>Loading active NHL Teams....</p>
    }
        
    return (
    <>
        <h1>Active NHL teams</h1>
        <div className="teams-list">
            {activeTeams.map(team => { 
                return <div>{team.fullName}</div>
            })}
        </div>

    </>
    )
}