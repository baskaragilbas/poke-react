import React from 'react';
// import styles from './Pagination.module.css';

function Pagination({ limit, total, functionHandler }) {
  const [pageNumber, setPageNumber] = React.useState(Math.ceil(total / limit));
  const [activePage, setActivePage] = React.useState(1)
  const [iterator, setIterator] = React.useState([])

  React.useEffect(() => {
    setPageNumber(Math.ceil(total / limit))
  }, [total, limit])

  React.useEffect(() => {

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
    window.scrollTo(0, 0)
  }, [activePage, pageNumber, total, limit])

  function changePage(i) {
    setActivePage(i)
    functionHandler.setPage(i)
  }

  return (
    <div>
      <ul class="pagination justify-content-center">
        {activePage !== 1 &&
          <li class="page-item">
            <span class="page-link" onClick={() => changePage(activePage - 1)}>Previous</span>
          </li>
        }
        {iterator.map(i => {
          return <li class={`page-item ${i === activePage ? "active" : ""}`}><span class="page-link" onClick={() => { if (!isNaN(i)) { return changePage(i) } }}>{i}</span></li>
        })}
        {activePage !== pageNumber &&
          <li class="page-item">
            <span class="page-link" onClick={() => changePage(activePage + 1)}>Next</span>
          </li>
        }
      </ul>

    </div>
  )
};

export default Pagination;
