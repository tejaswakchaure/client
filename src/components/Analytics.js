import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Analytics({ shortId }) {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        
        const response = await axios.get(`http://localhost:8001/url/analytics/${shortId}`);
        console.log("Analytics data:", response.data);
        setAnalytics(response.data);
        
      } catch (error) {
        console.error('Error fetching analytics:', error);
        alert('Failed to fetch analytics');
      }
    };

    fetchAnalytics();
  }, [shortId]); // Dependency array ensures this effect runs when shortId changes

  if (!analytics) return <p>Loading analytics...</p>;

  return (
    <div>
      <h2>Analytics for {shortId}</h2>
      <p>Total Clicks: {analytics.totalClicks}</p>
     
    </div>
  );
}

export default Analytics;
