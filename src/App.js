import React from 'react';
import './App.css';

import Home from './components/Home';
import Details from './components/Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom';

function App() {
  
  return (
  <Router>
    <div className="App">
      
      
      <div>
        <Switch>
          <Route exact path ="/" component={Home}/>

          <Route exact path ="/users/:id" component={Details}/>
        </Switch>
      </div>
      
    
    
    </div>
    </Router>
   
  );
}

export default App;
