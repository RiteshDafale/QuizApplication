import React, { useContext, useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import homePhoto from '../image/image2.png'
import { Context,setname } from '../Context/Context'



function Home() {
  const [userName,setuserName] = useState({});
  const navigate = useNavigate();
  // const setname = useContext(Context)
  return (
    <div className='App   border border-danger'>
      <p>Your entered name: {userName.username}</p>
      <div className="  bg-secondary w-100">
        <img src={homePhoto} class="photo img-fluid object-fit-cover" alt="..." />
      </div>

      <div className="container-fluid border border-primary ">
        <div className="content">
          <h3 className='mt-3'>Battle of Questions!</h3>
          <p className='text-start'>Welcome to Quick Questions Showdown, where your knowledge will be put to the test! Enter your name and answer as many questions as you can to climb to the top of the leaderboard</p>
        </div>
        <div className=" forms mt-3 d-flex flex-column justify-content-center align-items-center bg-customColor w-100">
          <div className="input m-2 border border-danger">
            <input type="text" className='w-100 fs-5 text-center' id="username"   placeholder='Enter your name ...' required 
            onChange={(e)=>{
              setuserName({
                ...userName,
                username:e.target.value
              })
            }}            
            />
            <input type="text" className='w-100 my-3 fs-5 text-center' placeholder='Username  ...'  required/>
            <input type="text" className='w-100 mb-3 fs-5 text-center' placeholder='Email id ...' />
            <button className='rounded-3'
            onClick={(e)=>{
              // setname(userName.username);
              navigate("/question")
            }}            
            >START</button>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
