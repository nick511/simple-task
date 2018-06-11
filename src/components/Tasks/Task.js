import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './task.css'

export default class Task extends Component {
  state = {
    showEdit: false,
    showEditName: true,
  }

  handleShowEdit = (e) => {
    this.setState({ showEdit: true })
  }

  handleChangeStatus = (e) => {
    e.stopPropagation()
    const { id, isCompleted, actions } = this.props
    actions.updateStatus(id, !isCompleted)
    this.setState({ showEdit: false })
  }

  render () {
    const { name, isCompleted = false } = this.props
    const { showEdit, showEditName } = this.state

    let status = 'Active'
    let statusClass = 'task__status'
    let editStatus = 'Complete'
    let editStatusClass = 'task__edit__complete'

    if (isCompleted) {
      status = 'Completed'
      statusClass += ' is-completed'
      editStatus = 'Undo'
      editStatusClass = 'task__edit__undo'
    }

    return (
      <div className='task' onClick={this.handleShowEdit}>
        <div className='task__title'>{name}</div>
        <div className={statusClass}>{status}</div>

        { showEdit &&
          <div className='task__edit'>
            <div>
              <a className={editStatusClass} onClick={this.handleChangeStatus}>{editStatus}</a>
            </div>
            <div>
              <a className='task__edit__edit'>Edit</a>
            </div>
          </div>
        }



      </div>
    )
  }
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func),
}
