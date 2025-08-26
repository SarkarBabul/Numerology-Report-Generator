import React from 'react';
import { Calculator, Star } from 'lucide-react';
import { ReportData } from '../../types';

interface CoreNumbersAnalysisProps {
  reportData: ReportData;
}

const CoreNumbersAnalysis: React.FC<CoreNumbersAnalysisProps> = ({ reportData }) => {
  const { coreNumbers, userData } = reportData;

  const getNumberInterpretation = (type: string, number: number | string): string => {
    const interpretations: { [key: string]: { [key: number]: string } } = {
      mulank: {
        1: 'Natural leader, independent, ambitious, original thinker',
        2: 'Cooperative, sensitive, diplomatic, intuitive',
        3: 'Creative, expressive, artistic, optimistic',
        4: 'Practical, methodical, hardworking, reliable',
        5: 'Adventurous, free-spirited, versatile, curious',
        6: 'Nurturing, responsible, family-oriented, healing',
        7: 'Spiritual, analytical, introspective, wise',
        8: 'Ambitious, material success, authoritative, business-minded',
        9: 'Humanitarian, generous, universal love, completion'
      },
      bhagyank: {
        1: 'Destined for leadership roles and pioneering ventures',
        2: 'Life path involves cooperation and bringing harmony',
        3: 'Destiny involves creative expression and communication',
        4: 'Life purpose centers around building and stability',
        5: 'Destiny involves freedom, travel, and change',
        6: 'Life path involves service, family, and responsibility',
        7: 'Spiritual seeking and knowledge acquisition destined',
        8: 'Material achievement and worldly success destined',
        9: 'Universal service and humanitarian work destined'
      }
    };

    return interpretations[type]?.[Number(number)] || 'Unique energy pattern requiring individual analysis';
  };

  const calculateSteps = {
    mulank: `Birth day: ${userData.dateOfBirth.split('-')[2]} → ${userData.dateOfBirth.split('-')[2].split('').join(' + ')} = ${coreNumbers.mulank}`,
    bhagyank: `Full DOB: ${userData.dateOfBirth} → ${userData.dateOfBirth.replace(/-/g, '').split('').join(' + ')} = ${coreNumbers.bhagyank}`,
    nameNumber: `Name "${userData.fullName}" → Chaldean values → Compound: ${coreNumbers.nameCompound} → Reduced: ${coreNumbers.nameNumber}`,
    mobileAnk: `Mobile: ${userData.mobileNumber} → ${userData.mobileNumber.split('').join(' + ')} = ${coreNumbers.mobileAnk}`
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-8">
        <Calculator className="w-6 h-6 text-green-600" />
        <h2 className="text-3xl font-bold text-gray-900">Section 1: Core Numbers Analysis</h2>
      </div>

      <div className="grid gap-8">
        {/* Mulank */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900">Mulank (Root Number): {coreNumbers.mulank}</h3>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Calculation:</h4>
            <p className="text-gray-600 bg-white p-3 rounded-lg border">{calculateSteps.mulank}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Interpretation:</h4>
            <p className="text-gray-700">{getNumberInterpretation('mulank', coreNumbers.mulank)}</p>
          </div>
        </div>

        {/* Bhagyank */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">Bhagyank (Destiny Number): {coreNumbers.bhagyank}</h3>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Calculation:</h4>
            <p className="text-gray-600 bg-white p-3 rounded-lg border">{calculateSteps.bhagyank}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Interpretation:</h4>
            <p className="text-gray-700">{getNumberInterpretation('bhagyank', coreNumbers.bhagyank)}</p>
          </div>
        </div>

        {/* Dishank */}
        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-5 h-5 text-yellow-600" />
            <h3 className="text-xl font-bold text-gray-900">Dishank (Direction Number): {coreNumbers.dishank}</h3>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Calculation:</h4>
            <p className="text-gray-600 bg-white p-3 rounded-lg border">
              Same as Bhagyank but preserving Master Numbers (11, 22, 33, etc.)
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Interpretation:</h4>
            <p className="text-gray-700">
              {coreNumbers.dishank === 11 ? 'Master number indicating spiritual insight and intuition' :
               coreNumbers.dishank === 22 ? 'Master builder with potential for great achievements' :
               coreNumbers.dishank === 33 ? 'Master teacher with universal compassion' :
               getNumberInterpretation('bhagyank', Number(coreNumbers.dishank))}
            </p>
          </div>
        </div>

        {/* Name Number */}
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-5 h-5 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-900">Name Number (Compound M): {coreNumbers.nameCompound} → {coreNumbers.nameNumber}</h3>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Calculation:</h4>
            <p className="text-gray-600 bg-white p-3 rounded-lg border">{calculateSteps.nameNumber}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Interpretation:</h4>
            <p className="text-gray-700">
              Your name vibrates with {coreNumbers.nameNumber} energy, indicating {getNumberInterpretation('mulank', coreNumbers.nameNumber).toLowerCase()}. 
              The compound number {coreNumbers.nameCompound} adds specific karmic influences to your personality.
            </p>
          </div>
        </div>

        {/* MobileAnk */}
        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-5 h-5 text-red-600" />
            <h3 className="text-xl font-bold text-gray-900">MobileAnk (Mobile Number Total): {coreNumbers.mobileAnk}</h3>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Calculation:</h4>
            <p className="text-gray-600 bg-white p-3 rounded-lg border">{calculateSteps.mobileAnk}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Interpretation:</h4>
            <p className="text-gray-700">
              Your mobile number carries {coreNumbers.mobileAnk} vibration, which influences daily communication, 
              business relationships, and the energy you attract through your primary contact number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreNumbersAnalysis;