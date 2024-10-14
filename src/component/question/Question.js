import React, { useContext, useEffect, useState } from 'react'
import './Question.css'
import { toast } from 'react-toastify'
// import { AuthProvider,name } from '../Context/Context' 
import { AuthContext, name } from '../Context/Context'
import { useNavigate } from 'react-router-dom'




function Question() {
  const { name } = useContext(AuthContext)
  const navigate = useNavigate();
  const questionList = [
    {
      question: "Which language runs on a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correctAnswer: "JavaScript",
    },
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "What is do-while loop also known as?",
      options: ["Exit controll", "Entry controll", "Per Tested", "All of the above"],
      correctAnswer: "Exit controll"
    },
    {
      question: "C++ uses which approach?",
      options: ['right-left', 'Top-bottom', 'left-right', 'buttom-up'],
      correctAnswer: "buttom-up"
    },
    {
      question: "Which of the following is not a Java features?",
      options: ['Dynamic', 'Architecture Neutral', 'Use of pointers', 'Object-oriented'],
      correctAnswer: "Use of pointers"
    }
    // Add more questions as needed
  ];



  const [currentQuestion_No, setcurrentQuestion_No] = useState(0);  // will set the index of current question index
  const [isCorrect, setCorrect] = useState(false);      // varify if answer is correct or not

  const [selectedOpt, setselectedOpt] = useState('')
  const [score, setscore] = useState(0)
  const currentQuestion = questionList[currentQuestion_No];

  const varifyAnswer = () => {
    if (currentQuestion.correctAnswer === selectedOpt) {

      toast.success(`${name} Congratulation`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          top: '52px'
        },
      });
      setselectedOpt(" ")
      if (currentQuestion_No < questionList.length - 1) {
        setcurrentQuestion_No(currentQuestion_No + 1);  // Move to the next question
        setscore(score + 10);

      } else {
        //       toast.success(`🎉 Congrats, ${name}! You finished the quiz! 🏆 Score: ${score}`,{
        //   style: {
        //     top: '52px'
        //   },
        // });
        navigate("/CongoMessage",{ state: { score: score } })
      }
    } else {
      toast.error(`Oops, ${name}! Thats not correct Try again!`, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          top: '52px'
        },
      });
    }

  }


  return (
    <div className="container">
      <div className='container position-relative'>
        <div className="row  mt-3">
          <div className="col-6    fs-6 ">{name}</div>
          <div className="col-6  d-flex justify-content-center align-items-center">Score = {score} </div>
        </div>
      </div>

      {/* HEADING SCORE AND TIMING */}
      <div className=' container second ' >
        <div className="col border text-dark shadow fs-6 first ">{currentQuestion.question}</div>
        {/* QUESTION  */}
        <div className="row mt-3 justify-content-center align-items-center">
          <div className="col-12 op1 d-flex justify-content-center align-items-center border border-dark color " id="forth"i
            onClick={(e) => {
              setselectedOpt(currentQuestion.options[0])
    
            }}
          >{currentQuestion.options[0]}</div>

          <div className="col-12 op1 d-flex justify-content-center align-items-center border border-dark my-3" id="forth"
            onClick={(e) => {
              setselectedOpt(currentQuestion.options[1])
            }}
          >
            {currentQuestion.options[1]}
          </div>
          <div className="col-12 op1 d-flex justify-content-center align-items-center border border-dark mb-3" id="forth"
            onClick={(e) => {
              setselectedOpt(currentQuestion.options[2])
            }}
          >
            {currentQuestion.options[2]}
          </div>
          <div className="col-12 op1 d-flex justify-content-center align-items-center border border-dark" id="forth"
            onClick={(e) => {
              setselectedOpt(currentQuestion.options[3])
           
            }}
          >
            {currentQuestion.options[3]}
          </div>
          <div className="col-12 op1 d-flex justify-content-center align-items-center mt-4">
            <button className="w-100 btn btn-success fs-6 rounded-5"
              onClick={() => {
                varifyAnswer();
              }}
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question