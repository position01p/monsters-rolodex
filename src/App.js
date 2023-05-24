import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => { return { monsters: users } }
        )
      )
  }

  onSearchChang = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={this.onSearchChang}
          className={"monster-search-box"}
          placeholder={"monster search"}
        />
        {/* 隱藏的顯示 */}
        {/* {filteredMonster.map((monster) => {
          return <div key={monsters.id}><h1>{monster.name} </h1></div>
        })
        } */}
        <CardList monsters={filteredMonster} />
      </div>
    );
  };

};

export default App;