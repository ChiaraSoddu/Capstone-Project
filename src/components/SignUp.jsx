import React, { useState } from 'react';

const SignUp = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return(
        <div className='auth-form-container'>
        <form onSubmit={handleSubmit} className='form'>
            <label className='fm' htmlFor="name">NOME E COGNOME</label>
            <input className='fm' value={name} onChange={(e) => setName(e.target.value)} name='name' placeholder='nome e cognome'/>
            <label className='fm' htmlFor="email">EMAIL</label>
            <input className='fm' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name='email'/>
            <label className='fm' htmlFor="password">PASSWORD</label>
            <input className='fm' value={pass } onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name='password'/>
            <button className='btnf'>SIGN UP</button>
        </form>
        <button className='btnf' onClick={() => props.onFormSwitch('login')}>Hai già un account? Vai alla pagina di Login</button>
    </div> 
    )
}
export default SignUp;