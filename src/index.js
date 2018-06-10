import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './state/store'
import registerServiceWorker from './registerServiceWorker'
import './index.css' // load css before loading other components
import App from './containers/App/App'

const root = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(root, document.getElementById('root'))

registerServiceWorker()
