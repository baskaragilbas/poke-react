import React from 'react';
//import styles from './PokemonBox.module.css';
import firebase from '../../../Firestore'
import Pagination from '../../layout/Pagination/Pagination';



function PokemonBox() {
  const database = firebase.database()
  const [persistData, setPersistData] = React.useState([]);

  React.useEffect(() =>{
    database.ref('pokemon_collections').once('value', function(snapshot){
      let returnArr = []
      snapshot.forEach(item =>{
        returnArr.push(item.val())
      })
      setPersistData(returnArr)
    })
    
  },[database])

  return (
    <div>
    <Pagination data={persistData} total={persistData.length}/>
    </div>
  )
};

export default PokemonBox;
