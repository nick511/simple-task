import React from 'react'

import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <h1 className='header__title'>SimpleTask</h1>
        </div>

        <div className='navbar-end'>
          <span className='header__user'>Hello, User!</span>
        </div>
      </div>
    </header>
  )
}

export default Header
