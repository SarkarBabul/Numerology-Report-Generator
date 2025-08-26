import React from 'react';
import { ReportData } from '../types/numerology';
import { Download, Star, Heart, Briefcase, Calendar, Palette, Music, Navigation, Grid3X3, Table } from 'lucide-react';

interface NumerologyReportProps {
  reportData: ReportData;
  onNewReport: () => void;
}

export const NumerologyReport: React.FC<NumerologyReportProps> = ({ reportData, onNewReport }) => {
  const generatePDF = () => {
    window.print();
  };

  const renderGrid = (grid: (number | null)[][], title: string) => (
    <div className="bg-gray-50 rounded-lg p-4">
      <h5 className="font-semibold mb-3 text-center">{title}</h5>
      <div className="grid grid-cols-3 gap-1 w-24 mx-auto">
        {grid.flat().map((cell, index) => (
          <div
            key={index}
            className="w-7 h-7 border border-gray-400 flex items-center justify-center text-sm font-semibold bg-white"
          >
            {cell || ''}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-6 print:hidden">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-lg font-bold text-emerald-600">AL</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">AstroLearn</h1>
              <p className="text-emerald-100 text-sm">Your Numerology Report</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={generatePDF}
              className="flex items-center bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
            <button
              onClick={onNewReport}
              className="bg-emerald-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-900 transition-colors"
            >
              New Report
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Title Page */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center print:shadow-none print:rounded-none">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-3xl font-bold text-white">AL</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">AstroLearn</h1>
              <p className="text-emerald-600 text-lg">Trusted by 1.75+ million people worldwide</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Name & Mobile Correction Numerology Report</h2>
          
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-600"><span className="font-semibold">Name:</span> {reportData.userInput.fullName}</p>
                <p className="text-gray-600"><span className="font-semibold">Date of Birth:</span> {reportData.userInput.dateOfBirth}</p>
                {reportData.userInput.timeOfBirth && (
                  <p className="text-gray-600"><span className="font-semibold">Time of Birth:</span> {reportData.userInput.timeOfBirth}</p>
                )}
              </div>
              <div>
                <p className="text-gray-600"><span className="font-semibold">Mobile Number:</span> {reportData.userInput.mobileNumber}</p>
                <p className="text-gray-600"><span className="font-semibold">Gender:</span> {reportData.userInput.gender}</p>
                <p className="text-gray-600"><span className="font-semibold">Report Date:</span> {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">Prepared by: <span className="font-semibold text-emerald-600">AstroLearn</span></p>
        </div>

        {/* Section 1: Core Numbers Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 1: Core Numbers Analysis</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
              <h4 className="text-xl font-bold text-emerald-800 mb-2">Mulank (Root Number)</h4>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{reportData.coreNumbers.mulank}</div>
              <p className="text-sm text-gray-600 mb-3">{reportData.calculations.mulankCalc}</p>
              <p className="text-gray-700">Your root number represents your basic nature and personality traits.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h4 className="text-xl font-bold text-blue-800 mb-2">Bhagyank (Destiny Number)</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">{reportData.coreNumbers.bhagyank}</div>
              <p className="text-sm text-gray-600 mb-3">{reportData.calculations.bhagyankCalc}</p>
              <p className="text-gray-700">Your destiny number shows your life path and ultimate goals.</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
              <h4 className="text-xl font-bold text-amber-800 mb-2">Name Number</h4>
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {reportData.coreNumbers.nameNumber.compound} → {reportData.coreNumbers.nameNumber.reduced}
              </div>
              <p className="text-sm text-gray-600 mb-3">{reportData.calculations.nameCalc}</p>
              <p className="text-gray-700">Your name number influences how others perceive you and your public image.</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6">
              <h4 className="text-xl font-bold text-rose-800 mb-2">MobileAnk</h4>
              <div className="text-3xl font-bold text-rose-600 mb-2">{reportData.coreNumbers.mobileAnk}</div>
              <p className="text-sm text-gray-600 mb-3">{reportData.calculations.mobileCalc}</p>
              <p className="text-gray-700">Your mobile number affects your communication and social connections.</p>
            </div>
          </div>
        </div>

        {/* Section 2: Compatibility Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 2: Compatibility Analysis</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Name Compatibility</h4>
              <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold mb-4 ${
                reportData.compatibility.nameCompatibility.rating === 'Highly Compatible' ? 'bg-green-500' :
                reportData.compatibility.nameCompatibility.rating === 'Compatible' ? 'bg-blue-500' :
                reportData.compatibility.nameCompatibility.rating === 'Neutral' ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                {reportData.compatibility.nameCompatibility.rating}
              </div>
              <p className="text-gray-700 mb-4">{reportData.compatibility.nameCompatibility.description}</p>
              
              <h5 className="font-semibold mb-2">Suggestions:</h5>
              <ul className="space-y-1">
                {reportData.compatibility.nameSuggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-700">• {suggestion}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Mobile Compatibility</h4>
              <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold mb-4 ${
                reportData.compatibility.mobileCompatibility.rating === 'Highly Compatible' ? 'bg-green-500' :
                reportData.compatibility.mobileCompatibility.rating === 'Compatible' ? 'bg-blue-500' :
                reportData.compatibility.mobileCompatibility.rating === 'Neutral' ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                {reportData.compatibility.mobileCompatibility.rating}
              </div>
              <p className="text-gray-700 mb-4">{reportData.compatibility.mobileCompatibility.description}</p>
              
              <h5 className="font-semibold mb-2">Suggestions:</h5>
              <ul className="space-y-1">
                {reportData.compatibility.mobileSuggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-700">• {suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Yog Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 3: Yog Analysis</h3>
          
          <div className="space-y-4">
            {reportData.yogAnalysis.length > 0 ? (
              reportData.yogAnalysis.map((yog, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    <strong>{yog.combination} – {yog.planets}</strong>
                  </h4>
                  <p className="text-gray-700">{yog.effects}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No significant yog combinations found in your mobile number.</p>
            )}
          </div>
        </div>

        {/* Section 4: Position Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 4: Position Analysis</h3>
          
          <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> There is no Planetary Influence and Life Area Effect of '0' in numerology.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Digit</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Positions</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Life Area</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Effects</th>
                </tr>
              </thead>
              <tbody>
                {reportData.positionAnalysis.map((analysis, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-emerald-600">
                      {analysis.digit}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {analysis.positions.join(', ')}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {analysis.lifeArea}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {analysis.effects}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 5: Name Numerology Tables */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 5: Name Numerology Tables</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Table className="w-5 h-5 mr-2 text-emerald-600" />
                Full Name Analysis
              </h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-emerald-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Letter</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.nameNumerologyTable.fullName.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="border border-gray-300 px-3 py-2 font-semibold">{item.letter}</td>
                        <td className="border border-gray-300 px-3 py-2">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p><strong>Compound:</strong> {reportData.nameNumerologyTable.fullNameNumbers.compound}</p>
                <p><strong>Reduced:</strong> {reportData.nameNumerologyTable.fullNameNumbers.reduced}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">First Name Analysis</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Letter</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.nameNumerologyTable.firstName.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="border border-gray-300 px-3 py-2 font-semibold">{item.letter}</td>
                        <td className="border border-gray-300 px-3 py-2">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p><strong>Compound:</strong> {reportData.nameNumerologyTable.firstNameNumbers.compound}</p>
                <p><strong>Reduced:</strong> {reportData.nameNumerologyTable.firstNameNumbers.reduced}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4">
              <h5 className="font-semibold text-green-800 mb-2">Lucky Numbers</h5>
              <p className="text-green-700">{reportData.nameNumerologyTable.luckyNumbers.join(', ')}</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h5 className="font-semibold text-yellow-800 mb-2">Neutral Numbers</h5>
              <p className="text-yellow-700">{reportData.nameNumerologyTable.neutralNumbers.join(', ')}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h5 className="font-semibold text-red-800 mb-2">Unlucky Numbers</h5>
              <p className="text-red-700">{reportData.nameNumerologyTable.unluckyNumbers.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Section 6: Grid Comparisons */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2 flex items-center">
            <Grid3X3 className="w-6 h-6 mr-2 text-emerald-600" />
            Section 6: Grid Comparisons
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Date of Birth Grids</h4>
              <div className="grid grid-cols-2 gap-6">
                {renderGrid(reportData.gridAnalysis.dobLoShu.grid, 'LoShu Grid')}
                {renderGrid(reportData.gridAnalysis.dobVedic.grid, 'Vedic Grid')}
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">LoShu Grid Analysis</h5>
                  <p><strong>Yog Presence:</strong> {reportData.gridAnalysis.dobLoShu.yogPresence}%</p>
                  <p><strong>Missing Numbers:</strong> {reportData.gridAnalysis.dobLoShu.missingNumbers.join(', ') || 'None'}</p>
                  <p><strong>Repeating Numbers:</strong> {reportData.gridAnalysis.dobLoShu.repeatingNumbers.map(r => `${r.number}(${r.count})`).join(', ') || 'None'}</p>
                  <p><strong>Effects:</strong> {reportData.gridAnalysis.dobLoShu.effects}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Vedic Grid Analysis</h5>
                  <p><strong>Yog Presence:</strong> {reportData.gridAnalysis.dobVedic.yogPresence}%</p>
                  <p><strong>Missing Numbers:</strong> {reportData.gridAnalysis.dobVedic.missingNumbers.join(', ') || 'None'}</p>
                  <p><strong>Repeating Numbers:</strong> {reportData.gridAnalysis.dobVedic.repeatingNumbers.map(r => `${r.number}(${r.count})`).join(', ') || 'None'}</p>
                  <p><strong>Effects:</strong> {reportData.gridAnalysis.dobVedic.effects}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Mobile Number Grids</h4>
              <div className="grid grid-cols-2 gap-6">
                {renderGrid(reportData.gridAnalysis.mobileLoShu.grid, 'LoShu Grid')}
                {renderGrid(reportData.gridAnalysis.mobileVedic.grid, 'Vedic Grid')}
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">LoShu Grid Analysis</h5>
                  <p><strong>Yog Presence:</strong> {reportData.gridAnalysis.mobileLoShu.yogPresence}%</p>
                  <p><strong>Missing Numbers:</strong> {reportData.gridAnalysis.mobileLoShu.missingNumbers.join(', ') || 'None'}</p>
                  <p><strong>Repeating Numbers:</strong> {reportData.gridAnalysis.mobileLoShu.repeatingNumbers.map(r => `${r.number}(${r.count})`).join(', ') || 'None'}</p>
                  <p><strong>Effects:</strong> {reportData.gridAnalysis.mobileLoShu.effects}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Vedic Grid Analysis</h5>
                  <p><strong>Yog Presence:</strong> {reportData.gridAnalysis.mobileVedic.yogPresence}%</p>
                  <p><strong>Missing Numbers:</strong> {reportData.gridAnalysis.mobileVedic.missingNumbers.join(', ') || 'None'}</p>
                  <p><strong>Repeating Numbers:</strong> {reportData.gridAnalysis.mobileVedic.repeatingNumbers.map(r => `${r.number}(${r.count})`).join(', ') || 'None'}</p>
                  <p><strong>Effects:</strong> {reportData.gridAnalysis.mobileVedic.effects}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Overall Harmony Score */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 7: Overall Harmony Score</h3>
          
          <div className="text-center mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-amber-100 rounded-full px-8 py-4">
            
              <div>
                <div className="text-3xl font-bold text-gray-800">
                  Overall Vibrational Harmony Score: {reportData.harmonyScore.stars}/5 Stars
                </div>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${i < reportData.harmonyScore.stars ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              {reportData.harmonyScore.stars >= 4 ? 'High Harmony' : 'Room for Improvement'}
            </h4>
            <p className="text-gray-700 text-lg mb-4">{reportData.harmonyScore.description}</p>
            
            <div>
              <h5 className="font-semibold mb-2">Recommendations:</h5>
              <ul className="space-y-1">
                {reportData.harmonyScore.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-700">• {suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 8: Universal Energies and Daily Living */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 8: Universal Energies and Daily Living</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Married Life */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-rose-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">Married Life</h4>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold">Compatible Partner Numbers:</span> {reportData.universalEnergies.marriedLife.compatibleNumbers.join(', ')}</p>
                <p><span className="font-semibold">Ideal Partner Type:</span> {reportData.universalEnergies.marriedLife.partnerType}</p>
                <p><span className="font-semibold">Marriage Outlook:</span> {reportData.universalEnergies.marriedLife.outlook}</p>
                <div>
                  <p className="font-semibold mb-2">Tips to enhance marriage:</p>
                  <ul className="space-y-1">
                    {reportData.universalEnergies.marriedLife.tips.map((tip, index) => (
                      <li key={index} className="text-sm">• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Health */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Health</h4>
              <div className="space-y-3">
                <p><span className="font-semibold">Health Tendency:</span> {reportData.universalEnergies.health.tendency}</p>
                <div>
                  <p className="font-semibold mb-2">Health Suggestions:</p>
                  <ul className="space-y-1">
                    {reportData.universalEnergies.health.suggestions.map((suggestion, index) => (
                      <li key={index} className="text-sm">• {suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Profession */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">Profession</h4>
              </div>
              <div>
                <p className="font-semibold mb-2">Recommended Career Fields:</p>
                <ul className="space-y-1">
                  {reportData.universalEnergies.profession.map((profession, index) => (
                    <li key={index} className="text-sm">• {profession}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Favourable Days */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-purple-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">Favourable Days</h4>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold">Best Days:</span> {reportData.universalEnergies.favourableDays.best.join(', ')}</p>
                <p><span className="font-semibold">For Important Decisions:</span> {reportData.universalEnergies.favourableDays.decisions}</p>
                <p><span className="font-semibold">For New Beginnings:</span> {reportData.universalEnergies.favourableDays.beginnings}</p>
              </div>
            </div>

            {/* Favourable Colors */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Palette className="w-6 h-6 text-amber-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">Favourable Colors</h4>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold">Primary Colors:</span> {reportData.universalEnergies.favourableColors.primary.join(', ')}</p>
                <p><span className="font-semibold">Secondary Colors:</span> {reportData.universalEnergies.favourableColors.secondary.join(', ')}</p>
                <p><span className="font-semibold">Avoid:</span> {reportData.universalEnergies.favourableColors.avoid.join(', ')}</p>
              </div>
            </div>

            {/* Music */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Music className="w-6 h-6 text-teal-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">Music</h4>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold">Recommended:</span> {reportData.universalEnergies.music.recommended.join(', ')}</p>
                <p><span className="font-semibold">Healing Frequencies:</span> {reportData.universalEnergies.music.frequencies.join(', ')}</p>
                <p><span className="font-semibold">Avoid:</span> {reportData.universalEnergies.music.avoid.join(', ')}</p>
              </div>
            </div>

            {/* Favourable Directions */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Navigation className="w-6 h-6 text-orange-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">Favourable Directions</h4>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold">Sleeping:</span> {reportData.universalEnergies.directions.sleeping}</p>
                <p><span className="font-semibold">Working:</span> {reportData.universalEnergies.directions.working}</p>
                <p><span className="font-semibold">Meditation:</span> {reportData.universalEnergies.directions.meditation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9: Dasha Yog Predictions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 9: Dasha Yog Predictions (2025-2028)</h3>
          
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Legend:</strong> PYR = Personal Year, PMO = Personal Month, MDA = Major Dasha, ADA = Antardasha
            </p>
          </div>

          {/* Lucky Numbers for Years */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Lucky Numbers by Year</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {reportData.luckyNumbers.map((lucky, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600">{lucky.year}</div>
                  <div className="text-3xl font-bold text-emerald-800">{lucky.number}</div>
                  <p className="text-sm text-gray-700 mt-2">{lucky.effect}</p>
                </div>
              ))}
            </div>
          </div>
          
          {[2025, 2026, 2027, 2028].map((year) => (
            <div key={year} className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{year} Predictions</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-emerald-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Month</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">PYR</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">PMO</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">MDA</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">ADA</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Sum</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.dashaYog
                      .filter(data => data.year === year)
                      .map((data, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="border border-gray-300 px-3 py-2 font-semibold">{data.month}</td>
                          <td className="border border-gray-300 px-3 py-2">{data.pyr}</td>
                          <td className="border border-gray-300 px-3 py-2">{data.pmo}</td>
                          <td className="border border-gray-300 px-3 py-2">{data.mda}</td>
                          <td className="border border-gray-300 px-3 py-2">{data.ada}</td>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-emerald-600">{data.summation}</td>
                          <td className="border border-gray-300 px-3 py-2">{data.interpretation}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Section 10: Remedies */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 10: Remedies Section</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">General Remedies</h4>
              <ul className="space-y-2">
                {reportData.remedies.general.map((remedy, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    {remedy}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Balancing Remedies</h4>
              <ul className="space-y-2">
                {reportData.remedies.balancing.map((remedy, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    {remedy}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Prayers and Mental Tuning</h4>
              <ul className="space-y-2">
                {reportData.remedies.prayers.map((prayer, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    {prayer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 11: Rudraksha Recommendations */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Section 11: Rudraksha Recommendations</h3>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">{reportData.rudraksha.recommendation}</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Key Benefits:</h5>
                <ul className="space-y-1">
                  {reportData.rudraksha.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">• {benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3">Wearing Instructions:</h5>
                <p className="text-gray-700">{reportData.rudraksha.instructions}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 print:shadow-none print:rounded-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-500 pb-2">Contact Information</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h4>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Website:</span> www.astrolearn.com</p>
                <p><span className="font-semibold">Email:</span> contact@astrolearn.com</p>
                <p><span className="font-semibold">Phone:</span> +91-XXXXX-XXXXX</p>
                <p><span className="font-semibold">Address:</span> [Business Address]</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Professional Disclaimer</h4>
              <p className="text-sm text-gray-600">
                This numerological analysis is provided for guidance and educational purposes only. Individual results may vary based on personal circumstances, free will, and other astrological factors. This report should not be considered as definitive predictions but rather as insights to help you make informed decisions. For personalized consultation and detailed analysis, please contact our certified numerologists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};