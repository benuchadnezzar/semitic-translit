import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Admin from './Components/Admin'
import './App.css';

class App extends Component {
  
  render() {
    return (
     <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;