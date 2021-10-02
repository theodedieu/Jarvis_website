import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactPage from './pages/contact';
import Home from './pages';
import SignupPage from './pages/signup';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignupPage} exact />
          <Route path='/contact' component={ContactPage} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
