import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-lists/card-list.component';
import SearchBox from './components/search-box/search-box.component';
//import { render } from '@testing-library/react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      profiles: [],
      searchField: '',
    }
  }

  componentDidMount(){
    // promise that is asynchronize
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return { profiles: users };
    },
    ()=>{
      //console.log(this.state);
    }
    ));
  }

  onSearchChange = (event)=>{
      //console.log(event.target.value);
      const searchField = event.target.value.toLocaleLowerCase();
      
      this.setState(()=>{
        return { searchField };
      });
  }

  render() {

    const {profiles, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = profiles.filter((profile)=>{
      return profile.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder={'Search Monsters'} className={'monsters-search-box'} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
