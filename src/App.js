import React from 'react'
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/layout/NavBar/NavBar';
import Pagination from './components/layout/Pagination/Pagination';
import PokemonDetail from './components/pokemon/PokemonDetail/PokemonDetail';
import PokemonBox from './components/pokemon/PokemonBox/PokemonBox';

function App() {
  const [apiData, setApiData] = React.useState(null);
  const baseUrl = 'https://pokeapi.co/api/v2/'

  React.useEffect(() => {
    let url = baseUrl + 'pokemon?limit=1000000&offset=0'
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
        console.warn("API '" + url + "' " + err + " .");
      });

      let data = await response.json()
      setApiData(data);
    };

    fetchData(url);
  }, [])

  if (!apiData ) {
    return (
      <div>
        <NavBar />
        <div class="text-center">Loading..</div>
      </div>

    )
  } else {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Switch>
              <Route exact path='/'>
                <Pagination data={apiData.results} total={apiData.count} />
              </Route>
              <Route path="/pokemon/:id" component={PokemonDetail} />
              <Route path="/pokebox">
              <PokemonBox/>
              </Route>
              
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
