import React from 'react'
import PropTypes from 'prop-types'

import './task.css'

const Task = ({ name, isCompleted = false }) => {
  let status = 'Active'
  let statusClass = 'status' + (isCompleted ? ' completed' : '')

  if (isCompleted) {
    status = 'Completed'
    statusClass += ' completed'
  }

  return (
    <div className='task'>
      <div className='title'>{name}</div>
      <div className={statusClass}>{status}</div>
    </div>
  )
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
}

export default Task
