import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './styles/style.scss'
import Home from './components/views/Home'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop >
        <div className="App container">
          {/* <Navbar /> */}
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route component={NotFound} /> */}
          </Switch>      
        </div>
      </ScrollToTop >
    </BrowserRouter>
  );
}

export default App;
