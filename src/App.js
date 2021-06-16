import React from 'react'
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import JuliennePage from './pages/julienne-page/julienne-page.component'
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/julienne' component={JuliennePage}/>
          <Route exact path='/store' component={ShopPage}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
