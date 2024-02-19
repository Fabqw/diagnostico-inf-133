import React, { useEffect, useState } from 'react'
import css from './card.module.scss'
import axios from 'axios'
import { URL_ESPECIES, URL_POKEMON } from '../../api/apiRest'

export default function Card({card}) {
    
    const [itemPokemon, setItemPokemon] = useState({})
    const [especiePokemon, setEspeciePokemon] = useState({})
    
    //console.log(itemPokemon);

    useEffect(() => {
        const dataPokemon = async () =>{
            const api = await axios.get(`${URL_POKEMON}/${card.name}`);
            setItemPokemon(api.data);
        }

        dataPokemon();
    }, []);

    useEffect(() => {
        const dataEspecie = async () =>{
            const URL = card.url.split("/");
            const api = await axios.get(`${URL_ESPECIES}/${URL[6]}`);
            setEspeciePokemon(api.data);
        }
        dataEspecie();
    }, []);

    console.log(especiePokemon?.color?.name);
    let pokeId = itemPokemon?.id?.toString();
    if (pokeId?.length === 1){
        pokeId = "00" + pokeId;
    }else if(pokeId?.length === 2){
        pokeId = "0" + pokeId;
    }
    let pokeTam  = (itemPokemon?.height)/10;
    return (
        <div className={css.card}> 
            <div className={css.my_pokemon}>My Pokemon</div>
            <div className={css.sup_card}>
                <div className={css.name_card}>{itemPokemon.name}</div>                
                <div className={css.id_card}>{pokeId}</div>
            </div>           
            <img className={css.img_poke} src={itemPokemon?.sprites?.other["official-artwork"]?.front_default} alt="pokemon" />            
            <div className={css.inf_card}>
                <div className={css.about}>About</div>
                <div className={css.linea}></div>
                <div className={css.resp1}>                    
                    <div className={css.data_poke}>Type</div>
                    <div className={css.resp_poke2}>
                        {itemPokemon?.types?.map((ti, index)=>{
                            return(
                                <div key={index} className={css.resp_type}>            
                                    <div className={css.resp_poke1}>{ti.type.name}</div>
                                </div>  
                            )
                        })}
                    </div>                                                            
                </div>        
                <div className={css.resp1}>
                    <div className={css.data_poke}>Height</div>
                    <div className={css.resp_poke}>{pokeTam} m</div>
                </div>
                <div className={css.resp1}>
                    <div className={css.data_poke}>Weight</div>
                    <div className={css.resp_poke}>{itemPokemon.weight} kg</div>
                </div>
                <div className={css.resp1}>
                    <div className={css.data_poke}>Abilities</div>
                    <div className={css.resp_poke2}>
                        {itemPokemon?.abilities?.map((ti, index)=>{
                            return(
                                <div key={index} className={css.resp_type}>            
                                    <div className={css.resp_poke1}>{ti.ability.name}</div>
                                </div>  
                            )
                        })}
                    </div>
                </div>
                <div className={css.stats}>Stats</div>
                <div className={css.resp}>
                    {itemPokemon?.stats?.map((sta, index) => {
                        return (                            
                            <div key={index} className={css.resp_stat}>
                                <div className={css.data_poke}>{sta.stat.name}</div>
                                <div className={css.resp_poke}>{sta.base_stat}</div>
                            </div>
                        )
                    })}
                </div>
            </div>            
        </div>
    )
}
