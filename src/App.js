import React from 'react';
import {Provider} from 'react-redux';
import store from "./redux/store"
import TodoList from "./containers/TodoList";
import {HashRouter, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path='/:status?' component={TodoList}/>   // ? powoduje, że status jest opcjponalny
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
