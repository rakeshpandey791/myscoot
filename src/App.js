import React, {Component} from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <React.Fragment>
          <Header></Header>
            <Route path='/' exact strict render={() => {
                return (<Home/>)
            }}/>
           <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
