import React from 'react'

import Notification, { TYPE_INFO, TYPE_SUCCESS } from '../../components/Notification'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Your tasks</h1>

      <Notification title='Complete all tasks' desc='You have 5 active tasks' type={TYPE_INFO} />
      {/* <Notification title='All tasks completed' desc='Well done!' type={TYPE_SUCCESS} /> */}

      <section>
        <article>
          <h6>First Task</h6>
          <p>Completed</p>
        </article>
        <div>
          + Add Task
        </div>
      </section>
    </div>
  )
}

export default Home
