import React, { Component } from 'react'

import './header.css'

class Header extends Component {
  state = {
    showMenu: false,
  }

  handleToggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render () {
    let menuClass = 'navbar-menu' + (this.state.showMenu ? ' is-active' : '')
    return (
      <nav className='navbar header'>
        <div className='navbar-brand'>
          <h1 className='header__title'>SimpleTask</h1>

          <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' onClick={this.handleToggleMenu}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div className={menuClass}>
          <div className='navbar-end'>
            <span className='header__user'>Hello, User!</span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
