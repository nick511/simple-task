import React, { Component } from 'react'

import './tasks.css'
import Task from './Task'

class Tasks extends Component {
  handleAddTask = (e) => {
    this.props.actions.addTask('')
  }

  render () {
    const { tasks, actions } = this.props
    return (
      <section className='columns is-multiline tasks'>
        { tasks.map((task) => (
          <div className='column is-one-third-tablet is-one-quarter-desktop' key={task.id}>
            <Task id={task.id} name={task.name} isCompleted={task.isCompleted} actions={actions} />
          </div>
        )) }

        <div className='column is-one-third-tablet is-one-quarter-desktop'>
          <div className='tasks--add-task' onClick={this.handleAddTask}>+ Add Task &nbsp;</div>
        </div>
      </section>
    )
  }
}

export default Tasks
