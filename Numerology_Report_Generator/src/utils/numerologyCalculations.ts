import { UserInput, CoreNumbers, ReportData, YogAnalysis, PositionAnalysis, NameNumerologyTable, GridAnalysis, DashaYogData } from '../types/numerology';

// Chaldean Numerology Chart
const chaldeanChart: { [key: string]: number } = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7
};

// Reduce to single digit
const reduceToSingleDigit = (num: number): number => {
  while (num > 9) {
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
};

// Calculate Mulank (Root Number)
export const calculateMulank = (dateOfBirth: string): { value: number; calculation: string } => {
  const day = parseInt(dateOfBirth.split('-')[0]);
  const sum = day.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const reduced = reduceToSingleDigit(sum);
  return {
    value: reduced,
    calculation: `Birth day ${day} → ${day.toString().split('').join('+')} = ${sum}${sum > 9 ? ` → ${reduced}` : ''}`
  };
};

// Calculate Bhagyank (Destiny Number)
export const calculateBhagyank = (dateOfBirth: string): { value: number; calculation: string } => {
  const digits = dateOfBirth.replace(/-/g, '').split('').map(d => parseInt(d));
  const sum = digits.reduce((total, digit) => total + digit, 0);
  const reduced = reduceToSingleDigit(sum);
  return {
    value: reduced,
    calculation: `${dateOfBirth} → ${digits.join('+')} = ${sum} → ${reduced}`
  };
};

// Calculate Name Number using Chaldean system
export const calculateNameNumber = (fullName: string): { compound: number; reduced: number; calculation: string } => {
  const letters = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  let calcString = '';
  
  for (let i = 0; i < letters.length; i++) {
    const value = chaldeanChart[letters[i]] || 0;
    sum += value;
    calcString += `${letters[i]}(${value})`;
    if (i < letters.length - 1) calcString += '+';
  }
  
  const reduced = reduceToSingleDigit(sum);
  return {
    compound: sum,
    reduced: reduced,
    calculation: `${calcString} = ${sum} → ${reduced}`
  };
};

// Calculate Mobile Number Total
export const calculateMobileAnk = (mobileNumber: string): { value: number; calculation: string } => {
  const digits = mobileNumber.split('').map(d => parseInt(d));
  const sum = digits.reduce((total, digit) => total + digit, 0);
  const reduced = reduceToSingleDigit(sum);
  return {
    value: reduced,
    calculation: `${digits.join('+')} = ${sum} → ${reduced}`
  };
};

// Check compatibility between numbers
export const checkCompatibility = (num1: number, num2: number): 'Highly Compatible' | 'Compatible' | 'Neutral' | 'Incompatible' => {
  const highlyCompatiblePairs = [
    [1, 1], [1, 5], [1, 7], [1, 9],
    [2, 2], [2, 4], [2, 6], [2, 8],
    [3, 3], [3, 6], [3, 9],
    [4, 2], [4, 4], [4, 6], [4, 8],
    [5, 1], [5, 5], [5, 7], [5, 9],
    [6, 2], [6, 3], [6, 6], [6, 9],
    [7, 1], [7, 5], [7, 7], [7, 9],
    [8, 2], [8, 4], [8, 6], [8, 8],
    [9, 1], [9, 3], [9, 5], [9, 6], [9, 7], [9, 9]
  ];
  
  const compatiblePairs = [
    [1, 2], [1, 3], [1, 4], [1, 6], [1, 8],
    [2, 1], [2, 3], [2, 5], [2, 7], [2, 9],
    [3, 1], [3, 2], [3, 4], [3, 5], [3, 7], [3, 8],
    [4, 1], [4, 3], [4, 5], [4, 7], [4, 9],
    [5, 2], [5, 3], [5, 4], [5, 6], [5, 8],
    [6, 1], [6, 4], [6, 5], [6, 7], [6, 8],
    [7, 2], [7, 3], [7, 4], [7, 6], [7, 8],
    [8, 1], [8, 3], [8, 5], [8, 7], [8, 9],
    [9, 2], [9, 4], [9, 8]
  ];
  
  const isHighlyCompatible = highlyCompatiblePairs.some(pair => 
    (pair[0] === num1 && pair[1] === num2) || (pair[0] === num2 && pair[1] === num1)
  );
  
  if (isHighlyCompatible) return 'Highly Compatible';
  
  const isCompatible = compatiblePairs.some(pair => 
    (pair[0] === num1 && pair[1] === num2) || (pair[0] === num2 && pair[1] === num1)
  );
  
  if (isCompatible) return 'Compatible';
  
  // Check for neutral pairs (remaining combinations that aren't incompatible)
  const incompatiblePairs = [
    [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]
  ];
  
  const isIncompatible = incompatiblePairs.some(pair => 
    (pair[0] === num1 && pair[1] === num2) || (pair[0] === num2 && pair[1] === num1)
  );
  
  if (isIncompatible) return 'Incompatible';
  
  return 'Neutral';
};

// Generate name correction suggestions
export const generateNameSuggestions = (firstName: string, currentNameNumber: number, targetNumbers: number[], gender: string): string[] => {
  const suggestions: string[] = [];
  
  // Strategy 1: Double a vowel
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let modified1 = firstName;
  for (const vowel of vowels) {
    if (modified1.toLowerCase().includes(vowel)) {
      modified1 = modified1.replace(new RegExp(vowel, 'i'), vowel + vowel);
      break;
    }
  }
  if (modified1 !== firstName) suggestions.push(modified1);
  
  // Strategy 2: Double last consonant
  let modified2 = firstName;
  const lastChar = modified2[modified2.length - 1];
  if (!/[aeiou]/i.test(lastChar)) {
    modified2 = modified2 + lastChar;
  } else {
    modified2 = modified2 + 'l';
  }
  suggestions.push(modified2);
  
  // Strategy 3: Add silent letters
  const silentLetters = ['h', 'l', 'n'];
  for (const letter of silentLetters) {
    const modified3 = firstName + letter;
    if (!suggestions.includes(modified3)) {
      suggestions.push(modified3);
      break;
    }
  }
  
  return suggestions.slice(0, 3);
};

// Generate mobile number suggestions
export const generateMobileSuggestions = (mobileNumber: string, targetNumbers: number[]): string[] => {
  const suggestions: string[] = [];
  const base = mobileNumber.slice(0, -2);
  
  const goodEndings = ['01', '10', '19', '28', '37', '46', '55', '64', '73', '82', '91'];
  
  for (let i = 0; i < 3 && i < goodEndings.length; i++) {
    suggestions.push(base + goodEndings[i]);
  }
  
  return suggestions;
};

// Analyze mobile number yogs
export const analyzeMobileYogs = (mobileNumber: string): YogAnalysis[] => {
  const digits = mobileNumber.split('').map(d => parseInt(d));
  const yogs: YogAnalysis[] = [];
  const seen = new Set<string>();
  
  const yogMeanings: { [key: string]: { planets: string; effects: string } } = {
    '1,2': { planets: 'Sun + Moon', effects: 'Leadership with emotional intelligence, creative success' },
    '1,3': { planets: 'Sun + Jupiter', effects: 'Powerful leadership, spiritual growth, recognition' },
    '2,6': { planets: 'Moon + Venus', effects: 'Artistic abilities, harmonious relationships' },
    '3,6': { planets: 'Jupiter + Venus', effects: 'Wealth, luxury, spiritual and material balance' },
    '4,8': { planets: 'Rahu + Saturn', effects: 'Challenges leading to growth, delayed success' },
    '5,7': { planets: 'Mercury + Ketu', effects: 'Intellectual pursuits, research abilities' },
    '6,9': { planets: 'Venus + Mars', effects: 'Creative energy, passionate relationships' },
    '7,9': { planets: 'Ketu + Mars', effects: 'Spiritual warrior, overcoming obstacles' },
    '1,4': { planets: 'Sun + Rahu', effects: 'Ambitious goals, government connections' },
    '2,7': { planets: 'Moon + Ketu', effects: 'Intuitive abilities, spiritual insights' },
    '3,9': { planets: 'Jupiter + Mars', effects: 'Dynamic leadership, teaching abilities' },
    '4,6': { planets: 'Rahu + Venus', effects: 'Material comforts, artistic success' },
    '5,8': { planets: 'Mercury + Saturn', effects: 'Business acumen, analytical skills' }
  };
  
  for (let i = 0; i < digits.length - 1; i++) {
    const current = digits[i];
    const next = digits[i + 1];
    const key1 = `${current},${next}`;
    const key2 = `${next},${current}`;
    
    if (yogMeanings[key1] && !seen.has(key1)) {
      yogs.push({
        combination: `(${current},${next})`,
        planets: yogMeanings[key1].planets,
        effects: yogMeanings[key1].effects
      });
      seen.add(key1);
    } else if (yogMeanings[key2] && !seen.has(key2)) {
      yogs.push({
        combination: `(${current},${next})`,
        planets: yogMeanings[key2].planets,
        effects: yogMeanings[key2].effects
      });
      seen.add(key2);
    }
  }
  
  return yogs;
};

// Analyze digit positions in mobile number
export const analyzePositions = (mobileNumber: string): PositionAnalysis[] => {
  const digits = mobileNumber.split('').map(d => parseInt(d));
  const positionMap: { [key: number]: number[] } = {};
  
  digits.forEach((digit, index) => {
    if (!positionMap[digit]) positionMap[digit] = [];
    positionMap[digit].push(index + 1);
  });
  
  const positionEffects: { [key: number]: { effects: string; lifeArea: string } } = {
    1: { effects: 'Leadership qualities, independence, new beginnings', lifeArea: 'Career and Authority' },
    2: { effects: 'Cooperation, partnerships, emotional sensitivity', lifeArea: 'Relationships and Partnerships' },
    3: { effects: 'Communication, creativity, social connections', lifeArea: 'Communication and Arts' },
    4: { effects: 'Stability, hard work, methodical approach', lifeArea: 'Foundation and Security' },
    5: { effects: 'Freedom, adventure, change and versatility', lifeArea: 'Travel and Innovation' },
    6: { effects: 'Responsibility, nurturing, family focus', lifeArea: 'Home and Family' },
    7: { effects: 'Spirituality, analysis, introspection', lifeArea: 'Spirituality and Research' },
    8: { effects: 'Material success, authority, karmic lessons', lifeArea: 'Business and Achievement' },
    9: { effects: 'Humanitarian service, completion, wisdom', lifeArea: 'Service and Completion' }
  };
  
  return Object.entries(positionMap)
    .filter(([digit]) => parseInt(digit) !== 0)
    .map(([digit, positions]) => ({
      digit: parseInt(digit),
      positions,
      effects: positionEffects[parseInt(digit)]?.effects || 'Neutral influence',
      lifeArea: positionEffects[parseInt(digit)]?.lifeArea || 'General Life Areas'
    }));
};

// Create name numerology table
export const createNameNumerologyTable = (fullName: string): any => {
  const firstName = fullName.split(' ')[0];
  
  const createTable = (name: string): NameNumerologyTable[] => {
    const letters = name.toUpperCase().replace(/[^A-Z]/g, '');
    return letters.split('').map(letter => ({
      letter,
      value: chaldeanChart[letter] || 0
    }));
  };
  
  const calculateNumbers = (name: string) => {
    const result = calculateNameNumber(name);
    return { compound: result.compound, reduced: result.reduced };
  };
  
  const fullNameTable = createTable(fullName);
  const firstNameTable = createTable(firstName);
  const fullNameNumbers = calculateNumbers(fullName);
  const firstNameNumbers = calculateNumbers(firstName);
  
  // Categorize numbers based on general numerological principles
  const luckyNumbers = [1, 3, 5, 6, 9];
  const neutralNumbers = [2, 4, 7];
  const unluckyNumbers = [8];
  
  return {
    fullName: fullNameTable,
    firstName: firstNameTable,
    fullNameNumbers,
    firstNameNumbers,
    luckyNumbers,
    neutralNumbers,
    unluckyNumbers
  };
};

// Generate LoShu Grid
export const generateLoShuGrid = (numbers: number[]): GridAnalysis => {
  const grid: (number | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  
  const positions: { [key: number]: [number, number] } = {
    4: [0, 0], 9: [0, 1], 2: [0, 2],
    3: [1, 0], 5: [1, 1], 7: [1, 2],
    8: [2, 0], 1: [2, 1], 6: [2, 2]
  };
  
  const numberCount: { [key: number]: number } = {};
  
  numbers.forEach(num => {
    if (num >= 1 && num <= 9) {
      numberCount[num] = (numberCount[num] || 0) + 1;
      const [row, col] = positions[num];
      grid[row][col] = num;
    }
  });
  
  const missingNumbers = [];
  const repeatingNumbers = [];
  
  for (let i = 1; i <= 9; i++) {
    if (!numberCount[i]) {
      missingNumbers.push(i);
    } else if (numberCount[i] > 1) {
      repeatingNumbers.push({ number: i, count: numberCount[i] });
    }
  }
  
  const yogPresence = Math.round(((9 - missingNumbers.length) / 9) * 100);
  
  let effects = '';
  if (yogPresence >= 80) {
    effects = 'Excellent energy balance with strong life force';
  } else if (yogPresence >= 60) {
    effects = 'Good energy balance with some areas needing attention';
  } else {
    effects = 'Energy imbalance requiring remedial measures';
  }
  
  return {
    grid,
    missingNumbers,
    repeatingNumbers,
    yogPresence,
    effects
  };
};

// Generate Vedic Grid
export const generateVedicGrid = (numbers: number[]): GridAnalysis => {
  const grid: (number | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  
  const positions: { [key: number]: [number, number] } = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2]
  };
  
  const numberCount: { [key: number]: number } = {};
  
  numbers.forEach(num => {
    if (num >= 1 && num <= 9) {
      numberCount[num] = (numberCount[num] || 0) + 1;
      const [row, col] = positions[num];
      grid[row][col] = num;
    }
  });
  
  const missingNumbers = [];
  const repeatingNumbers = [];
  
  for (let i = 1; i <= 9; i++) {
    if (!numberCount[i]) {
      missingNumbers.push(i);
    } else if (numberCount[i] > 1) {
      repeatingNumbers.push({ number: i, count: numberCount[i] });
    }
  }
  
  const yogPresence = Math.round(((9 - missingNumbers.length) / 9) * 100);
  
  let effects = '';
  if (yogPresence >= 80) {
    effects = 'Strong spiritual and material foundation';
  } else if (yogPresence >= 60) {
    effects = 'Balanced spiritual growth with room for improvement';
  } else {
    effects = 'Spiritual development needed for better life balance';
  }
  
  return {
    grid,
    missingNumbers,
    repeatingNumbers,
    yogPresence,
    effects
  };
};

// Calculate harmony score
export const calculateHarmonyScore = (coreNumbers: CoreNumbers): any => {
  const { mulank, bhagyank, nameNumber, mobileAnk } = coreNumbers;
  
  let compatibilityCount = 0;
  const totalComparisons = 4;
  
  // Check compatibilities
  if (checkCompatibility(nameNumber.reduced, mulank) === 'Highly Compatible') compatibilityCount++;
  if (checkCompatibility(nameNumber.reduced, bhagyank) === 'Highly Compatible') compatibilityCount++;
  if (checkCompatibility(mobileAnk, mulank) === 'Highly Compatible') compatibilityCount++;
  if (checkCompatibility(mobileAnk, bhagyank) === 'Highly Compatible') compatibilityCount++;
  
  const stars = Math.max(1, Math.round((compatibilityCount / totalComparisons) * 5));
  
  let description = '';
  let suggestions: string[] = [];
  
  if (stars >= 4) {
    description = 'High Harmony - Excellent vibrational alignment supporting success and fulfillment';
    suggestions = [
      'Maintain current positive energy through regular meditation',
      'Use your harmonious numbers for important decisions',
      'Share your positive energy to help others'
    ];
  } else if (stars >= 3) {
    description = 'Good Harmony - Balanced energies with potential for growth';
    suggestions = [
      'Work on improving name or mobile number compatibility',
      'Practice daily affirmations to enhance positive vibrations',
      'Seek guidance for better number alignment'
    ];
  } else {
    description = 'Moderate Harmony - Adjustments recommended for better alignment';
    suggestions = [
      'Consider name correction for better compatibility',
      'Change mobile number to improve energy alignment',
      'Perform regular remedial practices to balance energies',
      'Consult with numerology expert for personalized guidance'
    ];
  }
  
  return { score: compatibilityCount, stars, description, suggestions };
};

// Generate universal energies
export const generateUniversalEnergies = (coreNumbers: CoreNumbers, gender: string) => {
  const mulank = coreNumbers.mulank;
  
  return {
    marriedLife: {
      compatibleNumbers: getCompatiblePartnerNumbers(mulank),
      partnerType: getIdealPartnerType(mulank, gender),
      outlook: getMarriageOutlook(mulank),
      tips: getMarriageTips(mulank)
    },
    health: {
      tendency: getHealthTendency(mulank),
      suggestions: getHealthSuggestions(mulank)
    },
    profession: getProfessionSuggestions(mulank),
    favourableDays: getFavourableDays(mulank),
    favourableColors: getFavourableColors(mulank),
    music: getMusicRecommendations(mulank),
    directions: getFavourableDirections(mulank)
  };
};

// Helper functions for universal energies
const getCompatiblePartnerNumbers = (mulank: number): number[] => {
  const compatibility: { [key: number]: number[] } = {
    1: [1, 5, 7], 2: [2, 4, 6, 8], 3: [3, 6, 9], 4: [2, 4, 6, 8],
    5: [1, 5, 7, 9], 6: [2, 3, 6, 9], 7: [1, 5, 7, 9], 8: [2, 4, 6, 8], 9: [1, 3, 5, 6, 7, 9]
  };
  return compatibility[mulank] || [1, 5, 7];
};

const getIdealPartnerType = (mulank: number, gender: string): string => {
  const types: { [key: number]: string } = {
    1: 'confident, ambitious partner who respects your independence',
    2: 'caring, supportive partner who values emotional connection',
    3: 'creative, communicative partner who enjoys social activities',
    4: 'practical, reliable partner who shares your values of stability',
    5: 'adventurous, free-spirited partner who enjoys variety and travel',
    6: 'family-oriented, nurturing partner who values home and relationships',
    7: 'intellectual, spiritual partner who appreciates deep conversations',
    8: 'successful, ambitious partner who understands your drive for achievement',
    9: 'compassionate, humanitarian partner who shares your desire to help others'
  };
  return types[mulank] || 'understanding and supportive partner';
};

const getMarriageOutlook = (mulank: number): string => {
  const outlooks: { [key: number]: string } = {
    1: 'Your married life will be dynamic with strong leadership from both partners',
    2: 'Your married life will be harmonious with deep emotional bonds',
    3: 'Your married life will be joyful with excellent communication',
    4: 'Your married life will be stable and built on solid foundations',
    5: 'Your married life will be exciting with plenty of adventures together',
    6: 'Your married life will be loving with strong family focus',
    7: 'Your married life will be spiritually fulfilling with deep understanding',
    8: 'Your married life will be successful with mutual support for ambitions',
    9: 'Your married life will be compassionate with shared humanitarian goals'
  };
  return outlooks[mulank] || 'Your married life will be balanced and fulfilling';
};

const getMarriageTips = (mulank: number): string[] => {
  const tips: { [key: number]: string[] } = {
    1: ['Maintain mutual respect for independence', 'Take turns in leadership roles', 'Support each other\'s ambitions'],
    2: ['Practice open communication', 'Show appreciation for small gestures', 'Create peaceful home environment'],
    3: ['Keep communication channels open', 'Engage in creative activities together', 'Maintain social connections'],
    4: ['Build traditions together', 'Plan for the future systematically', 'Value stability over excitement'],
    5: ['Give each other space for growth', 'Plan exciting adventures', 'Embrace change as opportunity'],
    6: ['Prioritize family time', 'Create comfortable home', 'Show love through service'],
    7: ['Respect need for solitude', 'Engage in spiritual practices', 'Have meaningful conversations'],
    8: ['Support career goals', 'Manage finances wisely', 'Celebrate achievements together'],
    9: ['Engage in charitable activities', 'Practice forgiveness', 'Support personal growth']
  };
  return tips[mulank] || ['Practice patience and understanding', 'Communicate openly', 'Support each other\'s dreams'];
};

const getHealthTendency = (mulank: number): string => {
  const tendencies: { [key: number]: string } = {
    1: 'Generally robust health with focus on heart and circulation',
    2: 'Sensitive constitution requiring attention to digestive system',
    3: 'Good vitality with attention needed for nervous system',
    4: 'Strong constitution but watch for bone and joint issues',
    5: 'Dynamic health but prone to nervous exhaustion',
    6: 'Generally good health with focus on reproductive system',
    7: 'Need to balance mental and physical health',
    8: 'Strong physical constitution but watch for stress-related issues',
    9: 'Good overall health with attention to blood circulation'
  };
  return tendencies[mulank] || 'Balanced health with attention to lifestyle';
};

const getHealthSuggestions = (mulank: number): string[] => {
  const suggestions: { [key: number]: string[] } = {
    1: ['Regular cardiovascular exercise', 'Avoid excessive stress', 'Maintain regular sleep schedule'],
    2: ['Eat regular balanced meals', 'Practice stress management', 'Avoid cold environments'],
    3: ['Regular mental relaxation', 'Maintain active social life', 'Practice deep breathing'],
    4: ['Regular physical exercise', 'Maintain consistent routine', 'Include calcium-rich foods'],
    5: ['Balance activity with rest', 'Practice meditation', 'Maintain exercise variety'],
    6: ['Focus on emotional well-being', 'Regular health check-ups', 'Maintain work-life balance'],
    7: ['Regular meditation', 'Spend time in nature', 'Balance solitude with social interaction'],
    8: ['Manage work stress', 'Regular health check-ups', 'Practice relaxation techniques'],
    9: ['Regular circulation exercises', 'Maintain emotional balance', 'Engage in charitable activities']
  };
  return suggestions[mulank] || ['Regular exercise and balanced diet', 'Adequate rest', 'Regular health check-ups'];
};

const getProfessionSuggestions = (mulank: number): string[] => {
  const professions: { [key: number]: string[] } = {
    1: ['Leadership roles', 'Entrepreneurship', 'Government positions', 'Executive positions'],
    2: ['Counseling', 'Diplomacy', 'Healthcare', 'Team coordination'],
    3: ['Communication', 'Media and Entertainment', 'Teaching', 'Creative Arts'],
    4: ['Engineering', 'Construction', 'Banking', 'Administrative roles'],
    5: ['Travel and Tourism', 'Sales and Marketing', 'Adventure sports', 'Consulting'],
    6: ['Healthcare', 'Education', 'Interior Design', 'Social Work'],
    7: ['Research and Development', 'Spirituality', 'Psychology', 'Investigation'],
    8: ['Business Management', 'Finance', 'Real Estate', 'Corporate Leadership'],
    9: ['Social Service', 'Humanitarian Work', 'Counseling', 'Healing Arts']
  };
  return professions[mulank] || ['Versatile career options', 'Leadership roles', 'Creative fields'];
};

const getFavourableDays = (mulank: number) => {
  const days: { [key: number]: { best: string[]; decisions: string; beginnings: string } } = {
    1: { best: ['Sunday', 'Monday', 'Tuesday'], decisions: 'Sunday', beginnings: 'Sunday' },
    2: { best: ['Monday', 'Tuesday', 'Friday'], decisions: 'Monday', beginnings: 'Monday' },
    3: { best: ['Thursday', 'Tuesday', 'Friday'], decisions: 'Thursday', beginnings: 'Thursday' },
    4: { best: ['Sunday', 'Monday', 'Saturday'], decisions: 'Saturday', beginnings: 'Sunday' },
    5: { best: ['Wednesday', 'Friday', 'Saturday'], decisions: 'Wednesday', beginnings: 'Wednesday' },
    6: { best: ['Friday', 'Tuesday', 'Thursday'], decisions: 'Friday', beginnings: 'Friday' },
    7: { best: ['Monday', 'Tuesday', 'Sunday'], decisions: 'Monday', beginnings: 'Sunday' },
    8: { best: ['Saturday', 'Sunday', 'Tuesday'], decisions: 'Saturday', beginnings: 'Saturday' },
    9: { best: ['Tuesday', 'Thursday', 'Sunday'], decisions: 'Tuesday', beginnings: 'Sunday' }
  };
  return days[mulank] || { best: ['Sunday', 'Tuesday', 'Thursday'], decisions: 'Sunday', beginnings: 'Sunday' };
};

const getFavourableColors = (mulank: number) => {
  const colors: { [key: number]: { primary: string[]; secondary: string[]; avoid: string[] } } = {
    1: { primary: ['Gold', 'Orange', 'Red'], secondary: ['Yellow', 'Maroon'], avoid: ['Black', 'Dark Blue'] },
    2: { primary: ['White', 'Silver', 'Light Blue'], secondary: ['Green', 'Cream'], avoid: ['Red', 'Dark colors'] },
    3: { primary: ['Yellow', 'Golden', 'Purple'], secondary: ['Orange', 'Light Blue'], avoid: ['Black', 'Dark Green'] },
    4: { primary: ['Blue', 'Grey', 'Brown'], secondary: ['Green', 'Khaki'], avoid: ['Red', 'Pink'] },
    5: { primary: ['Green', 'Light Colors', 'Silver'], secondary: ['White', 'Grey'], avoid: ['Dark Blue', 'Black'] },
    6: { primary: ['Pink', 'Blue', 'White'], secondary: ['Light Green', 'Cream'], avoid: ['Red', 'Black'] },
    7: { primary: ['Light Blue', 'Green', 'White'], secondary: ['Silver', 'Grey'], avoid: ['Red', 'Dark colors'] },
    8: { primary: ['Dark Blue', 'Black', 'Purple'], secondary: ['Grey', 'Brown'], avoid: ['Light colors', 'Pink'] },
    9: { primary: ['Red', 'Maroon', 'Pink'], secondary: ['Orange', 'Yellow'], avoid: ['Blue', 'Black'] }
  };
  return colors[mulank] || { primary: ['White', 'Light Blue', 'Green'], secondary: ['Yellow', 'Silver'], avoid: ['Black', 'Dark Red'] };
};

const getMusicRecommendations = (mulank: number) => {
  const music: { [key: number]: { recommended: string[]; frequencies: string[]; avoid: string[] } } = {
    1: { recommended: ['Classical', 'Motivational', 'Upbeat'], frequencies: ['528 Hz', '741 Hz'], avoid: ['Heavy metal', 'Aggressive music'] },
    2: { recommended: ['Soft instrumental', 'Romantic', 'Ambient'], frequencies: ['432 Hz', '528 Hz'], avoid: ['Loud music', 'Aggressive beats'] },
    3: { recommended: ['Pop', 'Jazz', 'World music'], frequencies: ['417 Hz', '528 Hz'], avoid: ['Dark music', 'Depressing songs'] },
    4: { recommended: ['Folk', 'Country', 'Traditional'], frequencies: ['396 Hz', '528 Hz'], avoid: ['Chaotic music', 'Experimental'] },
    5: { recommended: ['Rock', 'Electronic', 'Dance'], frequencies: ['741 Hz', '852 Hz'], avoid: ['Monotonous music', 'Slow ballads'] },
    6: { recommended: ['Romantic', 'Family songs', 'Devotional'], frequencies: ['528 Hz', '639 Hz'], avoid: ['Angry music', 'Violent lyrics'] },
    7: { recommended: ['Meditation music', 'Spiritual', 'Nature sounds'], frequencies: ['963 Hz', '852 Hz'], avoid: ['Commercial pop', 'Materialistic songs'] },
    8: { recommended: ['Classical', 'Power music', 'Corporate'], frequencies: ['528 Hz', '741 Hz'], avoid: ['Soft music', 'Emotional ballads'] },
    9: { recommended: ['Devotional', 'Humanitarian', 'World music'], frequencies: ['528 Hz', '396 Hz'], avoid: ['Selfish themes', 'Materialistic music'] }
  };
  return music[mulank] || { recommended: ['Classical', 'Peaceful', 'Uplifting'], frequencies: ['528 Hz', '432 Hz'], avoid: ['Aggressive', 'Negative lyrics'] };
};

const getFavourableDirections = (mulank: number) => {
  const directions: { [key: number]: { sleeping: string; working: string; meditation: string } } = {
    1: { sleeping: 'South or East', working: 'East or North', meditation: 'East' },
    2: { sleeping: 'North or West', working: 'North or West', meditation: 'North' },
    3: { sleeping: 'East or South', working: 'North or East', meditation: 'North-East' },
    4: { sleeping: 'South or West', working: 'South or East', meditation: 'South' },
    5: { sleeping: 'North or East', working: 'North or West', meditation: 'North' },
    6: { sleeping: 'South or West', working: 'North or South', meditation: 'South-East' },
    7: { sleeping: 'West or South', working: 'West or South', meditation: 'West' },
    8: { sleeping: 'South or West', working: 'South or West', meditation: 'South-West' },
    9: { sleeping: 'South or East', working: 'South or East', meditation: 'South' }
  };
  return directions[mulank] || { sleeping: 'South or East', working: 'North or East', meditation: 'North-East' };
};

// Generate Dasha Yog predictions
export const generateDashaYog = (userInput: UserInput, coreNumbers: CoreNumbers): DashaYogData[] => {
  const data: DashaYogData[] = [];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
  
  for (let year = 2025; year <= 2028; year++) {
    for (let month = 1; month <= 12; month++) {
      const pyr = reduceToSingleDigit(year + coreNumbers.bhagyank);
      const pmo = reduceToSingleDigit(pyr + month);
      const mda = reduceToSingleDigit(coreNumbers.mulank + year);
      const ada = reduceToSingleDigit(mda + month);
      const summation = reduceToSingleDigit(pyr + pmo + mda + ada);
      
      let interpretation = '';
      if (summation >= 1 && summation <= 3) {
        interpretation = 'Favorable period for new beginnings and creative endeavors';
      } else if (summation >= 4 && summation <= 6) {
        interpretation = 'Focus on stability, relationships, and steady progress';
      } else if (summation >= 7 && summation <= 9) {
        interpretation = 'Time for spiritual growth, completion of projects, and wisdom gaining';
      }
      
      data.push({
        year,
        month: months[month - 1],
        pyr,
        pmo,
        mda,
        ada,
        summation,
        interpretation
      });
    }
  }
  
  return data;
};

// Generate remedies
const generateRemedies = (coreNumbers: CoreNumbers) => {
  return {
    general: [
      'Chant your personal mantra daily for 108 times',
      'Wear gemstones corresponding to your favorable numbers',
      'Donate to charity on favorable days of the week',
      'Practice meditation during favorable hours',
      'Keep your living space clean and organized'
    ],
    balancing: [
      'Perform Sun Salutation (Surya Namaskar) daily',
      'Light a lamp with sesame oil on Saturdays',
      'Recite Hanuman Chalisa for strength and courage'
    ],
    prayers: [
      'Om Gam Ganapataye Namaha - for removing obstacles',
      'Om Namah Shivaya - for spiritual growth',
      'Om Shri Lakshmi Narayanaya Namaha - for prosperity'
    ]
  };
};

// Generate Rudraksha recommendation
const generateRudrakshaRecommendation = (coreNumbers: CoreNumbers) => {
  const recommendations: { [key: number]: { name: string; benefits: string[]; instructions: string } } = {
    1: {
      name: '1 Mukhi Rudraksha',
      benefits: ['Enhances leadership qualities', 'Brings clarity of thought', 'Removes ego and pride', 'Connects with divine consciousness', 'Improves concentration'],
      instructions: 'Wear on Monday after proper energization. Can be worn as pendant or bracelet.'
    },
    2: {
      name: '2 Mukhi Rudraksha',
      benefits: ['Improves relationships', 'Enhances emotional balance', 'Brings harmony in partnerships', 'Develops patience', 'Strengthens family bonds'],
      instructions: 'Wear on Monday after chanting Om Namah Shivaya 108 times.'
    },
    3: {
      name: '3 Mukhi Rudraksha',
      benefits: ['Enhances communication skills', 'Boosts creativity', 'Improves self-confidence', 'Removes past karma', 'Brings success in education'],
      instructions: 'Wear on Tuesday or Thursday after proper purification rituals.'
    },
    4: {
      name: '4 Mukhi Rudraksha',
      benefits: ['Enhances knowledge and wisdom', 'Improves memory power', 'Brings stability in life', 'Helps in decision making', 'Develops organizational skills'],
      instructions: 'Wear on Sunday or Thursday after energizing with Brahma mantra.'
    },
    5: {
      name: '5 Mukhi Rudraksha',
      benefits: ['Brings overall well-being', 'Enhances spiritual growth', 'Improves health', 'Removes negative energy', 'Brings peace of mind'],
      instructions: 'Can be worn daily. Most commonly used Rudraksha with powerful benefits.'
    },
    6: {
      name: '6 Mukhi Rudraksha',
      benefits: ['Enhances artistic abilities', 'Improves relationships', 'Brings luxury and comfort', 'Develops emotional intelligence', 'Attracts love and affection'],
      instructions: 'Wear on Friday after offering prayers to Goddess Lakshmi.'
    },
    7: {
      name: '7 Mukhi Rudraksha',
      benefits: ['Enhances spiritual powers', 'Improves intuition', 'Brings good fortune', 'Removes obstacles', 'Develops analytical abilities'],
      instructions: 'Wear on Saturday after energizing with Maa Lakshmi mantra.'
    },
    8: {
      name: '8 Mukhi Rudraksha',
      benefits: ['Removes obstacles', 'Brings success in business', 'Enhances leadership qualities', 'Improves analytical thinking', 'Brings material prosperity'],
      instructions: 'Wear on Saturday or Tuesday after proper Ganesha puja.'
    },
    9: {
      name: '9 Mukhi Rudraksha',
      benefits: ['Enhances spiritual energy', 'Brings courage and confidence', 'Improves determination', 'Develops humanitarian qualities', 'Brings divine blessings'],
      instructions: 'Wear on Tuesday after chanting Nav Durga mantras.'
    }
  };
  
  const mulank = coreNumbers.mulank;
  const rec = recommendations[mulank] || recommendations[5];
  
  return {
    recommendation: `${rec.name} (based on your Mulank ${mulank})`,
    benefits: rec.benefits,
    instructions: rec.instructions
  };
};

// Helper function for compatibility description
const getCompatibilityDescription = (rating: string): string => {
  switch (rating) {
    case 'Highly Compatible':
      return 'Excellent vibrational match supporting success and harmony';
    case 'Compatible':
      return 'Good energy alignment with positive outcomes';
    case 'Neutral':
      return 'Balanced energy with room for improvement';
    case 'Incompatible':
      return 'Energy mismatch requiring correction for better results';
    default:
      return '';
  }
};

// Generate complete report data
export const generateReportData = (userInput: UserInput): ReportData => {
  // Calculate core numbers
  const mulankResult = calculateMulank(userInput.dateOfBirth);
  const bhagyankResult = calculateBhagyank(userInput.dateOfBirth);
  const nameResult = calculateNameNumber(userInput.fullName);
  const mobileResult = calculateMobileAnk(userInput.mobileNumber);
  
  const coreNumbers: CoreNumbers = {
    mulank: mulankResult.value,
    bhagyank: bhagyankResult.value,
    nameNumber: nameResult,
    mobileAnk: mobileResult.value
  };
  
  // Compatibility analysis
  const nameCompatibility = checkCompatibility(coreNumbers.nameNumber.reduced, coreNumbers.mulank);
  const mobileCompatibility = checkCompatibility(coreNumbers.mobileAnk, coreNumbers.mulank);
  
  const firstName = userInput.fullName.split(' ')[0];
  const nameSuggestions = nameCompatibility === 'Highly Compatible' 
    ? ['Keep current name as it is highly compatible']
    : generateNameSuggestions(firstName, coreNumbers.nameNumber.reduced, [coreNumbers.mulank, coreNumbers.bhagyank], userInput.gender);
  
  const mobileSuggestions = mobileCompatibility === 'Highly Compatible'
    ? ['Keep current mobile number as it is highly compatible']
    : generateMobileSuggestions(userInput.mobileNumber, [coreNumbers.mulank, coreNumbers.bhagyank]);
  
  const harmonyScore = calculateHarmonyScore(coreNumbers);
  const yogAnalysis = analyzeMobileYogs(userInput.mobileNumber);
  const positionAnalysis = analyzePositions(userInput.mobileNumber);
  const nameNumerologyTable = createNameNumerologyTable(userInput.fullName);
  
  // Grid analysis
  const dobDigits = userInput.dateOfBirth.replace(/-/g, '').split('').map(d => parseInt(d));
  const mobileDigits = userInput.mobileNumber.split('').map(d => parseInt(d));
  
  const gridAnalysis = {
    dobLoShu: generateLoShuGrid(dobDigits),
    mobileLoShu: generateLoShuGrid(mobileDigits),
    dobVedic: generateVedicGrid(dobDigits),
    mobileVedic: generateVedicGrid(mobileDigits)
  };
  
  const dashaYog = generateDashaYog(userInput, coreNumbers);
  
  // Generate lucky numbers for years 2025-2028
  const luckyNumbers = [
    { year: 2025, number: reduceToSingleDigit(2025 + coreNumbers.bhagyank), effect: 'Brings new opportunities and fresh starts' },
    { year: 2026, number: reduceToSingleDigit(2026 + coreNumbers.bhagyank), effect: 'Enhances relationships and partnerships' },
    { year: 2027, number: reduceToSingleDigit(2027 + coreNumbers.bhagyank), effect: 'Promotes creative expression and communication' },
    { year: 2028, number: reduceToSingleDigit(2028 + coreNumbers.bhagyank), effect: 'Supports stability and long-term goals' }
  ];
  
  return {
    userInput,
    coreNumbers,
    calculations: {
      mulankCalc: mulankResult.calculation,
      bhagyankCalc: bhagyankResult.calculation,
      nameCalc: nameResult.calculation,
      mobileCalc: mobileResult.calculation
    },
    compatibility: {
      nameCompatibility: {
        rating: nameCompatibility,
        description: getCompatibilityDescription(nameCompatibility)
      },
      mobileCompatibility: {
        rating: mobileCompatibility,
        description: getCompatibilityDescription(mobileCompatibility)
      },
      nameSuggestions,
      mobileSuggestions
    },
    yogAnalysis,
    positionAnalysis,
    nameNumerologyTable,
    gridAnalysis,
    harmonyScore,
    universalEnergies: generateUniversalEnergies(coreNumbers, userInput.gender),
    dashaYog,
    luckyNumbers,
    remedies: generateRemedies(coreNumbers),
    rudraksha: generateRudrakshaRecommendation(coreNumbers)
  };
};