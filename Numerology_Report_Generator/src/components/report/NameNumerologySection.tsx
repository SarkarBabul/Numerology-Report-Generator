import React from 'react';
import { FileText } from 'lucide-react';
import { ReportData } from '../../types';

interface NameNumerologyTablesProps {
  reportData: ReportData;
}

const NameNumerologyTables: React.FC<NameNumerologyTablesProps> = ({ reportData }) => {
  const { userData, coreNumbers } = reportData;

  const chaldeanChart: { [key: string]: number } = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 8, 'G': 3, 'H': 5, 'I': 1,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 7, 'P': 8, 'Q': 1, 'R': 2,
    'S': 3, 'T': 4, 'U': 6, 'V': 6, 'W': 6, 'X': 5, 'Y': 1, 'Z': 7
  };

  const getLetterValue = (letter: string): number => {
    return chaldeanChart[letter.toUpperCase()] || 0;
  };

  const categorizeNumber = (number: number, type: 'personal' | 'general' = 'general'): string => {
    // Lucky numbers for most people
    const generalLucky = [1, 3, 5, 6, 9];
    const generalNeutral = [2, 4, 7, 8];
    const personalLucky = [coreNumbers.mulank, coreNumbers.bhagyank, coreNumbers.nameNumber, coreNumbers.mobileAnk];

    if (type === 'personal') {
      if (personalLucky.includes(number)) return 'Lucky';
      if (generalLucky.includes(number)) return 'Neutral';
      return 'Unlucky';
    } else {
      if (generalLucky.includes(number)) return 'Lucky';
      if (generalNeutral.includes(number)) return 'Neutral';
      return 'Unlucky';
    }
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'Lucky':
        return 'bg-green-100 text-green-800';
      case 'Neutral':
        return 'bg-yellow-100 text-yellow-800';
      case 'Unlucky':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateNameParts = () => {
    const fullName = userData.fullName.toUpperCase().replace(/[^A-Z ]/g, '');
    const firstName = fullName.split(' ')[0];
    
    const fullNameCalculation = fullName.replace(/\s/g, '').split('').map(letter => ({
      letter,
      value: getLetterValue(letter)
    }));

    const firstNameCalculation = firstName.split('').map(letter => ({
      letter,
      value: getLetterValue(letter)
    }));

    const fullNameSum = fullNameCalculation.reduce((sum, item) => sum + item.value, 0);
    const firstNameSum = firstNameCalculation.reduce((sum, item) => sum + item.value, 0);

    return {
      fullName: {
        name: fullName,
        calculation: fullNameCalculation,
        compound: fullNameSum,
        reduced: fullNameSum > 9 ? fullNameSum.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0) : fullNameSum
      },
      firstName: {
        name: firstName,
        calculation: firstNameCalculation,
        compound: firstNameSum,
        reduced: firstNameSum > 9 ? firstNameSum.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0) : firstNameSum
      }
    };
  };

  const nameData = calculateNameParts();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <FileText className="w-6 h-6 text-indigo-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 5: Name Numerology Tables</h2>
      </div>

      {/* Chaldean Chart Reference */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Chaldean Numerology Chart</h3>
        <div className="grid grid-cols-9 gap-2 text-center text-sm">
          {Object.entries(chaldeanChart).map(([letter, value]) => (
            <div key={letter} className="bg-gray-100 p-2 rounded border">
              <div className="font-bold">{letter}</div>
              <div className="text-gray-600">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Name Analysis */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Full Name: "{nameData.fullName.name}"</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-gray-300 px-3 py-2 font-bold">Letter</th>
                {nameData.fullName.calculation.map((item, index) => (
                  <th key={index} className="border border-gray-300 px-3 py-2 font-bold">{item.letter}</th>
                ))}
                <th className="border border-gray-300 px-3 py-2 font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Value</td>
                {nameData.fullName.calculation.map((item, index) => (
                  <td key={index} className="border border-gray-300 px-3 py-2 text-center">{item.value}</td>
                ))}
                <td className="border border-gray-300 px-3 py-2 text-center font-bold">{nameData.fullName.compound}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-600">Compound Number</p>
            <p className="text-2xl font-bold text-gray-900">{nameData.fullName.compound}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-600">Reduced Number</p>
            <p className="text-2xl font-bold text-gray-900">{nameData.fullName.reduced}</p>
          </div>
          <div className={`p-4 rounded-lg border ${getCategoryColor(categorizeNumber(nameData.fullName.reduced, 'personal'))}`}>
            <p className="text-sm opacity-80">Category</p>
            <p className="text-lg font-bold">{categorizeNumber(nameData.fullName.reduced, 'personal')}</p>
          </div>
        </div>
      </div>

      {/* First Name Analysis */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">First Name: "{nameData.firstName.name}"</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-purple-50">
                <th className="border border-gray-300 px-3 py-2 font-bold">Letter</th>
                {nameData.firstName.calculation.map((item, index) => (
                  <th key={index} className="border border-gray-300 px-3 py-2 font-bold">{item.letter}</th>
                ))}
                <th className="border border-gray-300 px-3 py-2 font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Value</td>
                {nameData.firstName.calculation.map((item, index) => (
                  <td key={index} className="border border-gray-300 px-3 py-2 text-center">{item.value}</td>
                ))}
                <td className="border border-gray-300 px-3 py-2 text-center font-bold">{nameData.firstName.compound}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-600">Compound Number</p>
            <p className="text-2xl font-bold text-gray-900">{nameData.firstName.compound}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-600">Reduced Number</p>
            <p className="text-2xl font-bold text-gray-900">{nameData.firstName.reduced}</p>
          </div>
          <div className={`p-4 rounded-lg border ${getCategoryColor(categorizeNumber(nameData.firstName.reduced, 'personal'))}`}>
            <p className="text-sm opacity-80">Category</p>
            <p className="text-lg font-bold">{categorizeNumber(nameData.firstName.reduced, 'personal')}</p>
          </div>
        </div>
      </div>

      {/* Number Categories Explanation */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-blue-900 mb-3">Number Categories for {userData.fullName}:</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <p className="font-semibold text-green-800">Lucky Numbers</p>
            <p className="text-green-700 text-sm">
              Personal: {[coreNumbers.mulank, coreNumbers.bhagyank, coreNumbers.nameNumber, coreNumbers.mobileAnk]
                .filter((n, i, arr) => arr.indexOf(n) === i).join(', ')}
            </p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-lg">
            <p className="font-semibold text-yellow-800">Neutral Numbers</p>
            <p className="text-yellow-700 text-sm">Generally supportive numbers</p>
          </div>
          <div className="bg-red-100 p-3 rounded-lg">
            <p className="font-semibold text-red-800">Unlucky Numbers</p>
            <p className="text-red-700 text-sm">Numbers requiring extra caution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameNumerologyTables;