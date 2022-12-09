import React from 'react';
import '../Styles/Profile.css'
import p from '../img/profilep.png'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {

  /*  const params = useParams();
    const dispatch = useDispatch();
    const user = useSelector(
        (state) =>
        state.users.fetchedUsers[0]?.filter((el) => el._id === params.id)[0]
    );

    const experiences = useSelector(state => state.experiences.fetchedUserExperiences);

    */


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
                       <input type="file" id='fileInput' style={{display:"none"}} />
                    </div>
                    <label>Nome utente</label>
                    <input type="text" placeholder="Jim" className='inpp'/>
                    <label>Email</label>
                    <input type="email" placeholder="jim@gmail.com" className='inpp'/>
                </form>
            </div>
        </div>
    )
}
    

export default Profile