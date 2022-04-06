import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../actions';
import '../style/login.css';

function Login (){
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
      navigate("/home", {state: username});
   }
    return(
        <main className="main-container">
            <div className="main-content">
            <h1>Welcome to CodeLeap network!</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-text">
                    <label htlmfor="name">
                        <span>Please enter your username</span>
                        <input type="text" name="name" value={username} placeholder="John Doe" onChange={handleInput} />
                    </label>
                </div>
                
                <input type="submit"
                value="ENTER"
                data-testid="button-submit" 
                disabled={disabled}
                className={disabled? "submit-button-grey":"submit-button" }/>
            </form>
            </div>  
        </main>
    )
}
  
  export default Login;