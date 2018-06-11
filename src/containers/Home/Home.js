import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateStatus } from './actions'
import './home.css' // load css before loading other components
import Notification, { TYPE_INFO, TYPE_SUCCESS } from '../../components/Notification'
import Tasks from '../../components/Tasks'

const Home = ({ tasks, updateStatus }) => {
  return (
    <div className='home'>
      <h1>Your tasks</h1>

      <Notification title='Complete all tasks' desc='You have 5 active tasks' type={TYPE_INFO} />
      {/* <Notification title='All tasks completed' desc='Well done!' type={TYPE_SUCCESS} /> */}

      <Tasks tasks={tasks} actions={{ updateStatus }} />
    </div>
  )
}

const mapStateToProps = state => {
  const { tasks } = state.tasks
  return { tasks: Object.values(tasks) }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateStatus }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
