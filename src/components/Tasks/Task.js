import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './task.css'

class Task extends Component {
  state = {
    showEdit: false,
    showEditName: false,
    nameValue: '',
  }

  /* react */
  componentDidMount = () => {
    // switch to change name mode after task added
    if (this.props.name === '') {
      this.handleShowChangeName()
    }
  }

  setTextInputRef = element => {
    this.textInput = element
  };

  /* handle actions */
  handleShowEdit = (e) => {
    this.setState({ showEdit: true })
  }

  handleChangeStatus = (e) => {
    const { id, isCompleted, actions } = this.props
    actions.updateStatus(id, !isCompleted)
    this.setState({ showEdit: false })
  }

  handleShowChangeName = (e) => {
    this.setState({
      showEditName: true,
      showEdit: false,
      nameValue: this.props.name,
    }, () => { // after updated
      if (this.textInput) {
        this.textInput.focus()
      }
    })
  }

  handleChangeName = (e) => {
    if (this.state.nameValue.trim() === '') {
      return
    }

    const { id, actions } = this.props
    actions.updateName(id, this.state.nameValue.trim())
    this.setState({ showEditName: false })
  }

  handleInputChange = (e) => {
    this.setState({ nameValue: e.target.value })
  }

  render () {
    const { name, isCompleted = false } = this.props
    const { showEdit, showEditName, nameValue } = this.state

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
      <div className='task'>

        <div className='task__main' onClick={this.handleShowEdit}>
          <div className='task__title'>{name}</div>
          <div className={statusClass}>{status}</div>
        </div>

        { showEdit &&
          <div className='task__overlay task__edit'>
            <div>
              <a className={editStatusClass} onClick={this.handleChangeStatus}>{editStatus}</a>
            </div>
            <div>
              <a className='task__edit__edit' onClick={this.handleShowChangeName}>Edit</a>
            </div>
          </div>
        }

        { showEditName &&
          <div className='task__overlay task__edit-name'>
            <div>
              <input type='text' placeholder='Enter task name...' ref={this.setTextInputRef} value={nameValue} onChange={this.handleInputChange} />
            </div>
            <div>
              <a className='task__edit-name__save' onClick={this.handleChangeName}>Save</a>
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
  actions: PropTypes.shape({
    updateStatus: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired,
  }),
}

export default Task
