import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './app.css' // load css before loading other components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from '../Home/Home'

export const Content = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />

        <main className='container content'>
          <Content />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
