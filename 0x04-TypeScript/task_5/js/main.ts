interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Generic interface extending both MajorCredits and MinorCredits
interface Credits {
  credits: number;
}

function sumCredits<T extends Credits>(subject1: T, subject2: T): number {
  return subject1.credits + subject2.credits;
}

// Usage examples
const majorCredits1: MajorCredits = { credits: 30, brand: "major" };
const majorCredits2: MajorCredits = { credits: 24, brand: "major" };
const totalMajorCredits = sumCredits(majorCredits1, majorCredits2);

const minorCredits1: MinorCredits = { credits: 18, brand: "minor" };
const minorCredits2: MinorCredits = { credits: 12, brand: "minor" };
const totalMinorCredits = sumCredits(minorCredits1, minorCredits2);
