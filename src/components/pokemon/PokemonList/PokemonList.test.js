import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonList from './PokemonList';

describe('<PokemonList />', () => {
  test('it should mount', () => {
    render(<PokemonList />);
    
    const pokemonList = screen.getByTestId('PokemonList');

    expect(pokemonList).toBeInTheDocument();
  });
});