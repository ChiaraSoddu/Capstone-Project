import React from 'react';
import { loginAction } from "../redux/actions";
import '../Styles/Subscription.css'
import {  useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();

     const handleSubmit = (e) => {
      
            e.preventDefault();
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: pass})
                 }

            fetch("http://localhost:8080/auth/login", options)
            .then(res => res.json())
            .then(res => {console.log(res); dispatch(loginAction({username: username, token: res.token, id: res.id}))})
            .then(res => navigate('/profile'))
            
            
    }



    return(
        <div className='auth-form-container'>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <label className='fm' htmlFor="username">Username</label>
                <input className='fm fmi' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="yourUsername" id="username" name='username'/> 
                <label className='fm' htmlFor="password">PASSWORD</label>
                <input className='fm fmi' value={pass } onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name='password'/> 
                <button className='btnf' type='submit'>LOG IN</button>
            </form>
            <button className='btnf' onClick={() => props.onFormSwitch('signup')}>Non hai un account? Registrati qui.</button>
        </div>
    )
}
export default Login;
