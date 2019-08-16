import React, {Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Components/Layout/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Galla from './Components/Pages/Galla';
import Gallery from './Components/Pages/Gallery';
import BlogPost from './Components/Pages/BlogPost';
import Login from './Components/Auth/Login';
import Alert from './Components/Layout/Alert';
import Posts from './Components/Posts/Posts';
import Photo from './Components/Pages/Photo';
import photos from './Components/Pages/photos';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}




const App = () => {
  useEffect(() =>{
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
    <Router>
    <Fragment>
    <div className="App">
      <Header/>
      <Alert/>
      <Switch>
        <Route path='/login' component={Login} />
         <Route path='/blog' component={Posts} />
        <Route path='/galla' component={Galla} />
         <Route path='/gallery' component={Gallery}
          />
        <Route path='/blogpost' component={BlogPost} />
        <Route path='/photo' component={Photo} />
        <Route path='/photos' component={photos} />
  
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
         <Route path='/' component={Home} />
      </Switch>
    </div>  
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
