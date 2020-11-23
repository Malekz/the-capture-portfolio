import React from 'react';

//import Global Style
import GlobalStyle from './components/GlobalStyle';

// import components
import About from './pages/about';
import ContactUs from './pages/contactUs';
import OurWork from './pages/ourWork';
import Nav from './components/nav';
import MovieDetail from './pages/movieDetail';
// Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/work">
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
