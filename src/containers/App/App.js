import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import './app.css'

const Content = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
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
