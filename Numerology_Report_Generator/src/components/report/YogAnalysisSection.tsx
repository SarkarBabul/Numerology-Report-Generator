import React from 'react';
import { Zap } from 'lucide-react';
import { ReportData } from '../../types';

interface YogAnalysisSectionProps {
  reportData: ReportData;
}

const YogAnalysisSection: React.FC<YogAnalysisSectionProps> = ({ reportData }) => {
  const { yogAnalysis, userData } = reportData;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Zap className="w-6 h-6 text-yellow-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 3: Yog Analysis</h2>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          Your mobile number <span className="font-bold">{userData.mobileNumber}</span> contains various digit combinations 
          that create specific planetary yogs (energetic connections). These combinations influence different aspects of your life.
        </p>
      </div>

      <div className="grid gap-4">
        {yogAnalysis.map((yog, index) => (
          <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <span className="font-bold text-yellow-800">{yog.combination}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-2">{yog.planets}</h4>
                <p className="text-gray-700">{yog.effects}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-blue-900 mb-3">Understanding Yog Effects:</h4>
        <p className="text-blue-800 leading-relaxed">
          These planetary combinations in your mobile number create energy patterns that influence your daily interactions, 
          business relationships, and overall life experiences. Positive yogs enhance beneficial qualities while 
          challenging combinations can be balanced through awareness and specific remedies.
        </p>
      </div>
    </div>
  );
};

export default YogAnalysisSection;