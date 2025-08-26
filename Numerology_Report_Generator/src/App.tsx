import React, { useState } from 'react';
import { NumerologyForm } from './components/NumerologyForm';
import { NumerologyReport } from './components/NumerologyReport';
import { UserInput, ReportData } from './types/numerology';
import { generateReportData } from './utils/numerologyCalculations';

function App() {
  const [reportData, setReportData] = useState<ReportData | null>(null);

  const handleFormSubmit = (userData: UserInput) => {
    const report = generateReportData(userData);
    setReportData(report);
  };

  const handleNewReport = () => {
    setReportData(null);
  };

  return (
    <div className="App">
      {reportData ? (
        <NumerologyReport 
          reportData={reportData} 
          onNewReport={handleNewReport}
        />
      ) : (
        <NumerologyForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;