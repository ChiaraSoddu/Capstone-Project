import '../Styles/Profile.css'
import p from '../img/profilep.png'

const Profile = () => {
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