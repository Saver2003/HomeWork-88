import React, { Component } from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Switch} from "react-router-dom";

import Posts from "./containers/Posts/Posts";
import Register from "./containers/Register/Register";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/register" exact component={Register}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
