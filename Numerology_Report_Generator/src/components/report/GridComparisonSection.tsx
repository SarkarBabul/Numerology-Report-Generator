import React from 'react';
import { Grid3X3 } from 'lucide-react';
import { ReportData } from '../../types';

interface GridComparisonsProps {
  reportData: ReportData;
}

const GridComparisons: React.FC<GridComparisonsProps> = ({ reportData }) => {
  const { loshuGridDob, loshuGridMobile, vedicGridDob, vedicGridMobile, userData } = reportData;

  const renderGrid = (grid: (number | null)[][], title: string, type: 'loshu' | 'vedic') => {
    const gridLabels = type === 'loshu' 
      ? [['4', '9', '2'], ['3', '5', '7'], ['8', '1', '6']]
      : [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

    return (
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 text-center">{title}</h4>
        <div className="grid grid-cols-3 gap-2 mb-4 max-w-xs mx-auto">
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-16 h-16 border-2 border-gray-300 flex flex-col items-center justify-center rounded-lg ${
                  cell ? 'bg-green-100 border-green-300' : 'bg-white'
                }`}
              >
                <div className="text-xs text-gray-500">{gridLabels[rowIndex][colIndex]}</div>
                <div className="text-lg font-bold text-gray-900">
                  {cell || '—'}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  const renderGridAnalysis = (analysis: typeof loshuGridDob, source: string) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h5 className="font-semibold text-gray-900 mb-3">{source} Analysis</h5>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Yog Presence:</span>
          <span className="font-semibold">{analysis.yogPresence}%</span>
        </div>
        <div>
          <span className="text-gray-600">Missing Numbers:</span>
          <span className="ml-2 font-semibold">
            {analysis.missingNumbers.length > 0 ? analysis.missingNumbers.join(', ') : 'None'}
          </span>
        </div>
        <div>
          <span className="text-gray-600">Repeating Numbers:</span>
          <span className="ml-2 font-semibold">
            {analysis.repeatingNumbers.length > 0 ? analysis.repeatingNumbers.join(', ') : 'None'}
          </span>
        </div>
        <div className="pt-2 border-t border-gray-200">
          <p className="text-gray-700">{analysis.effects}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Grid3X3 className="w-6 h-6 text-teal-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 6: Grid Comparisons</h2>
      </div>

      {/* LoShu Grid Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">LoShu Grid Analysis</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {renderGrid(loshuGridDob.grid, `DOB Grid (${userData.dateOfBirth})`, 'loshu')}
          {renderGrid(loshuGridMobile.grid, `Mobile Grid (${userData.mobileNumber})`, 'loshu')}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {renderGridAnalysis(loshuGridDob, 'Date of Birth')}
          {renderGridAnalysis(loshuGridMobile, 'Mobile Number')}
        </div>
      </div>

      {/* Vedic Grid Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Vedic Grid Analysis</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {renderGrid(vedicGridDob.grid, `DOB Grid (${userData.dateOfBirth})`, 'vedic')}
          {renderGrid(vedicGridMobile.grid, `Mobile Grid (${userData.mobileNumber})`, 'vedic')}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {renderGridAnalysis(vedicGridDob, 'Date of Birth')}
          {renderGridAnalysis(vedicGridMobile, 'Mobile Number')}
        </div>
      </div>

      {/* Grid Comparison Summary */}
      <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
        <h4 className="font-bold text-teal-900 mb-3">Grid Analysis Summary:</h4>
        <div className="space-y-2 text-teal-800">
          <p>• <span className="font-semibold">LoShu Grid:</span> Ancient Chinese system focusing on natural energy flow patterns</p>
          <p>• <span className="font-semibold">Vedic Grid:</span> Traditional Indian system emphasizing systematic energy progression</p>
          <p>• <span className="font-semibold">Missing Numbers:</span> Indicate areas requiring attention and development</p>
          <p>• <span className="font-semibold">Repeating Numbers:</span> Show dominant energies that may need balancing</p>
          <p>• <span className="font-semibold">Yog Presence:</span> Percentage indicates overall energy completeness</p>
        </div>
      </div>
    </div>
  );
};

export default GridComparisons;