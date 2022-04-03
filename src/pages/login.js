import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

function Login (){
   const [disabled, setDisabled] = useState(true);
   const [username, setUsername] = useState();
   const navigate = useNavigate();

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
                        <input type="text" data-testid="username" name="name" value={username} placeholder="John Doe" onChange={handleInput} />
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