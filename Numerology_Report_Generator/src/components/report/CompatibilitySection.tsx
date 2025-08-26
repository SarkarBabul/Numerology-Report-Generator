import React from 'react';
import { Heart, Phone, User, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { ReportData } from '../../types';

interface CompatibilityAnalysisProps {
  reportData: ReportData;
}

const CompatibilityAnalysis: React.FC<CompatibilityAnalysisProps> = ({ reportData }) => {
  const { coreNumbers, nameCompatibility, mobileCompatibility, nameSuggestions, mobileSuggestions } = reportData;

  const getCompatibilityIcon = (rating: string) => {
    switch (rating) {
      case 'Highly Compatible':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'Compatible':
        return <CheckCircle className="w-6 h-6 text-blue-500" />;
      case 'Neutral':
        return <AlertCircle className="w-6 h-6 text-yellow-500" />;
      case 'Incompatible':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-500" />;
    }
  };

  const getCompatibilityColor = (rating: string) => {
    switch (rating) {
      case 'Highly Compatible':
        return 'bg-green-50 border-green-200';
      case 'Compatible':
        return 'bg-blue-50 border-blue-200';
      case 'Neutral':
        return 'bg-yellow-50 border-yellow-200';
      case 'Incompatible':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Heart className="w-6 h-6 text-pink-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 2: Compatibility Analysis</h2>
      </div>

      <div className="space-y-8">
        {/* Name Compatibility */}
        <div className={`p-6 rounded-xl border ${getCompatibilityColor(nameCompatibility.rating)}`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-600" />
              <h3 className="text-xl font-bold text-gray-900">Name Number Compatibility</h3>
            </div>
            <div className="flex items-center space-x-2">
              {getCompatibilityIcon(nameCompatibility.rating)}
              <span className="font-semibold">{nameCompatibility.rating}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg border">
              <p className="text-sm text-gray-600">Name Number</p>
              <p className="text-2xl font-bold text-gray-900">{coreNumbers.nameNumber}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <p className="text-sm text-gray-600">vs</p>
              <p className="text-lg font-medium text-gray-600">Mulank</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <p className="text-sm text-gray-600">Mulank</p>
              <p className="text-2xl font-bold text-gray-900">{coreNumbers.mulank}</p>
            </div>
          </div>

          {nameCompatibility.rating === 'Highly Compatible' ? (
            <div className="bg-green-100 border border-green-200 p-4 rounded-lg">
              <p className="text-green-800 font-medium">
                🎉 Excellent! Your current name is highly compatible with your core nature. 
                Keep your name as it is to maintain optimal vibrational harmony.
              </p>
            </div>
          ) : (
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Suggested Name Corrections:</h4>
              <div className="space-y-3">
                {nameSuggestions.map((suggestion, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-gray-900">{index + 1}. {suggestion.name}</p>
                      <div className="text-sm text-gray-600">
                        Compound: {suggestion.compound} → Reduced: {suggestion.reduced}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{suggestion.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Compatibility */}
        <div className={`p-6 rounded-xl border ${getCompatibilityColor(mobileCompatibility.rating)}`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <h3 className="text-xl font-bold text-gray-900">Mobile Number Compatibility</h3>
            </div>
            <div className="flex items-center space-x-2">
              {getCompatibilityIcon(mobileCompatibility.rating)}
              <span className="font-semibold">{mobileCompatibility.rating}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg border">
              <p className="text-sm text-gray-600">MobileAnk</p>
              <p className="text-2xl font-bold text-gray-900">{coreNumbers.mobileAnk}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <p className="text-sm text-gray-600">vs</p>
              <p className="text-lg font-medium text-gray-600">Bhagyank</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <p className="text-sm text-gray-600">Bhagyank</p>
              <p className="text-2xl font-bold text-gray-900">{coreNumbers.bhagyank}</p>
            </div>
          </div>

          {mobileCompatibility.rating === 'Highly Compatible' ? (
            <div className="bg-green-100 border border-green-200 p-4 rounded-lg">
              <p className="text-green-800 font-medium">
                🎉 Perfect! Your mobile number is highly compatible with your destiny. 
                Keep your current number to maintain optimal energy flow.
              </p>
            </div>
          ) : (
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Suggested Mobile Number Corrections:</h4>
              <div className="space-y-3">
                {mobileSuggestions.map((suggestion, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-gray-900">
                        {index + 1}. ...{suggestion.ending}
                      </p>
                      <div className="text-sm text-gray-600">
                        Sum: {suggestion.sum} → Reduced: {suggestion.reduced}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{suggestion.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompatibilityAnalysis;