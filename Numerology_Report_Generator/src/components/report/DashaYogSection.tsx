import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { ReportData } from '../../types';

interface DashaYogPredictionsProps {
  reportData: ReportData;
}

const DashaYogPredictions: React.FC<DashaYogPredictionsProps> = ({ reportData }) => {
  const { dashaData, luckyNumbers } = reportData;

  const getLuckyNumberEffect = (number: number, year: number): string => {
    const effects: { [key: number]: string } = {
      1: 'New beginnings, leadership opportunities, and personal growth',
      2: 'Partnerships, cooperation, and emotional harmony',
      3: 'Creative expression, communication success, and social expansion',
      4: 'Building foundations, hard work pays off, and stable progress',
      5: 'Changes, travel opportunities, and freedom in choices',
      6: 'Family focus, responsibility, and nurturing relationships',
      7: 'Spiritual growth, research success, and inner wisdom',
      8: 'Material achievements, business success, and authority',
      9: 'Completion of cycles, humanitarian service, and universal connection'
    };
    return effects[number] || 'Balanced energy and steady progress';
  };

  // Group data by year
  const yearlyData = dashaData.reduce((acc, row) => {
    if (!acc[row.year]) acc[row.year] = [];
    acc[row.year].push(row);
    return acc;
  }, {} as { [year: number]: typeof dashaData });

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Clock className="w-6 h-6 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 9: Dasha Yog Predictions (2025-2028)</h2>
      </div>

      {/* Legend */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
        <h4 className="font-bold text-blue-900 mb-3">Legend:</h4>
        <div className="grid md:grid-cols-5 gap-4 text-sm">
          <div><span className="font-semibold text-blue-800">PYR:</span> Personal Year</div>
          <div><span className="font-semibold text-blue-800">PMO:</span> Personal Month</div>
          <div><span className="font-semibold text-blue-800">MDA:</span> Major Dasha</div>
          <div><span className="font-semibold text-blue-800">ADA:</span> Antardasha</div>
          <div><span className="font-semibold text-blue-800">Sum:</span> Summation</div>
        </div>
      </div>

      {Object.entries(yearlyData).map(([year, yearData]) => (
        <div key={year} className="mb-12">
          {/* Year Header with Lucky Number */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Year {year}</h3>
              <div className="text-right">
                <p className="text-sm text-gray-600">Lucky Number for {year}</p>
                <p className="text-3xl font-bold text-purple-600">{luckyNumbers[parseInt(year)]}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <p className="text-gray-700">
                <span className="font-semibold">Lucky Number Effect:</span> {getLuckyNumberEffect(luckyNumbers[parseInt(year)], parseInt(year))}
              </p>
            </div>
          </div>

          {/* Monthly Predictions Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 font-bold text-left">Month</th>
                  <th className="border border-gray-300 px-3 py-2 font-bold text-center">PYR</th>
                  <th className="border border-gray-300 px-3 py-2 font-bold text-center">PMO</th>
                  <th className="border border-gray-300 px-3 py-2 font-bold text-center">MDA</th>
                  <th className="border border-gray-300 px-3 py-2 font-bold text-center">ADA</th>
                  <th className="border border-gray-300 px-3 py-2 font-bold text-center">Sum</th>
                </tr>
              </thead>
              <tbody>
                {yearData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-3 py-2 font-medium">{row.month}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{row.pyr}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{row.pmo}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{row.mda}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{row.ada}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center font-bold text-purple-600">{row.summation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Monthly Interpretations */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span>Monthly Predictions for {year}:</span>
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {yearData.map((row, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-blue-900">{row.month}</h5>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">{row.summation}</span>
                  </div>
                  <p className="text-blue-800 text-sm">{row.prediction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Dasha Predictions Explanation */}
      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
        <h4 className="font-bold text-amber-900 mb-3">Understanding Dasha Predictions:</h4>
        <p className="text-amber-800 leading-relaxed">
          Dasha predictions are based on the cyclical influence of numbers on your life path. The Personal Year (PYR) 
          sets the annual theme, Personal Month (PMO) indicates monthly focus, Major Dasha (MDA) represents the primary 
          life cycle influence, and Antardasha (ADA) shows secondary influences. The summation number provides the 
          overall energy pattern for each month, helping you align activities and decisions with favorable cosmic rhythms.
        </p>
      </div>
    </div>
  );
};

export default DashaYogPredictions;