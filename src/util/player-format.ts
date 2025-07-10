type Height = {
  feet: number;
  inches: number;
};

export function inchesToFeetAndInches(inches: number): Height {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return {
    feet,
    inches: remainingInches,
  };
}

export const draftRound = [
  "Undrafted",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
];
const numberEnding = [
  "th",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
];

function toOrdinal(pickNumber: number): string {
  let pickLastDigit = pickNumber % 10;

  // need to convert 11st to 11th and 12nd to 12th
  if (pickNumber === 11 || pickNumber === 12 || pickNumber === 13) {
    pickLastDigit = 0;
  }
  return numberEnding[pickLastDigit];
}

export function formatDraftInfo(
  pickInRound: number,
  overallPick: number,
): [string, string] {
  const pickNumberRound = pickInRound + toOrdinal(pickInRound);
  const pickNumberOverallNumber = overallPick + toOrdinal(overallPick);
  return [pickNumberRound, pickNumberOverallNumber];
}
