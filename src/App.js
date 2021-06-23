import React, {Component}from 'react'
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase-utils';

import Homepage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import JuliennePage from './pages/julienne-page/julienne-page.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      actualUser: ''
    }
  }

  unsubscribeFromAuth= null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
      //taking user reference from function created in firebase.utils
      const userRef = await createUserProfileDocument(user);
      //then creating a snapshot
      userRef.onSnapshot(snapshot=>{
        this.setState({
          currentUser:{
            id: snapshot.id,
            ...snapshot.data()
          }
        })
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className='container-app'>
        <Header actualUser = {this.state.actualUser}/>
        <div className="App">
            <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/julienne' component={JuliennePage}/>
              <Route exact path='/store' component={ShopPage}/>
              <Route exact path='/signin' component={SignInSignUp} />
            </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
