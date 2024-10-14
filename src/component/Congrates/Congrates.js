import React, { useContext } from 'react'
import { AuthContext } from '../Context/Context'
import { useLocation } from 'react-router-dom';



function Congrates() {
  const location = useLocation();
  const { score } = location.state || { score: 0 };
  const { name } = useContext(AuthContext);
  return (
    <div className='position-relative mt-5' >
      <div className="container position-absolute top=50 ">
        <h4>Champion of the Quiz! 🏆</h4>
        <p className='mt-3 '>Congratulations, {name}! 🎊 You’ve completed the quiz like a pro! Your knowledge and dedication are impressive. Take a moment to celebrate your success and keep moving toward your goals. Your score: {score}<br/>
        See you in the next challenge!</p>
      </div>
    </div>
  )
}

export default Congrates