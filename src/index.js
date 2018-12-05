import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader'

const render = App => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('root'),
    )
  }
  render(App)

  if (module.hot) {
    module.hot.accept('./App', () => {
      render(App)
      render(require('./App'))
    })
  }
serviceWorker.unregister();
