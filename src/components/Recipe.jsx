import React from 'react';
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import '../Styles/Alimentazione.css'

const Recipe = () => {

    const [data, setData] = useState([])
    const [food, setFood] = useState('')
  
    const searchFood = () => {
      console.log('search')

      fetch('https://api.api-ninjas.com/v1/recipe?query=' + food, { headers: { 'X-Api-Key': 'Gqol56pesTxCXBqBEkOjsWKuKITPV04NkfxAzvX9' } })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
      console.log(data)
      setFood('')  
    }

    return(
    <section className='recipep'>
    <h3>Recipe example</h3>
    <div  style={{ height:'15vh'}}>
        <div className="search">
            <input type="text"
            value={food}
            onChange= {e => setFood(e.target.value)}
            placeholder='search food'
            className='searchinput'
             />  
             <button className='searchinput' onClick={searchFood}>Cerca</button> 
       </div>
       </div>
     
    
    
    <div>
        
    <Card className='cardrec'>
      <Card.Body>
        {data[0] ?
        <Card.Title>{data[0].title}</Card.Title> : null }
        {data[0] ?
        <Card.Subtitle className="mb-2 text-muted">{data[0].ingredients}</Card.Subtitle> : null }
        {data[0] ?
        <Card.Text>
          {data[0].instructions}
        </Card.Text> : null }
      </Card.Body>
    </Card></div>

    </section>
    )
}

export default Recipe
