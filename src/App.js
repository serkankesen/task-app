import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import HomePage from './components/pages/HomePage';
import LinksPage from './components/pages/LinksPage';
import NewLinkPage from './components/pages/NewLinkPage';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
		return (
      <div className="App">
				<Header />

				<Container text>
					<Route exact path='/' component={HomePage}></Route>
          <Route exact path='/links' component={LinksPage}></Route>
					<Route exact path='/links/new' component={NewLinkPage}></Route>
					<Route exact path='/link/:_id' component={NewLinkPage}></Route>
        </Container>

				<Footer/>
      </div>
    );
  }
}

export default App;