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
      <div >
        <div class="card-group">
          {items.map(item => {
            return (
              <PokemonCard data={item}></PokemonCard>
            )
          })}
        </div>
      </div>
    );
  }
};

export default PokemonList;
