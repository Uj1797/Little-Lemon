import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'src/components/Navbar';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Menu from 'src/components/Menu';
import Reservations from 'src/components/Reservations';
import Login from 'src/components/Login';
import Order from 'src/components/Order';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/reservations" component={Reservations} />
        <Route path="/login" component={Login} />
        <Route path="/order" component={Order} />
      </Switch>
    </div>
  </Router>
);

export default App;