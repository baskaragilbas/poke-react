import React from 'react'
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from 'firebase'

import AppContext from './AppContext'
import NavBar from './components/layout/NavBar/NavBar';
import PokemonDetail from './components/pokemon/PokemonDetail/PokemonDetail';
import PokemonBox from './components/pokemon/PokemonBox/PokemonBox';
import PokemonList from './components/pokemon/PokemonList/PokemonList';

function App() {
  const [apiData, setApiData] = React.useState(null);
  const [persistData, setPersistData] = React.useState([]);

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

  const database = firebase.database()

  React.useEffect(() => {
    database.ref('pokemon_collections').once('value', function (snapshot) {
      let returnArr = []
      snapshot.forEach(item => {
        returnArr.push(item.val())
      })
      setPersistData(returnArr)
    })

  }, [database])

  if (!apiData) {
    return (
      <div>
        <NavBar />
        <div class="text-center">Loading..</div>
      </div>

    )
  } else {
    const data = {
      apiData: apiData,
      persistData: persistData,
      setPersistData: setPersistData
    }

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <AppContext.Provider value={data}>
              <Route exact path='/'>
                <PokemonList data={apiData.results} />
              </Route>
              <Route exact path="/pokemon/:id" >
                <PokemonDetail />
              </Route>
              <Route exact path="/pokebox/">
                <PokemonBox />
              </Route>
              <Route exact path="/pokebox/:id">
                <PokemonDetail isOwnedPokemonDetail={true} />
              </Route>
            </AppContext.Provider>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
