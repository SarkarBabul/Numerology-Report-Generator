import React from 'react';
import { Gem, Star, Info } from 'lucide-react';
import { ReportData } from '../../types';

interface RudrakshaProp {
  reportData: ReportData;
}

const Rudraksha: React.FC<RudrakshaProp> = ({ reportData }) => {
  const { coreNumbers } = reportData;

  const getRudrakshRecommendation = (coreNumber: number) => {
    const recommendations: { [key: number]: {
      type: string,
      ruling: string,
      benefits: string[],
      wearingInstructions: string[]
    }} = {
      1: {
        type: '1 Mukhi Rudraksha',
        ruling: 'Ruled by Lord Shiva (Sun)',
        benefits: [
          'Enhances leadership qualities and self-confidence',
          'Removes ego and promotes spiritual enlightenment', 
          'Improves concentration and mental clarity',
          'Brings success in all endeavors',
          'Provides protection from negative energies'
        ],
        wearingInstructions: [
          'Wear on Monday morning after proper puja',
          'Thread with red or yellow silk thread',
          'Chant "Om Namah Shivaya" 108 times before wearing',
          'Can be worn as pendant or bracelet on right hand'
        ]
      },
      2: {
        type: '2 Mukhi Rudraksha',
        ruling: 'Ruled by Lord Ardhnarishwara (Moon)',
        benefits: [
          'Enhances relationships and emotional balance',
          'Improves cooperation and partnership abilities',
          'Helps in overcoming stress and anxiety',
          'Brings harmony in married life',
          'Develops intuition and emotional intelligence'
        ],
        wearingInstructions: [
          'Wear on Monday morning after proper puja',
          'Thread with white or silver thread',
          'Chant "Om Namah" 108 times daily',
          'Best worn close to heart as pendant'
        ]
      },
      3: {
        type: '3 Mukhi Rudraksha',
        ruling: 'Ruled by Lord Agni (Mars)',
        benefits: [
          'Boosts creativity and self-expression',
          'Enhances communication skills',
          'Removes inferiority complex and depression',
          'Improves artistic abilities',
          'Provides energy and motivation'
        ],
        wearingInstructions: [
          'Wear on Tuesday morning after proper puja',
          'Thread with red thread',
          'Chant "Om Kleem Namah" 108 times',
          'Can be worn as bracelet or pendant'
        ]
      },
      4: {
        type: '4 Mukhi Rudraksha',
        ruling: 'Ruled by Lord Brahma (Mercury)',
        benefits: [
          'Improves memory and learning abilities',
          'Enhances logical thinking and analysis',
          'Brings stability and methodical approach',
          'Helpful for students and researchers',
          'Reduces mental stress and confusion'
        ],
        wearingInstructions: [
          'Wear on Wednesday morning after proper puja',
          'Thread with yellow or green thread',
          'Chant "Om Hreem Namah" 108 times',
          'Best worn on right wrist'
        ]
      },
      5: {
        type: '5 Mukhi Rudraksha',
        ruling: 'Ruled by Lord Kalagni (Jupiter)',
        benefits: [
          'Brings peace and tranquility of mind',
          'Improves health and vitality',
          'Enhances spiritual growth',
          'Provides protection during travel',
          'Balances all five elements in body'
        ],
        wearingInstructions: [
          'Wear on Thursday morning after proper puja',
          'Thread with white thread',
          'Chant "Om Namah Shivaya" 108 times',
          'Most versatile, can be worn daily'
        ]
      },
      6: {
        type: '6 Mukhi Rudraksha',
        ruling: 'Ruled by Lord Kartikeya (Venus)',
        benefits: [
          'Enhances willpower and focus',
          'Improves learning and knowledge retention',
          'Brings success in competitive exams',
          'Helpful for artistic pursuits',
          'Increases charm and attractiveness'
        ],
        wearingInstructions: [
          'Wear on Friday morning after proper puja',
          'Thread with white or yellow thread',
          'Chant "Om Hreem Hoom Namah" 108 times',
          'Wear close to heart for better results'
        ]
      },
      7: {
        type: '7 Mukhi Rudraksha',
        ruling: 'Ruled by Goddess Lakshmi (Ketu)',
        benefits: [
          'Brings wealth and prosperity',
          'Enhances spiritual wisdom',
          'Improves intuition and psychic abilities',
          'Helpful for meditation and spiritual practices',
          'Removes financial obstacles'
        ],
        wearingInstructions: [
          'Wear on Saturday morning after proper puja',
          'Thread with black or blue thread',
          'Chant "Om Hum Namah" 108 times',
          'Can be worn as pendant or kept in purse'
        ]
      },
      8: {
        type: '8 Mukhi Rudraksha',
        ruling: 'Ruled by Lord Ganesha (Rahu)',
        benefits: [
          'Removes obstacles in all endeavors',
          'Brings success in business and career',
          'Improves analytical abilities',
          'Provides protection from negative influences',
          'Enhances leadership and management skills'
        ],
        wearingInstructions: [
          'Wear on Wednesday morning after proper puja',
          'Thread with red thread',
          'Chant "Om Gam Ganapataye Namah" 108 times',
          'Best worn on right hand as bracelet'
        ]
      },
      9: {
        type: '9 Mukhi Rudraksha',
        ruling: 'Ruled by Goddess Durga (Mars)',
        benefits: [
          'Enhances courage and fearlessness',
          'Improves self-confidence and determination',
          'Brings success and name recognition',
          'Helpful for those in service professions',
          'Provides protection from enemies and negative forces'
        ],
        wearingInstructions: [
          'Wear on Tuesday morning after proper puja',
          'Thread with red thread',
          'Chant "Om Hreem Hoom Namah" 108 times',
          'Wear as pendant close to heart'
        ]
      }
    };

    return recommendations[coreNumber] || recommendations[5]; // Default to 5 Mukhi if not found
  };

  const recommendation = getRudrakshRecommendation(coreNumbers.mulank);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Gem className="w-6 h-6 text-orange-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 11: Rudraksha Recommendations</h2>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          Based on your core number <span className="font-bold text-orange-600">{coreNumbers.mulank}</span>, 
          the following Rudraksha is recommended to enhance your natural qualities and balance your energies:
        </p>
      </div>

      {/* Main Recommendation */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200 mb-8">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gem className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{recommendation.type}</h3>
          <p className="text-orange-700 font-semibold">{recommendation.ruling}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-orange-200">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-orange-600" />
            <span>Key Benefits:</span>
          </h4>
          <ul className="space-y-2">
            {recommendation.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="bg-orange-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Wearing Instructions */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
        <h4 className="font-bold text-blue-900 mb-4 flex items-center space-x-2">
          <Info className="w-5 h-5" />
          <span>Wearing Instructions:</span>
        </h4>
        <ul className="space-y-2">
          {recommendation.wearingInstructions.map((instruction, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="bg-blue-100 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-blue-800">{instruction}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* General Guidelines */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">General Guidelines for Rudraksha:</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Do's:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Keep it clean and treat with respect</li>
              <li>• Energize with mantras regularly</li>
              <li>• Wear with positive intentions</li>
              <li>• Store in clean, sacred place when not wearing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Don'ts:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Don't wear during funeral ceremonies</li>
              <li>• Avoid wearing while consuming alcohol</li>
              <li>• Don't let others wear your personal Rudraksha</li>
              <li>• Don't wear if thread becomes damaged</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
        <p className="text-amber-800 text-sm">
          <span className="font-semibold">Note:</span> These recommendations are based on your core number {coreNumbers.mulank}. 
          For personalized consultation on specific Rudraksha selection and energization, please consult with our certified experts.
        </p>
      </div>
    </div>
  );
};

export default Rudraksha;