import React from 'react';
import { loginAction } from "../redux/actions";
import '../Styles/Subscription.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    /*const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.fetchedUsers[0]);
    const [loggedUser, setLoggedUser] = useState(null); */
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

     const handleSubmit = (e) => {
      
            e.preventDefault();
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: email, password: pass})
            }

            fetch("http://localhost:8080/auth/login", options)
            .then(res => res.json())
            .then(res => console.log(res))
    }
/*
    if (loggedUser) {
        dispatch(loginAction(loggedUser));
        navigate(`/user/${loggedUser._id}`);
    } */



    return(
        <div className='auth-form-container'>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <label className='fm' htmlFor="email">EMAIL</label>
                <input className='fm' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="youremail@gmail.com" id="email" name='email'/> 
                <label className='fm' htmlFor="password">PASSWORD</label>
                <input className='fm' value={pass } onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name='password'/> 
                <button className='btnf'>LOG IN</button>
            </form>
            <button className='btnf' onClick={() => props.onFormSwitch('signup')}>Non hai un account? Registrati qui.</button>
        </div>
    )
}
export default Login;
