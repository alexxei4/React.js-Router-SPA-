/* Importing useful libraries, frameworks */
import React from "react";
import "./assets/font-awesome-4.7.0/css/font-awesome.css";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Edit from './components/Edit';
import AddItem from './components/AddItem';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EditItem from "./components/EditItem";

/* Creating react component */

class App extends React.Component {
  /* Creating state which will hold sole values */
  constructor(props) {
    super(props);
    this.state = {};

  

  }

  render() {
    return (
      <div>
        <Router>
          <Header/>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/add-item" component={AddItem} />
            <Route exact path="/edit-item/:id" component={EditItem} />
            <Route exact path="/search/:keyword" component={Search} />
          <Footer/>
        </Router>
        

      </div>
    );
  }
}

export default App;
