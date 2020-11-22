import React from 'react';
// import styles from './PokemonList.module.css';
import PokemonCard from '../PokemonCard/PokemonCard'
import Pagination from '../../layout/Pagination/Pagination'
import SearchBar from '../../layout/SearchBar/SearchBar'

function PokemonList({ data, isOwnedPokemon }) {
  const [wholeData, setWholeData] = React.useState(data)
  const [limit, setLimit] = React.useState(20)
  const [paginationData, setPaginationData] = React.useState(wholeData.slice(0, limit))
  const [startOffset, setStartOffset] = React.useState(0)
  const [endOffset, setEndOffset] = React.useState(limit)

  React.useEffect(() => {
    setWholeData(data)
  }, [data])

  React.useEffect(() => {
    if (endOffset > wholeData.length) {
      setPaginationData(wholeData.slice(wholeData.length - endOffset))
    } else {
      setPaginationData(wholeData.slice(startOffset, endOffset))
    }
  }, [startOffset, endOffset, wholeData])

  function paginationDataHandler(activePage) {
    setStartOffset((activePage - 1) * limit)
    setEndOffset((activePage * limit))
  }

  function searchFilter(string) {
    if (string.length > 0) {
      let filteredData = data.filter(x => x.name.toLowerCase().includes(string.toLowerCase()))
      setWholeData(filteredData)
    } else {
      setWholeData(data)
    }
  }

  if (paginationData === undefined || paginationData.length === 0) {
    return <div></div>
  }
  return (
    <div>
      <SearchBar searchFilter={searchFilter}></SearchBar>
      <div class="card-group">

        {paginationData.map(item => {
          const pokeID = item.url.split('/').slice(-2).reverse().pop()
          const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png"

          const name = item.name.charAt(0).toUpperCase() + item.name.slice(1)
          let urlCard = (isOwnedPokemon ? ('/pokebox/' + item.id) : ('/pokemon/' + pokeID))
          return (
            <div class="col-md-3 col-sm-6 mb-5">
              <PokemonCard pokeID={pokeID} url={url} name={name} cardLink={urlCard}></PokemonCard>
            </div>
          )
        })}
      </div>
      <Pagination total={wholeData.length} limit={limit} functionHandler={{ setPage: paginationDataHandler }} />
    </div>
  );
};

export default PokemonList;
