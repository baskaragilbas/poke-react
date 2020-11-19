import React from 'react';
import styles from './PokemonCard.module.css';


function PokemonCard({ data }) {
  const pokeID = data.url.split('/').slice(-2).reverse().pop()
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png"

  const name = data.name.charAt(0).toUpperCase() + data.name.slice(1)

  const [loading, setLoading] = React.useState(true)
  
  return (
    <div class="col-md-3 col-sm-6 mb-5">
      <a class={styles.NoStyle} href={"./" + pokeID}>
        <div class="card">
          <div class="card-header">
            {pokeID}
          </div>
          {loading ? <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div> : ''}
          <img class="card-img-top bg-secondary"
            src={url}
            alt="Pokemon Sprite"
            onLoad={() => { setLoading(false) }}
          />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};
export default PokemonCard;
