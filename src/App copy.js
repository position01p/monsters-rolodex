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
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => { return { monsters: users } }
      ))
  }

  render() {
    const fliteredMonsters = this.state.monsters.filter(
      (monster) => { return monster.name.toLocaleLowerCase().includes(this.state.searchField) }
    )
    const onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase()
      this.setState(() => {
        return { searchField }
      })
    }


    return (
      <div className="App">
        <SearchBox  
        classNameHandler='search-box'
        placeholderHandler='search monsters'
        onChangerHandler={onSearchChange}
        ></SearchBox>

        {/* {fliteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })} */}

        <CardList monsters={fliteredMonsters}></CardList>

      </div>
    );
  }
}

export default App;
