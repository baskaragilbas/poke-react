import React from 'react';
import PropTypes from 'prop-types';
import styles from './PokemonBox.module.css';

const PokemonBox = () => (
  <div className={styles.PokemonBox} data-testid="PokemonBox">
    PokemonBox Component
  </div>
);

PokemonBox.propTypes = {};

PokemonBox.defaultProps = {};

export default PokemonBox;
