import React from 'react';
import PokemonList from '../../pokemon/PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Pagination.module.css';

function Pagination({ data, total }) {
  const [limit, setLimit] = React.useState(20)
  const [pageNumber, setPageNumber] = React.useState(Math.ceil(total / limit));
  const [activePage, setActivePage] = React.useState(1)
  const [iterator, setIterator] = React.useState([])
  const [wholeData, setWholeData] = React.useState(data)
  const [paginationData, setPaginationData] = React.useState(data.slice(0, limit))

  React.useEffect(() => {
    setPagination(activePage, limit, total)

    let arr = []
    if (pageNumber <= 5) {
      for (let i = 1; i <= pageNumber; i++) {
        arr.push(i)
      }
    } else {
      if (activePage <= 3) {
        for (let i = 1; i <= activePage + 2; i++) {
          arr.push(i)
        }
        arr.push('...')
        arr.push(pageNumber)
      } else if (activePage >= pageNumber - 3) {
        arr.push(1)
        arr.push('...')
        for (let i = activePage - 2; i <= pageNumber; i++) {
          arr.push(i)
        }
      } else {
        arr.push(1)
        arr.push('...')
        for (let i = activePage - 2; i <= activePage + 2; i++) {
          arr.push(i)
        }
        arr.push('...')
        arr.push(pageNumber)
      }
    }
    setIterator(arr)

    window.scrollTo(0,0)


  }, [activePage, pageNumber, wholeData, limit])

  function setPagination(activePage, limit, total) {
    const startOffset = (activePage - 1) * limit
    const endOffset = (activePage * limit)

    if (endOffset > total) {
      setPaginationData(wholeData.slice(total - endOffset))
    } else {
      setPaginationData(wholeData.slice(startOffset, endOffset))
    }
  }

  function searchFilter(string) {
    if (string.length > 0) {
      let filteredData = data.filter(x => x.name.toLowerCase().includes(string.toLowerCase()))
      setWholeData(filteredData)
      setActivePage(1)
      setPageNumber(Math.ceil(filteredData.length / limit))

    } else {
      setWholeData(data)
      setActivePage(1)
      setPageNumber(Math.ceil(total / limit))
    }
  }

  return (
    <div>
      <SearchBar searchFilter={searchFilter}></SearchBar>
      <PokemonList data={paginationData}></PokemonList>
      <ul class="pagination justify-content-center">
        {activePage !== 1 &&
          <li class="page-item">
            <span class="page-link" onClick={() => setActivePage(activePage - 1)}>Previous</span>
          </li>
        }
        {iterator.map(i => {
          return <li class={`page-item ${i === activePage ? "active" : ""}`}><a class="page-link" onClick={() => { if (!isNaN(i)) { return setActivePage(i) } }}>{i}</a></li>
        })}
        {activePage !== pageNumber &&
          <li class="page-item">
            <span class="page-link" onClick={() => setActivePage(activePage + 1)}>Next</span>
          </li>
        }
      </ul>

    </div>
  )
};

export default Pagination;
