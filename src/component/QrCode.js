import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'; 

function Qrscanner() {
  const quizURL = "https://riteshdafale.github.io/QuizApplication/";
  return (
    <div>
      <h2>Scan this QR Code to take the Quiz</h2>
      <QRCodeCanvas value={quizURL} size={200} />
    </div>
  )
}

export default Qrscanner