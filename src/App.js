import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import ReactGA from 'react-ga4';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Rute from './components/Rute/Rute';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-GFBCTCXQD2');
    ReactGA.send('pageview');
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Rute />
      <Footer />
    </Router>
  );
}

export default App;
