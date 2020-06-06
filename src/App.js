import React from 'react';
import store from "./redux/store"
import {Provider} from 'react-redux';
import {HashRouter, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import TodoList from "./containers/TodoList";
import Euro from "./containers/Euro";


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Nav/>
        <hr/>
        <Switch>
          <Route exact path={'/'} component={TodoList}/>
          <Route exact path={'/todo/:status?'} component={TodoList}/>
          <Route path={'/eur'} component={Euro}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
