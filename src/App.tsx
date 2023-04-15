import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => 
      this.setState(
        () => {
          return { monsters: json };
        })
      )
      .catch(error => console.log('something went wrong'));
  }

  onSearchChange = (e) => {   
    const searchField = e.target.value.toLowerCase();
    this.setState(
      () => {
      return { searchField };
    })
  }

  render() {
    
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const searchResults = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
  })

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>

        <SearchBox
        className='monster-search-box'
        placeholder='Search for monsters...' 
        onSearchChange={ onSearchChange }/>

        <CardList monsters={ searchResults }/>

      </div>
    );
  }
}
export default App;
