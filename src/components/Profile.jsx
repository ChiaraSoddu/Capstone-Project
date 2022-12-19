import React from 'react';
import '../Styles/Profile.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';
import { logoutAction } from '../redux/actions';

const Profile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

  
    const [email, setEmail] = useState('')
    const loggedUser = useSelector(state => state.loggedUser.state.username);
    const token = useSelector(state => state.loggedUser.state.token);

   const [subtype, setSubtype] =useState('')
   const [exp, setExp] = useState('')
  
        const getUser= () => {
            fetch(`http://localhost:8080/users/get/${loggedUser}`, { headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' +{token}}})
            .then(res => res.json())
            .then(res => {console.log('profilo:', res); setEmail(res.email)});
        }

        const getSub= () => {
          fetch(`http://localhost:8080/subscription/get/${loggedUser}`, { headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' +{token}}})
            .then(res => res.json())
            .then(res => {console.log('profilo:', res); setExp(res.exp); setSubtype(res.subtype);})
            .catch(err => {return(
              alert('nessun abbonamento attivo')
            )})
        }

    useEffect(() => {  
      getUser();
      getSub();
  
    }, [])

    const logout = () => {
        dispatch(logoutAction())
      };
    

    return(
    
        <div className='profile'>
            <div className='profileWrapper'>
                
                
                    
                    
                <h3 className='useprofile'>Username:</h3>
                <p className='useprofile'>{loggedUser}</p>
                <h3 className='useprofile'>Email:</h3>
                <p className='useprofile'>{email}</p> 
                
                
                {exp? <>
                <h3 className='useprofile'>Abbonamento attivo:</h3>
                <p className='useprofile'>{subtype}</p>
                <h3 className='useprofile'>Scadenza:</h3>
                <p className='useprofile'>{exp}</p>
                </> : null}
                
                    
                

                <button className='btnprof' onClick={()=> {logout(); navigate('/')}}>LogOut</button>
            </div>
        </div>
    )
}
    

export default Profile