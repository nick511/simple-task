import React from 'react'

import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Your tasks</h1>

      <section className='notification is-info'>
        <div className='title'>All tasks completed</div>
        <p>Well done!</p>
      </section>

      <section className='notification is-success'>
        <h6>All tasks completed</h6>
        <p>Well done!</p>
      </section>

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
