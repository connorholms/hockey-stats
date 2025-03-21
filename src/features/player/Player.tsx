import { useQuery } from "@tanstack/react-query";
import { getPlayerInfo } from "../../api/player";
import { Route } from "../../routes/players/$playerId";

export default function Player() { 
    const { playerId }: { playerId: string } = Route.useLoaderData()

    const { isLoading: isLoadingPlayer, data: playerData }= useQuery<any>({
        queryKey: ['playerInfo'], 
        queryFn: () => getPlayerInfo(playerId), 
    })

    if(isLoadingPlayer) {
        return <div>Loading Player Data...</div>
    }

    return ( 
        <div>
            <div>{playerData.firstName.default} {playerData.lastName.default}</div>
            <img src={playerData.headshot} alt="Player Headshot" />
        </div>
    )
}