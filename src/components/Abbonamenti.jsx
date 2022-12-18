import React from 'react';
import '../Styles/Abbonamenti.css'
import CardAbb from './CardAbb';
import { useSelector } from 'react-redux';

const Abbonamenti =()=> {

 
    return(
        <section className='sa'>
          <CardAbb type='MENSILE'/>
          <CardAbb type='SEMESTRALE'/>
          <CardAbb type='ANNUALE'/>
        </section>
    )
}

export default Abbonamenti;