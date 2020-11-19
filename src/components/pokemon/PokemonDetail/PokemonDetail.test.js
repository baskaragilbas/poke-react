import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonDetail from './PokemonDetail';

describe('<PokemonDetail />', () => {
  test('it should mount', () => {
    render(<PokemonDetail />);
    
    const pokemonDetail = screen.getByTestId('PokemonDetail');

    expect(pokemonDetail).toBeInTheDocument();
  });
});