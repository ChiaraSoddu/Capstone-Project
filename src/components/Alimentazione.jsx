import React from 'react';
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../Styles/Alimentazione.css'
import Recipe from './Recipe';

const Alimentazione = () => {

    const [data, setData] = useState([])
    const [food, setFood] = useState('')
  
    const searchFood = () => {
      console.log('search')

      fetch('https://api.api-ninjas.com/v1/nutrition?query=' + food, { headers: { 'X-Api-Key': 'Gqol56pesTxCXBqBEkOjsWKuKITPV04NkfxAzvX9' } })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
      console.log(data)
      setFood('')  
    }

    return(
    <>
    <section className='PageW'>
    <div  style={{ height:'15vh'}}>
        <div className="search">
            <input type="text"
            value={food}
            onChange= {e => setFood(e.target.value)}
            placeholder='search food'
             />  
             <button onClick={searchFood}>Cerca</button> 
       </div>
       </div>
     
    
    <Table striped bordered hover variant="dark" style={{width: '80vw'}}>
      <thead>
        <tr>
          <th>1</th>
          
          <th>name</th>
          {data[0] ?
          <th>{data[0].name}</th> : null}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>calorie</td>
          {data[0] ?
          <td>{data[0].calories}</td> : null }
        </tr>
        <tr>
          <td>3</td>
          <td>Proteine</td>
          {data[0] ?
          <td>{data[0].protein_g} g</td> : null}
        </tr>
        <tr>
          <td>4</td>
          <td>Grassi</td>
          {data[0] ?
          <td >{data[0].fat_total_g} g</td> : null}
        </tr>
      </tbody>
    </Table>
    </section>


    <div>
      

      <Recipe/>

    </div>
    </>
    )
}

export default Alimentazione
