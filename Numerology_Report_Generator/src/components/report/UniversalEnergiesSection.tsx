import React from 'react';
import { Globe, Heart, Activity, Briefcase, Calendar, Palette, Music, Compass } from 'lucide-react';
import { ReportData } from '../../types';

interface UniversalEnergiesProps {
  reportData: ReportData;
}

const UniversalEnergies: React.FC<UniversalEnergiesProps> = ({ reportData }) => {
  const { coreNumbers, userData } = reportData;

  // Generate recommendations based on core numbers
  const generateRecommendations = () => {
    const primaryNumber = coreNumbers.mulank;
    const destinyNumber = coreNumbers.bhagyank;
    const nameNumber = coreNumbers.nameNumber;

    return {
      marriedLife: {
        compatibleNumbers: getCompatibleNumbers(primaryNumber),
        partnerType: getPartnerType(primaryNumber),
        marriageOutlook: getMarriageOutlook(primaryNumber, destinyNumber),
        tips: getMarriageTips(primaryNumber, destinyNumber)
      },
      health: {
        tendency: getHealthTendency(primaryNumber),
        suggestions: getHealthSuggestions(primaryNumber, destinyNumber)
      },
      profession: getProfessionSuggestions(primaryNumber, destinyNumber, nameNumber),
      favorableDays: getFavorableDays(primaryNumber, destinyNumber),
      favorableColors: getFavorableColors(primaryNumber, destinyNumber),
      music: getMusicRecommendations(primaryNumber),
      directions: getFavorableDirections(primaryNumber, destinyNumber)
    };
  };

  const recommendations = generateRecommendations();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Globe className="w-6 h-6 text-emerald-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 8: Universal Energies and Daily Living</h2>
      </div>

      <div className="space-y-8">
        {/* Married Life */}
        <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="w-5 h-5 text-pink-600" />
            <h3 className="text-xl font-bold text-gray-900">Married Life</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Compatible Partner Numbers:</p>
              <p className="text-lg font-bold text-pink-600 mb-4">
                {recommendations.marriedLife.compatibleNumbers.join(', ')}
              </p>
              
              <p className="text-sm text-gray-600 font-medium mb-2">Ideal Partner Type:</p>
              <p className="text-gray-700 mb-4">{recommendations.marriedLife.partnerType}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Marriage Outlook:</p>
              <p className="text-gray-700 mb-4">{recommendations.marriedLife.marriageOutlook}</p>
              
              <p className="text-sm text-gray-600 font-medium mb-2">Tips to {recommendations.marriedLife.marriageOutlook.includes('positive') ? 'maintain' : 'improve'} your marriage:</p>
              <ul className="space-y-1">
                {recommendations.marriedLife.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start space-x-2">
                    <span className="text-pink-600">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Health */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900">Health</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Health Tendency:</p>
              <p className="text-gray-700 mb-4">{recommendations.health.tendency}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Health Suggestions:</p>
              <ul className="space-y-1">
                {recommendations.health.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start space-x-2">
                    <span className="text-green-600">•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Profession */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">Profession</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Best Suited Professions:</p>
              <ul className="space-y-1">
                {recommendations.profession.primary.map((prof, index) => (
                  <li key={index} className="text-blue-700 font-medium">• {prof}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Alternative Career Options:</p>
              <ul className="space-y-1">
                {recommendations.profession.secondary.map((prof, index) => (
                  <li key={index} className="text-gray-700">• {prof}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Favorable Days, Colors, Music, Directions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Favorable Days */}
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-yellow-600" />
              <h3 className="text-lg font-bold text-gray-900">Favorable Days</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 font-medium">Best Days:</p>
                <p className="text-yellow-700 font-bold">{recommendations.favorableDays.best.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">For Important Decisions:</p>
                <p className="text-yellow-700">{recommendations.favorableDays.decisions}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">For New Beginnings:</p>
                <p className="text-yellow-700">{recommendations.favorableDays.newBeginnings}</p>
              </div>
            </div>
          </div>

          {/* Favorable Colors */}
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <Palette className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-bold text-gray-900">Favorable Colors</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 font-medium">Primary Colors:</p>
                <p className="text-purple-700 font-bold">{recommendations.favorableColors.primary.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Secondary Colors:</p>
                <p className="text-purple-700">{recommendations.favorableColors.secondary.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Avoid:</p>
                <p className="text-red-600">{recommendations.favorableColors.avoid.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Music */}
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
            <div className="flex items-center space-x-3 mb-4">
              <Music className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-gray-900">Music</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 font-medium">Recommended:</p>
                <p className="text-indigo-700 font-medium">{recommendations.music.recommended.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Healing Frequencies:</p>
                <p className="text-indigo-700">{recommendations.music.frequencies.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Avoid:</p>
                <p className="text-red-600">{recommendations.music.avoid.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Favorable Directions */}
          <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
            <div className="flex items-center space-x-3 mb-4">
              <Compass className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-bold text-gray-900">Favorable Directions</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 font-medium">Sleeping:</p>
                <p className="text-teal-700 font-bold">{recommendations.directions.sleeping}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Working:</p>
                <p className="text-teal-700">{recommendations.directions.working}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Meditation:</p>
                <p className="text-teal-700">{recommendations.directions.meditation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions for generating recommendations
const getCompatibleNumbers = (num: number): number[] => {
  const compatibility: { [key: number]: number[] } = {
    1: [1, 5, 7], 2: [2, 4, 8], 3: [3, 6, 9], 4: [2, 4, 8], 5: [1, 5, 7],
    6: [3, 6, 9], 7: [1, 5, 7], 8: [2, 4, 8], 9: [3, 6, 9]
  };
  return compatibility[num] || [1, 5, 9];
};

const getPartnerType = (num: number): string => {
  const types: { [key: number]: string } = {
    1: 'confident, ambitious partner who respects your independence',
    2: 'gentle, supportive partner who values emotional connection',
    3: 'creative, expressive partner who enjoys communication',
    4: 'stable, reliable partner who values security',
    5: 'adventurous, free-spirited partner who loves variety',
    6: 'caring, family-oriented partner who values commitment',
    7: 'intellectual, spiritual partner who appreciates depth',
    8: 'successful, goal-oriented partner who shares ambitions',
    9: 'compassionate, humanitarian partner with broad interests'
  };
  return types[num] || 'understanding and compatible partner';
};

const getMarriageOutlook = (mulank: number, bhagyank: number): string => {
  const outlooks: { [key: number]: string } = {
    1: 'Your married life will be dynamic with strong leadership roles',
    2: 'You will have a harmonious and emotionally fulfilling marriage',
    3: 'Your marriage will be filled with creativity and good communication',
    4: 'You will build a stable and secure married life',
    5: 'Your marriage will involve adventure and frequent changes',
    6: 'You will have a loving, family-centered married life',
    7: 'Your marriage will have spiritual depth and understanding',
    8: 'Your married life will focus on material success and achievement',
    9: 'You will have a marriage based on universal love and service'
  };
  return outlooks[mulank] || 'Your married life will be balanced and harmonious';
};

const getMarriageTips = (mulank: number, bhagyank: number): string[] => {
  const tips: { [key: number]: string[] } = {
    1: ['Practice patience and avoid being overly controlling', 'Allow your partner space for their own leadership', 'Focus on shared goals and mutual respect'],
    2: ['Communicate feelings openly and honestly', 'Create peaceful home environment', 'Practice patience during disagreements'],
    3: ['Maintain open communication channels', 'Share creative activities together', 'Express appreciation regularly'],
    4: ['Build strong foundations through consistent effort', 'Plan finances and future together', 'Be patient with gradual progress'],
    5: ['Allow each other freedom and independence', 'Embrace changes and new experiences together', 'Maintain variety in your relationship'],
    6: ['Focus on family values and togetherness', 'Create a nurturing home environment', 'Balance giving and receiving love'],
    7: ['Respect each other\'s need for solitude', 'Share spiritual practices or interests', 'Maintain intellectual connection'],
    8: ['Support each other\'s career ambitions', 'Plan long-term financial security', 'Balance work and personal time'],
    9: ['Practice compassion and understanding', 'Support each other\'s humanitarian interests', 'Maintain broad perspective on relationships']
  };
  return tips[mulank] || ['Practice understanding and patience', 'Communicate openly and honestly', 'Support each other\'s growth'];
};

const getHealthTendency = (num: number): string => {
  const tendencies: { [key: number]: string } = {
    1: 'Generally strong with focus on head and heart health',
    2: 'Sensitive system requiring gentle care and emotional balance',
    3: 'Good health with attention needed for throat and nervous system',
    4: 'Steady health with focus on building physical endurance',
    5: 'Variable health requiring balance and moderation',
    6: 'Generally good health with focus on digestive and family care',
    7: 'Delicate health requiring spiritual practices and mental peace',
    8: 'Strong constitution with attention to stress management',
    9: 'Generally robust with focus on circulation and universal healing'
  };
  return tendencies[num] || 'Generally balanced health requiring regular care';
};

const getHealthSuggestions = (mulank: number, bhagyank: number): string[] => {
  const suggestions: { [key: number]: string[] } = {
    1: ['Regular cardiovascular exercise', 'Stress management through leadership roles', 'Balanced diet with protein focus'],
    2: ['Gentle yoga and meditation', 'Emotional balance through counseling if needed', 'Avoid overstimulation and stress'],
    3: ['Creative expression for mental health', 'Voice exercises and throat care', 'Social activities for emotional wellbeing'],
    4: ['Consistent exercise routine', 'Balanced nutrition with whole foods', 'Regular health checkups and preventive care'],
    5: ['Varied physical activities and sports', 'Travel and fresh air for vitality', 'Moderate eating and drinking habits'],
    6: ['Family activities and nurturing others', 'Balanced diet with focus on home-cooked meals', 'Regular rest and family time'],
    7: ['Meditation and spiritual practices', 'Quiet environments for mental peace', 'Natural remedies and holistic healing'],
    8: ['High-intensity workouts for stress relief', 'Executive health programs', 'Work-life balance for stress management'],
    9: ['Service to others for emotional fulfillment', 'Diverse healing modalities', 'Universal healing practices like Reiki']
  };
  return suggestions[mulank] || ['Regular exercise and balanced diet', 'Stress management techniques', 'Adequate sleep and rest'];
};

const getProfessionSuggestions = (mulank: number, bhagyank: number, nameNumber: number) => {
  const professions: { [key: number]: { primary: string[], secondary: string[] } } = {
    1: {
      primary: ['CEO/Executive Leadership', 'Entrepreneur', 'Government Officer', 'Military/Police'],
      secondary: ['Sports Leadership', 'Politics', 'Independent Consulting', 'Innovation Management']
    },
    2: {
      primary: ['Diplomacy', 'Counseling/Psychology', 'Human Resources', 'Social Work'],
      secondary: ['Customer Service', 'Partnership Roles', 'Mediation', 'Team Coordination']
    },
    3: {
      primary: ['Arts and Entertainment', 'Communication/Media', 'Writing/Journalism', 'Teaching'],
      secondary: ['Marketing/Advertising', 'Public Relations', 'Design', 'Broadcasting']
    },
    4: {
      primary: ['Engineering', 'Construction', 'Banking/Finance', 'Administration'],
      secondary: ['Project Management', 'Real Estate', 'Manufacturing', 'Systems Analysis']
    },
    5: {
      primary: ['Travel/Tourism', 'Sales', 'Import/Export', 'Adventure Sports'],
      secondary: ['Marketing', 'Public Relations', 'Event Management', 'Transportation']
    },
    6: {
      primary: ['Healthcare/Medicine', 'Education', 'Family Business', 'Social Services'],
      secondary: ['Hospitality', 'Counseling', 'Child Care', 'Community Service']
    },
    7: {
      primary: ['Research/Analysis', 'Spirituality/Religion', 'Technology', 'Writing'],
      secondary: ['Psychology', 'Archaeology', 'Philosophy', 'Scientific Research']
    },
    8: {
      primary: ['Business/Corporate', 'Finance/Investment', 'Law', 'Real Estate'],
      secondary: ['Manufacturing', 'Politics', 'Management Consulting', 'International Trade']
    },
    9: {
      primary: ['Humanitarian Work', 'Arts/Culture', 'Healing/Alternative Medicine', 'Philanthropy'],
      secondary: ['International Relations', 'Environmental Work', 'Spiritual Teaching', 'Global Business']
    }
  };
  return professions[mulank] || professions[1];
};

const getFavorableDays = (mulank: number, bhagyank: number) => {
  const days: { [key: number]: { best: string[], decisions: string, newBeginnings: string } } = {
    1: { best: ['Sunday', 'Monday'], decisions: 'Sunday', newBeginnings: 'Sunday' },
    2: { best: ['Monday', 'Friday'], decisions: 'Monday', newBeginnings: 'Monday' },
    3: { best: ['Tuesday', 'Thursday'], decisions: 'Thursday', newBeginnings: 'Tuesday' },
    4: { best: ['Wednesday', 'Saturday'], decisions: 'Wednesday', newBeginnings: 'Saturday' },
    5: { best: ['Wednesday', 'Friday'], decisions: 'Wednesday', newBeginnings: 'Friday' },
    6: { best: ['Tuesday', 'Friday'], decisions: 'Friday', newBeginnings: 'Tuesday' },
    7: { best: ['Monday', 'Sunday'], decisions: 'Monday', newBeginnings: 'Sunday' },
    8: { best: ['Saturday', 'Sunday'], decisions: 'Saturday', newBeginnings: 'Saturday' },
    9: { best: ['Tuesday', 'Thursday'], decisions: 'Tuesday', newBeginnings: 'Thursday' }
  };
  return days[mulank] || days[1];
};

const getFavorableColors = (mulank: number, bhagyank: number) => {
  const colors: { [key: number]: { primary: string[], secondary: string[], avoid: string[] } } = {
    1: { primary: ['Gold', 'Orange', 'Red'], secondary: ['Yellow', 'Copper'], avoid: ['Black', 'Dark Blue'] },
    2: { primary: ['White', 'Silver', 'Light Blue'], secondary: ['Cream', 'Light Green'], avoid: ['Red', 'Dark Colors'] },
    3: { primary: ['Yellow', 'Purple', 'Mauve'], secondary: ['Lilac', 'Light Pink'], avoid: ['Black', 'Dark Red'] },
    4: { primary: ['Blue', 'Grey', 'Khaki'], secondary: ['Navy', 'Steel Blue'], avoid: ['Bright Colors', 'Red'] },
    5: { primary: ['Green', 'White', 'Light Colors'], secondary: ['Turquoise', 'Light Blue'], avoid: ['Dark Colors', 'Black'] },
    6: { primary: ['Pink', 'Blue', 'Rose'], secondary: ['Light Green', 'Cream'], avoid: ['Black', 'Dark Colors'] },
    7: { primary: ['Violet', 'Purple', 'Green'], secondary: ['Sea Green', 'Light Blue'], avoid: ['Bright Red', 'Orange'] },
    8: { primary: ['Black', 'Dark Blue', 'Brown'], secondary: ['Grey', 'Maroon'], avoid: ['Bright Colors', 'Yellow'] },
    9: { primary: ['Red', 'Pink', 'Orange'], secondary: ['Yellow', 'Gold'], avoid: ['Black', 'Dark Blue'] }
  };
  return colors[mulank] || colors[1];
};

const getMusicRecommendations = (num: number) => {
  const music: { [key: number]: { recommended: string[], frequencies: string[], avoid: string[] } } = {
    1: { recommended: ['Classical', 'Motivational', 'Leadership themes'], frequencies: ['528 Hz', '741 Hz'], avoid: ['Heavy metal', 'Depressing music'] },
    2: { recommended: ['Soft', 'Romantic', 'Peaceful'], frequencies: ['528 Hz', '396 Hz'], avoid: ['Loud music', 'Aggressive sounds'] },
    3: { recommended: ['Upbeat', 'Creative', 'Expressive'], frequencies: ['528 Hz', '639 Hz'], avoid: ['Monotonous', 'Depressing'] },
    4: { recommended: ['Structured', 'Classical', 'Methodical'], frequencies: ['432 Hz', '528 Hz'], avoid: ['Chaotic', 'Too experimental'] },
    5: { recommended: ['Varied', 'World music', 'Adventurous'], frequencies: ['741 Hz', '852 Hz'], avoid: ['Monotonous', 'Restrictive'] },
    6: { recommended: ['Family-friendly', 'Nurturing', 'Healing'], frequencies: ['528 Hz', '396 Hz'], avoid: ['Violent themes', 'Harsh sounds'] },
    7: { recommended: ['Spiritual', 'Meditative', 'Mystical'], frequencies: ['963 Hz', '852 Hz'], avoid: ['Materialistic themes', 'Loud music'] },
    8: { recommended: ['Power music', 'Success themes', 'Corporate'], frequencies: ['741 Hz', '528 Hz'], avoid: ['Spiritual only', 'Too soft'] },
    9: { recommended: ['Universal', 'Healing', 'World music'], frequencies: ['963 Hz', '528 Hz'], avoid: ['Selfish themes', 'Narrow genres'] }
  };
  return music[num] || music[1];
};

const getFavorableDirections = (mulank: number, bhagyank: number) => {
  const directions: { [key: number]: { sleeping: string, working: string, meditation: string } } = {
    1: { sleeping: 'South or East', working: 'East or North', meditation: 'North-East' },
    2: { sleeping: 'North or West', working: 'North or West', meditation: 'North' },
    3: { sleeping: 'East or South', working: 'East or South', meditation: 'North-East' },
    4: { sleeping: 'South or West', working: 'South or West', meditation: 'South-West' },
    5: { sleeping: 'North or East', working: 'North or East', meditation: 'North-East' },
    6: { sleeping: 'North or West', working: 'North or West', meditation: 'North-West' },
    7: { sleeping: 'West or South', working: 'West or South', meditation: 'South-West' },
    8: { sleeping: 'South or West', working: 'South or West', meditation: 'South' },
    9: { sleeping: 'East or North', working: 'East or North', meditation: 'North-East' }
  };
  return directions[mulank] || directions[1];
};

export default UniversalEnergies;