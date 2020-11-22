import React from 'react';
import styles from './PokemonCard.module.css';
import { Link } from 'react-router-dom'

function PokemonCard({ name, url, pokeID, cardLink }) {
  const [loading, setLoading] = React.useState(true)
  return (
    <Link class={cardLink ? styles.NoStyle : styles.NoLink} to={cardLink}>
      <div class="card">
        <div class="card-header text-left">
          Pokemon No. : {pokeID}
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
    </Link>
  );
};
export default PokemonCard;
