import { useQuery } from "@tanstack/react-query"
import { getRoster } from "../../api/roster"

export default function Roster(rosterParams: any) { 
    const { rosterParams: { team, season } } = rosterParams;

    const { isLoading: isLoadingRoster, data: roster }= useQuery<any>({
        queryKey: ['roster'], 
        queryFn: () => getRoster(team, season), 
    })

    if(isLoadingRoster) { 
        return <p> Loading Roster....</p>
    }

    return ( 
        <>
        <h1>Current Roster</h1>
        <div>
            <h3>Forwards</h3>
            {roster.forwards.map(player => { 
                return <div>{player.firstName.default} {player.lastName.default}</div>
            })}
        </div>
        <div>
            <h3>Defensemen</h3>
            {roster.defensemen.map(player => { 
                return <div>{player.firstName.default} {player.lastName.default}</div>
            })}
        </div>
        <div>
            <h3>Goalies</h3>
            {roster.goalies.map(player => { 
                return <div>{player.firstName.default} {player.lastName.default}</div>
            })}
        </div>
    </>
    )
}