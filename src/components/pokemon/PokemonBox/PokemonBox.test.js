import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonBox from './PokemonBox';

describe('<PokemonBox />', () => {
  test('it should mount', () => {
    render(<PokemonBox />);
    
    const pokemonBox = screen.getByTestId('PokemonBox');

    expect(pokemonBox).toBeInTheDocument();
  });
});