import React from 'react'

import './home.css' // load css before loading other components
import Notification, { TYPE_INFO, TYPE_SUCCESS } from '../../components/Notification'
import Tasks from '../../components/Tasks'

const Home = () => {
  return (
    <div className='home'>
      <h1>Your tasks</h1>

      <Notification title='Complete all tasks' desc='You have 5 active tasks' type={TYPE_INFO} />
      {/* <Notification title='All tasks completed' desc='Well done!' type={TYPE_SUCCESS} /> */}

      <Tasks />
    </div>
  )
}

export default Home
