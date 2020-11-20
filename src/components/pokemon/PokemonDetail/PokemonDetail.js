import React from 'react';
import styles from './PokemonDetail.module.css';
import { useParams } from 'react-router-dom';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonDetail() {
  let [pokemon, setPokemon] = React.useState(null)
  const { id } = useParams();
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  React.useState(() => {
    const url = baseUrl + id

    const fetchData = async (url) => {
      //getting the pokemon data
      const pokemonDetail = await fetch(
        url
      ).then(function (result) {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(pokemonDetail);
        }
      }).catch(function (err) {
        console.warn("API '" + url + "' " + err + " .");
      });

      let data = await pokemonDetail.json()

      //Getting the species data
      const speciesDetail = await fetch(
        data.species.url
      ).then(function (result) {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(speciesDetail);
        }
      }).catch(function (err) {
        console.warn("API '" + data.species.url + "' " + err + " .");
      });

      //attaching the spesies data into pokemon data
      data.species.detail = await speciesDetail.json()

      //getting the lastest english description from a bunch of flavor text
      data.species.detail.flavor_text_entries.some(flavor => {
        if (flavor.language.name === 'en') {
          data.species.description = flavor.flavor_text.replace(/\s\\.|\\.\s/g, ' ').replace(/\\./g, 's');
        }
      })

      setPokemon(data)

    };

    fetchData(url);
  }, [])

  function toCapital(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  function toCapitalCase(text) {
    let words = text.split('-')
    words.map((word, index) => words[index] = toCapital(word))
    return words.join(" ")
  }

  if (!pokemon) {
    return (
      <div>Loading...</div>
    )
  }

  const pokeStat = {
    'hp': pokemon.stats.filter(stat => stat.stat.name === "hp")[0].base_stat,
    'attack': pokemon.stats.filter(stat => stat.stat.name === "attack")[0].base_stat,
    'defense': pokemon.stats.filter(stat => stat.stat.name === "defense")[0].base_stat,
    'special_attack': pokemon.stats.filter(stat => stat.stat.name === "special-attack")[0].base_stat,
    'spesial_defense': pokemon.stats.filter(stat => stat.stat.name === "special-defense")[0].base_stat,
    'speed': pokemon.stats.filter(stat => stat.stat.name === "speed")[0].base_stat,
  }

  function objectSum(obj) {
    let sum = 0
    for (let key in obj) {
      sum += obj[key];
    }
    return sum
  }



  return (
    <div class="card mt-4 mb-5">
      <div class="card-group mt-4">
        <div class="col-md-3">
          <PokemonCard pokeID={id} url={pokemon.sprites.front_default} name={toCapital(pokemon.name)} cardLink={false}></PokemonCard>
        </div>
        <div class="col-md-9 text-left table-responsive">
          <table class="table  " >
            <thead>
              <tr>
                <th scope="col" colSpan="2">Pokemon Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="align-middle">Type</th>
                <td class="align-middle">
                  <div class="container">
                    {
                      pokemon.types.map(pokemonType => <span class={"badges badge-pill mr-1 " + styles[pokemonType.type.name]}>{toCapital(pokemonType.type.name)}</span>)
                    }
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="align-middle">Species</th>
                <td class={styles.width}>
                  <tr><strong><u>{toCapital(pokemon.species.name)}</u></strong></tr>
                  <tr>{pokemon.species.description}</tr>
                </td>
              </tr>
              <tr>
                <th scope="row" class="align-middle">Abilities</th>
                <td class="align-middle">
                  <ul>
                    {
                      pokemon.abilities.map(ability => {
                        return <li> {toCapitalCase(ability.ability.name)} </li>
                      })}
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row" class="align-middle">Games</th>
                <td >
                  {
                    pokemon.game_indices.map((game, index) => {
                      return <span>{toCapitalCase(game.version.name)}{index !== pokemon.game_indices.length - 1 ? ',' : ''} </span>
                    })
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-4 text-left table-responsive">
          <table class="table " >
            <thead>
              <tr>
                <th scope="col" class="col-auto" colSpan="2">Pokemon Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="align-middle">HP</th>
                <td class="align-middle">
                  <div class="progress">
                    <div class="progress-bar"
                      role="progressbar"
                      style={{
                        width: pokeStat.hp + '%',
                      }}>
                      <small>{pokeStat.hp}</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class={"align-middle " + styles.tableFit}>Attack</th>
                <td class="align-middle">
                  <div class="progress">
                    <div class="progress-bar"
                      role="progressbar"
                      style={{
                        width: pokeStat.attack + '%',
                      }}>
                      <small>{pokeStat.attack}</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class={"align-middle " + styles.tableFit}>Defense</th>
                <td class="align-middle">
                  <div class="progress">
                    <div class="progress-bar"
                      role="progressbar"
                      style={{
                        width: pokeStat.defense + '%',
                      }}>
                      <small>{pokeStat.defense}</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class={"align-middle " + styles.tableFit}>Special Attack</th>
                <td class="align-middle">
                  <div class="progress">
                    <div class="progress-bar"
                      role="progressbar"
                      style={{
                        width: pokeStat.special_attack + '%',
                      }}>
                      <small>{pokeStat.special_attack}</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class={"align-middle " + styles.tableFit}>Special Defense</th>
                <td class="align-middle">
                  <div class="progress">
                    <div class="progress-bar"
                      role="progressbar"
                      style={{
                        width: pokeStat.spesial_defense + '%',
                      }}>
                      <small>{pokeStat.spesial_defense}</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class={"align-middle " + styles.tableFit}>Speed</th>
                <td class="align-middle">
                  <div class="progress">
                    <div class="progress-bar"
                      role="progressbar"
                      style={{
                        width: pokeStat.speed + '%',
                      }}>
                      <small>{pokeStat.speed}</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class={"align-middle " + styles.tableFit}>Total</th>
                <td class="align-middle">
                  <div>
                    {objectSum(pokeStat)}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-8 text-left">
          <table class="table  " >
            <thead>
              <tr>
                <th scope="col" colSpan="2">Pokemon Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="align-middle">Move</th>
                <td class="align-middle">
                  <strong>Game Groups</strong>
                </td>
              </tr>
              {pokemon.moves.map((move) => {
                let gameList = move.version_group_details.map((group) => {
                  return group.version_group.name
                })

                let uniqueList = [...new Set(gameList)]
                if (move.move.name === 'vine-whip') {
                  console.log(uniqueList)
                }
                return (

                  <tr>
                    <th scope="row" class="align-middle">{toCapitalCase(move.move.name)}</th>
                    <td class={styles.width}>
                      <tr>{uniqueList.map((game, index) => {
                        return (
                          <span>{toCapitalCase(game)}{index !== uniqueList.length - 1 ? ',' : ''} </span>
                        )

                      })}</tr>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )


};

export default PokemonDetail;
