import "./player.css";
import { PlayerResponse } from "../types/player-types"
import { inchesToFeetAndInches, draftRound, formatPickNumber} from "../../../util/format";

const HasStateProvince  = ["USA", "CAN"]

export default function PlayerHeader(playerData) {
  const playerInfo: PlayerResponse = playerData.playerInfo;

  let stickHand, hometown, draftInfo;
  playerInfo.position === "G" ? stickHand = "Catches" : stickHand = "Shoots"

  if (HasStateProvince.includes(playerInfo.birthCountry)) { 
    hometown = `${playerInfo.birthCity.default}, ${playerInfo.birthStateProvince.default}, ${playerInfo.birthCountry}`
  } else { 
    hometown = `${playerInfo.birthCity.default}, ${playerInfo.birthCountry}`
  }

  const playerHeight = inchesToFeetAndInches(playerInfo.heightInInches);

  if (playerInfo?.draftDetails) { 
    const pickNumberRound = playerInfo.draftDetails.pickInRound + formatPickNumber(playerInfo.draftDetails.pickInRound)
    const pickNumberOverallNumber = playerInfo.draftDetails.overallPick + formatPickNumber(playerInfo.draftDetails.overallPick)
    draftInfo = `${playerInfo.draftDetails.year}, ${playerInfo.draftDetails.teamAbbrev} ${draftRound[playerInfo.draftDetails.round]} Round, ${pickNumberRound} Pick (${pickNumberOverallNumber} Overall)`
  } else { 
    draftInfo = "Undrafted"
  }


  return (
    <div className="player-bio">
      <div className="player-headshot">
        <img src={playerInfo.headshot} alt="Player Headshot" />
      </div>
      <div>
        <h1>
          {playerInfo.firstName.default} {playerInfo.lastName.default} - #
          {playerInfo.sweaterNumber} - {playerInfo.fullTeamName.default}
        </h1>
        <div>
          <div>Birth Date: {playerInfo.birthDate}</div>
          <div>Hometown: {hometown}</div>
          <div>Position: {playerInfo.position}</div> 
          <div>{stickHand}: {playerInfo.shootsCatches}</div> 
          <div>
            Height: {playerHeight.feet}'{playerHeight.inches}"
          </div>
          <div>Weight: {playerInfo.weightInPounds}</div>
          <div>Drafted: {draftInfo} </div>
        </div>
      </div>
    </div>
  );
}
