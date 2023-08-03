import { Component, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [fliteredMonsters, setFliteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }
    , [])

  useEffect(() => {
    const newfliteredMonsters = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      })
    setFliteredMonsters(newfliteredMonsters)
  },[monsters,searchField])

  const onSearchChange = (event) => {
    const searchFieldstring = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldstring)
  }





  return (
    <div className="App">

      <SearchBox
        classNameHandler='search-box'
        placeholderHandler='search monsters'
        onChangerHandler={onSearchChange}
      ></SearchBox>

      <CardList monsters={fliteredMonsters}></CardList>

    </div>
  );

}


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => { return { monsters: users } }
//       ))
//   }

//   render() {
//    



//     
//   }
// }

export default App;
