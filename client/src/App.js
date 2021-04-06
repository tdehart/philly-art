import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Artists from './pages/Artists';
import Layout from './components/Layout';

function App() {
  const [user, setUser] = useState();
 
  useEffect(() => {
    const tempUser = localStorage.getItem('philly-art-user');
    if (tempUser) {
      setUser(tempUser);
    } else {
      const tempUser = 'tom';
      localStorage.setItem('philly-art-user', tempUser);
      setUser(tempUser);
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
      });
  }, [user]);

  return (
    <Router>
      <Switch>
        <Route path="/artist/:id">
          <Layout username={user}>
            <Artist />
          </Layout>
        </Route>
        <Route path="/">
          <Layout username={user}>
            <Artists />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

function Artist() {
  return <h2>Artist Name</h2>;
}

export default App;
