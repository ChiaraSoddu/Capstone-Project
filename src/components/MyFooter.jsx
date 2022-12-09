import React from 'react';
import '../Styles/MyFooter.css'

const MyFooter = () => {
    return (
    <section className='foot'>
        <h3 className='tc'>GYM-App by Chiara Soddu</h3>
        <hr className='hrf'/>
        <div className="FirstPartF">
            
            <div className="F1">
                <h4 className='F1'>CHI SIAMO</h4>
                <p>Siamo quelli che non si fermano. Troviamo i modi per andare avanti e allenarci. In ogni circostanza. Crediamo nel movimento e nel potere dell’immaginazione. Abbiamo creato nuovi modi per allenarci, nuovi corsi, nuovi programmi personalizzati di allenamento.</p>
            </div>
            <div className="F2">
                    <a className='af' href='https://www.w3schools.com/charsets/ref_emoji.asp'>Q&A</a> <br />
                    <a className='af' href='https://www.w3schools.com/charsets/ref_emoji.asp'>SPORT IN SICUREZZA</a> <br />
                    <a className='af' href='https://www.w3schools.com/charsets/ref_emoji.asp'>REGOLE E CLUB</a>
            </div>
            <div className="F3">
                <h4 className='F1'>CONTATTI</h4>
                <p>Piazza XXXXX, 44 | 12345 Torino <br/>Email: info@abcdef.it <br/>Tel. 0110110111</p>
            </div>
        </div>


        <div className="Copyright">
            <p>Copyright &copy; Orange Torino S.r.l. - P.IVA 10849120018 - All rights reserved.</p>
        </div>
    </section>
    )
}

export default MyFooter;