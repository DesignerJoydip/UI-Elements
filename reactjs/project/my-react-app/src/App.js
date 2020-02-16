import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {CardList} from "./components/card-list/card-list.component";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

class App extends Component{

  constructor() {
    super(); // this call state

    this.state = {
      string: 'Re-write State',
      AvatarArray:[
        {
          name: 'Avater 1',
          id: '1'
        },
        {
          name: 'Avater 2',
          id: '2'
        },
        {
          name: 'Avater 3',
          id: '3'
        },
        {
          name: 'Avater 4',
          id: '4'
        }
      ],
      usersArray:[]
    };


  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then(users => this.setState({ usersArray: users }));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
          <p>{this.state.string}</p>
          <button onClick = {() => this.setState({ string: 'Hello New state' }) }>Click</button>
          <div>
            {
              this.state.AvatarArray.map(avater => (<h3 key={avater.id}>{ avater.name }</h3>))
            }
          </div>
          <div>
            {
              this.state.usersArray.map(user => (<h3 key={user.id}>{user.name}</h3>))
            }
          </div>
          {/* <CardList>{
            this.state.AvatarArray.map(avater => (<h3 key={avater.id}>{avater.name}</h3>))
          }</CardList> */}

          <CardList AvatarArray={this.state.AvatarArray} />
        </header>
      </div>
    )
  }

}

export default App;
