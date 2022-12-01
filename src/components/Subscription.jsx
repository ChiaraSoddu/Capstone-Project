import React, { useState } from 'react';
import '../Styles/Subscription.css';
import SignUp from './SignUp';
import Login from './Login';

const Subscription = () => {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
    <div className='sub'>

    
    {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
    }  
        
    </div>)
}

export default Subscription;
