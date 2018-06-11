import React, { Component } from 'react'

import './tasks.css'
import Task from './Task'

class Tasks extends Component {
  state = {
    tasks: [
      { name: 'First Task', isCompleted: true },
      { name: 'Second Task', isCompleted: false },
    ],
  }

  handleAddTask = (e) => {
    let task = { name: 'aa', isCompleted: false }
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  render () {
    const { tasks, actions } = this.props
    return (
      <section className='columns is-multiline tasks'>
        { tasks.map((task) => (
          <div className='column is-one-quarter-desktop' key={task.id}>
            <Task id={task.id} name={task.name} isCompleted={task.isCompleted} actions={actions} />
          </div>
        )) }

        <div className='column is-one-quarter-desktop'>
          <div className='tasks--add-task' onClick={this.handleAddTask}>+ Add Task &nbsp;</div>
        </div>
      </section>
    )
  }
}

export default Tasks
