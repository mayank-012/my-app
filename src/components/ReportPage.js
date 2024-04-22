// src/components/ReportPage.js

import React from 'react';

const ReportPage = () => {
  const handleUpload = (event) => {
    // Handle file upload logic here
  };

  return (
    <div>
      <h2>Report Water Wastage</h2>
      <input type="file" onChange={handleUpload} />
      {/* Add other form fields for description, location, etc. */}
      <button>Submit Report</button>
    </div>
  );
};

export default ReportPage;
