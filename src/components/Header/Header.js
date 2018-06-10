import React from 'react'

import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>SimpleTask</h1>

      <nav className='header__nav'>
        <a>Hello, User!</a>
      </nav>
    </header>
  )
}

export default Header
