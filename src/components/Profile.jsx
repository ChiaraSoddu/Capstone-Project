import React from 'react';
import '../Styles/Profile.css'
import p from '../img/profilep.png'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';
import { logoutAction } from '../redux/actions';

const Profile = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

  /*  const params = useParams();
    const dispatch = useDispatch();
    const user = useSelector(
        (state) =>
        state.users.fetchedUsers[0]?.filter((el) => el._id === params.id)[0]
    );

    const experiences = useSelector(state => state.experiences.fetchedUserExperiences);

    */
    const [email, setEmail] = useState('')
    const loggedUser = useSelector(state => state.loggedUser.state.username);
    const token = useSelector(state => state.loggedUser.state.token);
  
        const getUser= () => {
            fetch(`http://localhost:8080/users/get/${loggedUser}`, { headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' +{token}}})
            .then(res => res.json())
            .then(res => {console.log(res); setEmail(res.email)});
        }

    useEffect(() => {  
      getUser();
  
    }, [])

    const logout = () => {
        dispatch(logoutAction())
      };
    

    return(
    
        <div className='profile'>
            <div className='profileWrapper'>
                
                <form className="profileForm">
                    <label>Immagine Profilo</label>
                    <div className='profilePP'>
                       <img 
                       src={p}
                       alt="fotoprfl" 
                       /> 
                    </div>
                    <label>{loggedUser}</label>
                    <label>{email}</label>
                    
                </form>

                <button onClick={()=> {logout(); navigate('/')}}>LogOut</button>
            </div>
        </div>
    )
}
    

export default Profile