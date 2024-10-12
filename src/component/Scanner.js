import React from 'react'
import { useNavigate } from 'react-router-dom';

function Scanner() {
    const [scanResult, setScanResult] = useState(null);
    const navigate = useNavigate();
  
    const handleScan = (data) => {
      if (data) {
        setScanResult(data); // Set the scanned URL
       navigate("/QuizApplication")  // Redirect to the scanned URL (e.g., quiz page)
      }
    };
  
    const handleError = (err) => {
      console.error(err);
      alert("Error scanning the QR code");
    };
  return (
    <div>
    <h2>Scan the QR Code to Start the Quiz</h2>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result?.text);
          }

          if (!!error) {
            handleError(error);
          }
        }}
        style={{ width: '300px' }}
      />
      {scanResult && <p>Scanned URL: {scanResult}</p>}   
    </div>
  )
}

export default Scanner
