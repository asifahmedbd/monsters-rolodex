import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      profiles: [],
      // name: {first_name: 'Asif', last_name: 'Ahmed'},
      // company: 'BJIT'
      // profiles:[
      //   {
      //     id: '1',
      //     name: 'Asif Ahmed'
      //   },
      //   {
      //     id: '2',
      //     name: 'Javed Nayeem'
      //   },
      //   {
      //     id: '3',
      //     name: 'Raju Ahmed'
      //   }
      // ]
    } // object
  }

  componentDidMount(){
    // promise that is asynchronize
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return { profiles: users };
    },
    ()=>{
      console.log(this.state);
    }
    ));
  }

  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Here' onChange={(event)=>{console.log(event)}} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>Hi {this.state.name.first_name} {this.state.name.last_name}, I worked at {this.state.company}</p>
          <button onClick={()=>{
            //this.setState({ name: {first_name: 'Arshan', last_name: 'Ahmed'} });
            this.setState(()=>{
              return {
                name: {first_name: 'Arshan', last_name: 'Ahmed'},
              }
            },
            ()=>{
              console.log(this.state);
            } // follow-up call back
            );
          }}>Change Name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello I am Asif
          </a>
        </header> */}
        {
          this.state.profiles.map((profile)=>{
            return <h1 key={profile.name}>{profile.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
