import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Artist from './pages/Artist';
import Artists from './pages/Artists';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id">
          <Layout>
            <Artist />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <Artists />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
