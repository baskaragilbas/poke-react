import React from 'react';
import styles from './PokemonList.module.css';
import PokemonCard from '../PokemonCard/PokemonCard'

function PokemonList({ data }) {
  let items = data
  React.useEffect(() => {
    items = data
  }, [data])
  if (items) {
    return (
        <div class="card-group">
          
          {items.map(item => {
            const pokeID = item.url.split('/').slice(-2).reverse().pop()
            const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png"

            const name = item.name.charAt(0).toUpperCase() + item.name.slice(1)
            return (
              <div class="col-md-3 col-sm-6 mb-5">
              <PokemonCard pokeID={pokeID} url={url} name={name} cardLink={true}></PokemonCard>
              </div>
            )
          })}
        </div>
      );
  }
};

export default PokemonList;
