import '../Styles/MyHome.css'

import Videopalestra from "../video/videopalestra.mp4"
import Fotopalestra from "../img/fotopalestra1.jpg"

const MyHome = () => {
    return(
        <div className='home'>
            <div style={{height: '90vh'}}>
                La nostra palestra
            </div>
            <video 
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '90%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1'
                }}
            >
                <source src={Videopalestra} type="video/mp4"/>
            </video>

            <section className="b">
                <h2 id='lnp'>La nostra palestra</h2>
                <div className="LNP">
                    <p className='H1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img className='H1' src={Fotopalestra} alt="foto palestra" style={{width: 400 + 'px', borderRadius: '50%'}}/>
                </div>
            

                <div className="LNP c">
                    <div className='H2'>
                        <h3>Training</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#abbonamenti" className='abbh'>ABBONAMENTI</a>
                    </div>

                    <div className='H2'>
                        <h4>NELLE NOSTRE <span>PALESTRE</span></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            
            </section>
            <div className='wh'>
                <p> <span className='big'>4 palestre, spazi ampi e diversificati…</span> <br />e tante soluzioni di allenamento per<br />venire incontro alle tue esigenze</p>       
            </div>
        </div>
    )
}

export default MyHome;