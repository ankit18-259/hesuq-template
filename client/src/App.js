import React from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Issue1 from './Components/Pages/Issues/Issue1';
import Issue2 from './Components/Pages/Issues/Issue2';
import Issue3 from './Components/Pages/Issues/Issue3';
import Issue4 from './Components/Pages/Issues/Issue4';
import Issue5 from './Components/Pages/Issues/Issue5';
import Issue6 from './Components/Pages/Issues/Issue6';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/Issue1' component={Issue1} />
        <Route exact path='/Issue2' component={Issue2} />
        <Route exact path='/Issue3' component={Issue3} />
        <Route exact path='/Issue4' component={Issue4} />
        <Route exact path='/Issue5' component={Issue5} />
        <Route exact path='/Issue6' component={Issue6} />
      </Switch>
    </Router>
  );
};

export default App;
