import React from 'react';
import { Shield, Lightbulb, Heart } from 'lucide-react';
import { ReportData } from '../../types';

interface RemediesSectionProps {
  reportData: ReportData;
}

const RemediesSection: React.FC<RemediesSectionProps> = ({ reportData }) => {
  const { coreNumbers, userData } = reportData;

  const getGeneralRemedies = (): string[] => {
    const challengingNumbers = [
      coreNumbers.mulank,
      coreNumbers.bhagyank, 
      coreNumbers.nameNumber,
      coreNumbers.mobileAnk
    ].filter(num => [4, 8].includes(Number(num)));

    const baseRemedies = [
      'Chant "Om Gam Ganapataye Namaha" 108 times daily for removing obstacles',
      'Light a ghee lamp every Tuesday and Saturday evening',
      'Donate food to the needy on your birth date every month',
      'Keep a Tulsi plant at home and water it daily with devotion',
      'Practice gratitude by writing 3 positive things daily before sleep'
    ];

    return baseRemedies;
  };

  const getBalancingRemedies = (): string[] => {
    const primaryNumber = coreNumbers.mulank;
    const balancingRemedies: { [key: number]: string[] } = {
      1: [
        'Practice humility through service to others weekly',
        'Meditate for 15 minutes daily to balance ego tendencies',
        'Wear pearl or moonstone to soften dominant energy'
      ],
      2: [
        'Build confidence through public speaking or leadership roles',
        'Wear red coral or ruby to strengthen personal power',
        'Practice assertiveness exercises daily'
      ],
      3: [
        'Channel scattered energy through focused meditation',
        'Avoid gossip and practice mindful communication',
        'Wear yellow sapphire to enhance wisdom'
      ],
      4: [
        'Introduce flexibility through spontaneous activities',
        'Practice creative hobbies to balance rigid thinking',
        'Wear emerald or green aventurine for emotional balance'
      ],
      5: [
        'Develop consistency through daily routines',
        'Practice grounding exercises and spend time in nature',
        'Wear blue sapphire or lapis lazuli for stability'
      ],
      6: [
        'Balance giving by learning to receive gracefully',
        'Set healthy boundaries in relationships',
        'Wear diamond or clear quartz for clarity'
      ],
      7: [
        'Engage in social activities to prevent isolation',
        'Practice expressing emotions openly',
        'Wear amethyst or labradorite for emotional connection'
      ],
      8: [
        'Practice detachment from material outcomes',
        'Engage in charitable activities regularly',
        'Wear hessonite garnet or tiger eye for spiritual grounding'
      ],
      9: [
        'Focus on personal needs alongside universal service',
        'Practice saying no when necessary',
        'Wear red jasper or carnelian for personal strength'
      ]
    };

    return balancingRemedies[primaryNumber] || balancingRemedies[1];
  };

  const getPrayersAndMentalTuning = () => {
    return {
      prayers: [
        'Morning Prayer: "Om Sarve Bhavantu Sukhinah" (May all beings be happy)',
        'Evening Gratitude: Thank the universe for the day\'s experiences',
        'Weekly Intention: Set positive intentions every Sunday for the coming week'
      ],
      mentalTuning: [
        'Daily Affirmation: "I am aligned with my highest purpose and potential"',
        'Visualization: Spend 5 minutes daily visualizing your goals as achieved',
        'Mindfulness: Practice present moment awareness throughout the day',
        'Self-Reflection: Weekly review of actions and their alignment with values'
      ]
    };
  };

  const generalRemedies = getGeneralRemedies();
  const balancingRemedies = getBalancingRemedies();
  const { prayers, mentalTuning } = getPrayersAndMentalTuning();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="w-6 h-6 text-green-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 10: Remedies</h2>
      </div>

      <div className="space-y-8">
        {/* General Remedies */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900">General Remedies</h3>
          </div>
          <p className="text-gray-700 mb-4">
            These universal remedies help balance challenging planetary influences and enhance positive vibrations:
          </p>
          <ul className="space-y-3">
            {generalRemedies.map((remedy, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">{remedy}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Balancing Remedies */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">Balancing Remedies</h3>
          </div>
          <p className="text-gray-700 mb-4">
            These specific remedies are tailored to balance your core number ({coreNumbers.mulank}) characteristics:
          </p>
          <ul className="space-y-3">
            {balancingRemedies.map((remedy, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">{remedy}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prayers and Mental Tuning */}
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-5 h-5 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-900">Prayers and Mental Tuning</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Prayers */}
            <div>
              <h4 className="font-semibold text-purple-900 mb-3">Recommended Prayers:</h4>
              <ul className="space-y-3">
                {prayers.map((prayer, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">{prayer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mental Tuning */}
            <div>
              <h4 className="font-semibold text-purple-900 mb-3">Mental Tuning Practices:</h4>
              <ul className="space-y-3">
                {mentalTuning.map((practice, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Remedy Guidelines */}
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
          <h4 className="font-bold text-amber-900 mb-3">Important Guidelines:</h4>
          <div className="space-y-2 text-amber-800">
            <p>• <span className="font-semibold">Consistency:</span> Practice remedies regularly for at least 40 days to see effects</p>
            <p>• <span className="font-semibold">Faith:</span> Perform all practices with devotion and positive intention</p>
            <p>• <span className="font-semibold">Patience:</span> Allow time for energetic shifts to manifest in your life</p>
            <p>• <span className="font-semibold">Adaptation:</span> Modify practices as needed while maintaining their essence</p>
            <p>• <span className="font-semibold">Integration:</span> Combine remedies with practical actions for best results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemediesSection;