import React, { Component } from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Switch} from "react-router-dom";

import Posts from "./containers/Posts/Posts";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewPost from "./containers/NewPost/NewPost";


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/post" exact component={Posts}/>
          <Route path="/newpost" exact component={NewPost}/>

        </Switch>
      </Layout>
    );
  }
}

export default App;
