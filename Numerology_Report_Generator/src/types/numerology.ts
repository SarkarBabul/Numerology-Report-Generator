export interface UserInput {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth?: string;
  mobileNumber: string;
  gender: 'Male' | 'Female' | 'Other';
}

export interface CoreNumbers {
  mulank: number;
  bhagyank: number;
  nameNumber: { compound: number; reduced: number };
  mobileAnk: number;
}

export interface CompatibilityRating {
  rating: 'Highly Compatible' | 'Compatible' | 'Neutral' | 'Incompatible';
  description: string;
}

export interface YogAnalysis {
  combination: string;
  planets: string;
  effects: string;
}

export interface PositionAnalysis {
  digit: number;
  positions: number[];
  effects: string;
  lifeArea: string;
}

export interface NameNumerologyTable {
  letter: string;
  value: number;
}

export interface GridAnalysis {
  grid: (number | null)[][];
  missingNumbers: number[];
  repeatingNumbers: { number: number; count: number }[];
  yogPresence: number;
  effects: string;
}

export interface DashaYogData {
  year: number;
  month: string;
  pyr: number;
  pmo: number;
  mda: number;
  ada: number;
  summation: number;
  interpretation: string;
}

export interface ReportData {
  userInput: UserInput;
  coreNumbers: CoreNumbers;
  calculations: {
    mulankCalc: string;
    bhagyankCalc: string;
    nameCalc: string;
    mobileCalc: string;
  };
  compatibility: {
    nameCompatibility: CompatibilityRating;
    mobileCompatibility: CompatibilityRating;
    nameSuggestions: string[];
    mobileSuggestions: string[];
  };
  yogAnalysis: YogAnalysis[];
  positionAnalysis: PositionAnalysis[];
  nameNumerologyTable: {
    fullName: NameNumerologyTable[];
    firstName: NameNumerologyTable[];
    fullNameNumbers: { compound: number; reduced: number };
    firstNameNumbers: { compound: number; reduced: number };
    luckyNumbers: number[];
    neutralNumbers: number[];
    unluckyNumbers: number[];
  };
  gridAnalysis: {
    dobLoShu: GridAnalysis;
    mobileLoShu: GridAnalysis;
    dobVedic: GridAnalysis;
    mobileVedic: GridAnalysis;
  };
  harmonyScore: {
    score: number;
    stars: number;
    description: string;
    suggestions: string[];
  };
  universalEnergies: {
    marriedLife: {
      compatibleNumbers: number[];
      partnerType: string;
      outlook: string;
      tips: string[];
    };
    health: {
      tendency: string;
      suggestions: string[];
    };
    profession: string[];
    favourableDays: {
      best: string[];
      decisions: string;
      beginnings: string;
    };
    favourableColors: {
      primary: string[];
      secondary: string[];
      avoid: string[];
    };
    music: {
      recommended: string[];
      frequencies: string[];
      avoid: string[];
    };
    directions: {
      sleeping: string;
      working: string;
      meditation: string;
    };
  };
  dashaYog: DashaYogData[];
  luckyNumbers: { year: number; number: number; effect: string }[];
  remedies: {
    general: string[];
    balancing: string[];
    prayers: string[];
  };
  rudraksha: {
    recommendation: string;
    benefits: string[];
    instructions: string;
  };
}