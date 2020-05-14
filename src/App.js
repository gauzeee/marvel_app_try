import React from 'react';
import './App.css';
import CurrentChar from './components/charInfo';
import Home from './components/home';
import {Route, Switch} from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/char/:id' component={CurrentChar}/>
            </Switch>
        </div>
    );
  }
}


export default App;

