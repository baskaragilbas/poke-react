import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonCard from './PokemonCard';

describe('<PokemonCard />', () => {
  test('it should mount', () => {
    render(<PokemonCard />);
    
    const pokemonCard = screen.getByTestId('PokemonCard');

    expect(pokemonCard).toBeInTheDocument();
  });
});