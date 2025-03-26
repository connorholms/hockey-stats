type Height = { 
    feet: number; 
    inches: number;
}

export function inchesToFeetAndInches(inches: number): Height { 
    const feet = Math.floor(inches / 12)
    const remainingInches = inches % 12
    return { 
        feet, 
        inches: remainingInches
    }
}

export const draftRound = ["Undrafted", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th"]
const numberEnding = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th']

export function formatPickNumber(pickNumber: number) { 
    let pickLastDigit = pickNumber
    if (pickNumber > 9) { 
        pickLastDigit = pickNumber % 10
    }
    return numberEnding[pickLastDigit]
}