import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../actions';

export default function LoginForm () {
    const [disabled, setDisabled] = useState(true);
   const [username, setUsername] = useState();

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleInput = (event) => {
    setUsername(event.target.value)
   };

   useEffect(()=> {
    if(!username){
        setDisabled(true)
       } else {
       setDisabled(false)
       }
   },[username])

   const handleSubmit = (event) => {
    event.preventDefault();
  
    dispatch(getUser(username))      
    navigate("/home");
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-text">
                    <label htlmfor="name">
                        <span>Please enter your username</span>
                        <input type="text" name="name" className="input-name" value={username} placeholder="John Doe" onChange={handleInput} />
                    </label>
                </div>
                
                <input type="submit"
                value="ENTER"
                disabled={disabled}
                className={disabled? "submit-button-grey":"submit-button" }/>
            </form>
    )
}