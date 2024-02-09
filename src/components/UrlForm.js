import React, { useState } from 'react';
import axios from 'axios';
import Analytics from './Analytics';
import '../App.css'; // Import CSS file

function UrlShortenerForm() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shortId, setShortId] = useState('');
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShortUrl('');
    setErrorMessage('');
    setShowAnalytics(false);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/url`, { url });
      setShortUrl(response.data.id);
      setShortId(response.data.id);
    } catch (error) {
      console.error('Failed to create short URL:', error);
      setErrorMessage('Failed to create short URL. Please try again.');
    }
  };

  const handleShowAnalytics = () => {
    setShowAnalytics(true);
  };

  return (
    <div className="url-shortener-form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="url-input"
          type="text"
          placeholder="Enter URL to shorten"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button className="url-submit-button" type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <p className="short-url">
          Short URL: 
          <a href={`http://localhost:8001/${shortUrl}`} target="_blank" rel="noopener noreferrer">
            http://localhost:8001/{shortUrl}
          </a>
        </p>
      )}
      <table>
        <tbody>
          {shortId && (
            <tr>
              <td>
                <button className="show-analytics-button" onClick={handleShowAnalytics}>Show Analytics</button>
              </td>
            </tr>
          )}
          {showAnalytics && (
            <tr>
              <td>
                <Analytics shortId={shortId} />
              </td>
            </tr>
          )}
          {errorMessage && (
            <tr>
              <td>
                <p className="error">{errorMessage}</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UrlShortenerForm;
