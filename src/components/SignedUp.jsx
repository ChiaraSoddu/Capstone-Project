import React from "react";
import '../Styles/SignedUp.css'
import { useNavigate } from "react-router-dom";

const SignedUp = () => {

    const navigate = useNavigate()

    return(

        <div className="SUpage">
            <p>Congratulazioni! La tua iscrizione è andata a buon fine. <br />
                Fai il login per accedere alla tua area personale.
            </p>

            <button className="btnsu" onClick={() => navigate('/subscription')}>Login</button>
        </div>

    )
}

export default SignedUp