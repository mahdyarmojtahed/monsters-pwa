import React from 'react';
import './App.scss';

import { Component } from 'react';
import { CardList } from './components/cardlist/card-list-component'
import { SearchField} from './components/searchfield/searchfield.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.setState( { monsters: users });
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {

    const { monsters , searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
     
    return (
      <div className="App">
        <h1>Monsters Cards</h1>
        <SearchField placeholder={"Search Monsters ... "} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
        <small>Mahdyar Mojtahed - React.JS PWA try </small>
      </div>
    );
  }
}


export default App;
