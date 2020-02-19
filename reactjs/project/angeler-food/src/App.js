import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/common.css';
import './App.css';
import Header from "./Header/Header.component";

class App extends Component{

    render(){
      return (
        <div className="App">
          <Header />
        </div>
      );
    }

}

export default App;
