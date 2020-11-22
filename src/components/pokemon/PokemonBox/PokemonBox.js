import React from 'react';
//import styles from './PokemonBox.module.css';
import AppContext from '../../../AppContext'
import PokemonList from '../PokemonList/PokemonList';



function PokemonBox() {
  const dataContext = React.useContext(AppContext)
  return (
    <div>
      <PokemonList data={dataContext.persistData} isOwnedPokemon={true} />
    </div>
  )
};

export default PokemonBox;
