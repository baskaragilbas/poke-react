import React from 'react';
import PropTypes from 'prop-types';
import styles from './PokemonDetail.module.css';

const PokemonDetail = () => (
  <div className={styles.PokemonDetail} data-testid="PokemonDetail">
    PokemonDetail Component
  </div>
);

PokemonDetail.propTypes = {};

PokemonDetail.defaultProps = {};

export default PokemonDetail;
