import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [ searchField, setSearchField ] = useState('');
  const [ monsters, setMonsters ] = useState([]);
  const [ searchResults, setSearchResults ] = useState([ monsters ]);

  const onSearchChange = (e) => {   
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
};

  const monsterCall = useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => setMonsters(json));
  }, []);


  useEffect(() => { 
    const currentSearch = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField);
    });
    setSearchResults(currentSearch);
  }, [monsters, searchField]);


  return (
    <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>

        <SearchBox
        className='monster-search-box'
        placeholder='Find your monster...' 
        onSearchChange={ onSearchChange }/>

        <CardList monsters={ searchResults }/>
    </div>
  )
}

export default App;
