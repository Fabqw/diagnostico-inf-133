import React, { useEffect, useState } from 'react'
import css from './home.module.scss'
import Header from './Header/Header'
import { URL_POKEMON } from '../api/apiRest'
import axios from 'axios'
import Card from './Card/Card'

export default function Home() {

  const limit = 45
  const [arrayPokemon, setArrayPokemon] = useState([])
  
  useEffect(() => {    
    
    const api = async () => {
      const apiPoke = await axios.get(`${URL_POKEMON}/?offset=0&limit=${limit}`);
      setArrayPokemon(apiPoke.data.results);
    }
    
    api();
  }, []);
  
  console.log(arrayPokemon);

    // return (
    //  <div className={css.home}>
    //      <Header/>
    //      <div className={css.card_cont}>
    //        {arrayPokemon.map((card, index) =>{
    //          return <Card  key={index} card={card} />;
    //        })}
    //      </div>
    //  </div>
    // )
  return (
    <div className={css.home}>
      <Header />
      <div className={css.card_cont}>
        {arrayPokemon.slice(0, 45).map((card, index) => (
          (index + 1) % 5 === 0 ? (
            <Card key={index} card={card} />
          ) : null
        ))}
      </div>
    </div>
  );
  
}
