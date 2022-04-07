import React from 'react';
import LoginForm from '../components/loginForm';
import '../style/login.css';

function Login (){
    return(
        <main className="main-container">
            <div className="main-content">
            <h1>Welcome to CodeLeap network!</h1>
            <LoginForm />
            </div>  
        </main>
    )
}
  
  export default Login;