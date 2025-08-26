import React from 'react';
import { Star, Calendar, Phone, User } from 'lucide-react';
import { UserData } from '../../types';

interface TitlePageProps {
  userData: UserData;
}

const TitlePage: React.FC<TitlePageProps> = ({ userData }) => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-12 rounded-2xl border border-green-200 text-center page-break">
      {/* Logo and Header */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <Star className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AstroLearn</h1>
            <p className="text-green-600 font-medium">Trusted by 1.75+ million people</p>
          </div>
        </div>
      </div>

      {/* Report Title */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Name & Mobile Correction
        </h2>
        <h3 className="text-3xl font-bold text-green-700 mb-6">
          Numerology Report
        </h3>
        <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full"></div>
      </div>

      {/* Client Information */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h4 className="text-2xl font-bold text-gray-900 mb-6">Client Information</h4>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Full Name</p>
              <p className="text-lg font-semibold text-gray-900">{userData.fullName}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Date of Birth</p>
              <p className="text-lg font-semibold text-gray-900">
                {new Date(userData.dateOfBirth).toLocaleDateString('en-GB')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Mobile Number</p>
              <p className="text-lg font-semibold text-gray-900">{userData.mobileNumber}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Gender</p>
              <p className="text-lg font-semibold text-gray-900">{userData.gender}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prepared By */}
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-2">Prepared by:</p>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-yellow-500 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">AstroLearn</span>
        </div>
        <p className="text-gray-600 mt-4">
          Generated on: {new Date().toLocaleDateString('en-GB')}
        </p>
      </div>
    </div>
  );
};

export default TitlePage;