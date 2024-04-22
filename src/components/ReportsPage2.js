// src/components/ReportsPage.js

import React, { useState, useEffect } from 'react';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from the API
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      // Replace this with actual API endpoint
      const response = await fetch('https://api.example.com/reports');
      if (response.ok) {
        const data = await response.json();
        setReports(data);
      } else {
        console.error('Failed to fetch reports');
      }
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  return (
    <div>
      <h2>Water Wastage Reports</h2>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            <img src={report.image} alt="Reported Wastage" />
            <p>Description: {report.description}</p>
            {/* You can add more details like location, date, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsPage;
