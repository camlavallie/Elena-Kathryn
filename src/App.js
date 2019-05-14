import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Layout/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Galla from './Components/Pages/Galla';
import Gallery from './Components/Pages/Gallery';





function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/galla' component={Galla} />
         <Route path='/gallery' component={Gallery} />
        <Route path='/about' component={About} />
         <Route path='/' component={Home} />
      </Switch>
    </div>  
    </Router>
  );
}

export default App;
