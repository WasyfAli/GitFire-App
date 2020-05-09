import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

//reacr router
import  {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
//firebase
import firebase from 'firebase/app'
import 'firebase/auth'

//components
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import PageNotFound from './Pages/PageNotFound'
import {UserContext} from './Context/UserContext'
import Footer from './Layout/Footer'
import Header from './Layout/Header'
import firebaseConfig from './ConfigFirebase/firebaseConfig'

//init firebase
firebase.initializeApp(firebaseConfig);

const App = ()  => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
       <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>

        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
