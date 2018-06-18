import React from 'react'
import PropTypes from 'prop-types'

import Notification, { TYPE_INFO, TYPE_SUCCESS } from './Notification'

const HomeNotification = ({ tasks }) => {
  const completedTasks = tasks.filter(t => !t.isCompleted).length
  let notiTittle = 'Complete all tasks'
  let notiDesc = `You have ${completedTasks} active tasks`
  let notiType = TYPE_INFO
  let notiProgress = { max: tasks.length, value: tasks.length - completedTasks }

  if (tasks.every(t => t.isCompleted)) {
    notiTittle = 'All tasks completed'
    notiDesc = 'Well done!'
    notiType = TYPE_SUCCESS
    notiProgress = null
  }

  return (
    <Notification title={notiTittle} desc={notiDesc} type={notiType} progress={notiProgress} />
  )
}

HomeNotification.propTypes = {
  tasks: PropTypes.array.isRequired,
}

export default HomeNotification
