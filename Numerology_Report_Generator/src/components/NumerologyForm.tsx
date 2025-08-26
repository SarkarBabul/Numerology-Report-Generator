import React, { useState } from 'react';
import { UserInput } from '../types/numerology';
import { Calendar, Phone, User, Clock } from 'lucide-react';
import logo from '../assets/astrolearn-logo.png';

interface NumerologyFormProps {
  onSubmit: (data: UserInput) => void;
}

export const NumerologyForm: React.FC<NumerologyFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserInput>({
    fullName: '',
    dateOfBirth: '',
    timeOfBirth: '',
    mobileNumber: '',
    gender: 'Male'
  });

  const [errors, setErrors] = useState<Partial<UserInput>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<UserInput> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
      if (!dateRegex.test(formData.dateOfBirth)) {
        newErrors.dateOfBirth = 'Please use DD-MM-YYYY format';
      }
    }

    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '-' + value.substring(2);
    }
    if (value.length >= 5) {
      value = value.substring(0, 5) + '-' + value.substring(5, 9);
    }
    setFormData({ ...formData, dateOfBirth: value });
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').substring(0, 10);
    setFormData({ ...formData, mobileNumber: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <header className="flex justify-center py-4">
  <div className="flex items-center space-x-3">
    <img
      src="src/assets/astrolearn-logo.png"
      alt="AstroLearn Logo"
      className="w-12 h-12"
    />
    <div>
      <h1 className="text-3xl font-bold text-white">AstroLearn</h1>
      <p className="text-sm text-gray-300">
        Trusted by 1.75+ million people worldwide
      </p>
    </div>
  </div>
</header>
            <h2 className="text-2xl font-semibold mb-2">Name & Mobile Correction Numerology Report</h2>
            <p className="text-emerald-100">Discover your numbers and unlock your potential</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3">
                <User className="w-5 h-5 mr-2 text-emerald-600" />
                Full Name (as on official documents)
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your complete name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3">
                <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
                Date of Birth (DD-MM-YYYY)
              </label>
              <input
                type="text"
                value={formData.dateOfBirth}
                onChange={handleDateChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="DD-MM-YYYY"
                maxLength={10}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3">
                <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                Time of Birth (Optional)
              </label>
              <input
                type="time"
                value={formData.timeOfBirth}
                onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3">
                <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                Mobile Number (10 digits)
              </label>
              <input
                type="text"
                value={formData.mobileNumber}
                onChange={handleMobileChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
              />
              {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-3">Gender</label>
              <div className="flex space-x-6">
                {['Male', 'Female', 'Other'].map((gender) => (
                  <label key={gender} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-gray-700">{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Generate My Numerology Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};