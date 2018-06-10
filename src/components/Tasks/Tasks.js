import React, { Component } from 'react'

import './tasks.css'
import Task from './Task'

export default class Tasks extends Component {
  state = {
    tasks: [
      { name: 'First Task', isCompleted: true },
      { name: 'Second Task', isCompleted: false },
    ],
  }

  handleAddTask = () => {
    let task = { name: 'aa', isCompleted: false }
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  render () {
    const { tasks } = this.state
    return (
      <section className='columns is-multiline tasks'>
        {tasks.map((task, idx) => (
          <div className='column is-one-quarter-desktop' key={idx}>
            <Task name='First Task' isCompleted={true} />
          </div>
        ))}

        <div className='column is-one-quarter-desktop'>
          <div className='tasks--add-task' onClick={this.handleAddTask}>+ Add Task &nbsp;</div>
        </div>
      </section>
    )
  }
}
