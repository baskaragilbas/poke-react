import logo from './logo.svg';
import React from 'react'
import './App.css';

import NavBar from './components/layout/NavBar/NavBar';
import Pagination from './components/layout/Pagination/Pagination';

function App() {
  const [responseData, setResponseData] = React.useState(null);
  
  const baseUrl = 'https://pokeapi.co/api/v2/'
  
  React.useEffect(() => {
    let url = baseUrl+'pokemon?limit=1000000&offset=0'
    const fetchData = async (url) => {
     
      const response = await fetch(
        url
      ).then(function (result) {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(response);
        }
      }).catch(function (err) {
        console.warn("API '" + url + "' " +err+" ." );
      });

      let data = await response.json()
      setResponseData(data);
    };
    
    fetchData(url);
  }, [])
  
  if(!responseData){
    return(
      <div>Loading..</div>
    )
  }else{
    return (
    <div className="App">
      <NavBar data={responseData.results}></NavBar>
      {/* <PokemonList data={responseData.results}></PokemonList> */}
      <Pagination data={responseData.results} total={responseData.count} ></Pagination>
    </div>
  );
  }
}

export default App;
