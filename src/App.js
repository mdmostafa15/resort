import React from 'react';
import './App.css';

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoomPage from './pages/SingleRoomPage'
import Errors from './pages/Errors'

import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/resort" component={Home}/>
      <Route exact path="/resort/rooms" component={Rooms}/>
      <Route exact path="/resort/rooms/:slug" component={SingleRoomPage}/>
      <Route component={Errors}/>
    </Switch>
    </>
  );
}

export default App;
