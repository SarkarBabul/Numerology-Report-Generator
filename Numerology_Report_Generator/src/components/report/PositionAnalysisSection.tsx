import React from 'react';
import { MapPin } from 'lucide-react';
import { ReportData } from '../../types';

interface PositionAnalysisSectionProps {
  reportData: ReportData;
}

const PositionAnalysisSection: React.FC<PositionAnalysisSectionProps> = ({ reportData }) => {
  const { positionAnalysis, userData } = reportData;

  const highlightDigitPositions = (mobile: string, digit: number, positions: number[]) => {
    return mobile.split('').map((d, index) => {
      const isHighlighted = positions.includes(index + 1);
      return (
        <span
          key={index}
          className={isHighlighted && parseInt(d) === digit ? 
            'bg-yellow-300 px-1 rounded font-bold' : 
            ''
          }
        >
          {d}
        </span>
      );
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <MapPin className="w-6 h-6 text-purple-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 4: Position Analysis</h2>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          The position of each digit in your mobile number <span className="font-bold">{userData.mobileNumber}</span> 
          influences specific life areas. Here's the positional impact analysis:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-center font-mono text-lg tracking-wider">{userData.mobileNumber}</p>
          <p className="text-center text-xs text-gray-500 mt-2">
            Position: 1 2 3 4 5 6 7 8 9 10
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-purple-50">
              <th className="border border-gray-300 px-4 py-3 text-left font-bold">Digit</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-bold">Positions</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-bold">Highlighted Number</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-bold">Life Area Effect</th>
            </tr>
          </thead>
          <tbody>
            {positionAnalysis.map((analysis, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border border-gray-300 px-4 py-3 font-bold text-purple-600">
                  {analysis.digit}
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  {analysis.positions.join(', ')}
                </td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-lg">
                  {highlightDigitPositions(userData.mobileNumber, analysis.digit, analysis.positions)}
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  {analysis.effect}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
        <p className="text-amber-800 font-medium">
          <span className="font-bold">Note:</span> There is no Planetary Influence and Life Area Effect of '0' in numerology, 
          as zero represents the void or unlimited potential that doesn't carry specific vibrational qualities.
        </p>
      </div>
    </div>
  );
};

export default PositionAnalysisSection;