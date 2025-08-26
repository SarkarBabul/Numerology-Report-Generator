import React from 'react';
import { Star, TrendingUp, AlertTriangle } from 'lucide-react';
import { ReportData } from '../../types';

interface HarmonyScoreProps {
  reportData: ReportData;
}

const HarmonyScore: React.FC<HarmonyScoreProps> = ({ reportData }) => {
  const { harmonyScore } = reportData;

  const getHarmonyLevel = (score: number): { level: string; stars: number; color: string } => {
    if (score >= 4.5) return { level: 'Excellent Harmony', stars: 5, color: 'text-green-600' };
    if (score >= 4) return { level: 'High Harmony', stars: 4, color: 'text-blue-600' };
    if (score >= 3.5) return { level: 'Good Harmony', stars: 4, color: 'text-yellow-600' };
    if (score >= 3) return { level: 'Moderate Harmony', stars: 3, color: 'text-orange-600' };
    return { level: 'Low Harmony', stars: 2, color: 'text-red-600' };
  };

  const harmonyInfo = getHarmonyLevel(harmonyScore);

  const getHarmonyIcon = () => {
    if (harmonyScore >= 4) return <TrendingUp className="w-8 h-8 text-green-600" />;
    return <AlertTriangle className="w-8 h-8 text-orange-600" />;
  };

  const getHarmonyAdvice = (score: number): { benefits?: string[]; improvements?: string[] } => {
    if (score >= 4) {
      return {
        benefits: [
          'Enhanced personal magnetism and charisma',
          'Improved success in business and relationships', 
          'Better decision-making through aligned energies',
          'Increased opportunities and favorable circumstances',
          'Natural flow of positive events and synchronicities'
        ]
      };
    } else {
      return {
        improvements: [
          'Consider implementing the name corrections suggested in Section 2',
          'Use the recommended mobile number endings for better compatibility',
          'Follow the remedies outlined in Section 10',
          'Wear suggested colors and Rudraksha for energy balance',
          'Practice daily meditation and positive affirmations',
          'Align daily activities with your favorable days and directions'
        ]
      };
    }
  };

  const advice = getHarmonyAdvice(harmonyScore);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Star className="w-6 h-6 text-purple-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 7: Overall Harmony Score</h2>
      </div>

      {/* Harmony Score Display */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 mb-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {getHarmonyIcon()}
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Overall Vibrational Harmony Score</h3>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className={`w-8 h-8 ${
                        index < harmonyInfo.stars 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {harmonyInfo.stars}/5 Stars
                </span>
              </div>
            </div>
          </div>
          
          <div className={`text-xl font-bold ${harmonyInfo.color} mb-2`}>
            {harmonyInfo.level}
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200 inline-block">
            <p className="text-3xl font-bold text-purple-600">{harmonyScore}/5</p>
            <p className="text-sm text-gray-600">Harmony Rating</p>
          </div>
        </div>
      </div>

      {/* High Harmony Benefits */}
      {advice.benefits && (
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-6">
          <h4 className="font-bold text-green-900 mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>High Harmony Benefits - What This Achieves:</span>
          </h4>
          <ul className="space-y-2">
            {advice.benefits.map((benefit, index) => (
              <li key={index} className="text-green-800 flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Improvement Suggestions */}
      {advice.improvements && (
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
          <h4 className="font-bold text-orange-900 mb-4 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>How to Improve Your Harmony Score:</span>
          </h4>
          <ul className="space-y-2">
            {advice.improvements.map((improvement, index) => (
              <li key={index} className="text-orange-800 flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Harmony Score Explanation */}
      <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-blue-900 mb-3">Understanding Your Harmony Score:</h4>
        <p className="text-blue-800 leading-relaxed">
          Your Vibrational Harmony Score is calculated based on the compatibility between your core numbers 
          (name number with mulank, and mobile number with bhagyank). Higher scores indicate better alignment 
          between your personal energy and the tools you use daily (name and mobile), leading to smoother 
          life experiences and enhanced success potential.
        </p>
      </div>
    </div>
  );
};

export default HarmonyScore;