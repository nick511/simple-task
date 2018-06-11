import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import './home.css' // load css before loading other components
import Notification, { TYPE_INFO, TYPE_SUCCESS } from '../../components/Notification'
import Tasks from '../../components/Tasks'

const Home = ({ tasks, actions }) => {
  let notiTittle = 'Complete all tasks'
  let notiDesc = `You have ${tasks.filter(t => !t.isCompleted).length} active tasks`
  let notiType = TYPE_INFO

  if (tasks.every(t => t.isCompleted)) {
    notiTittle = 'All tasks completed'
    notiDesc = 'Well done!'
    notiType = TYPE_SUCCESS
  }

  return (
    <div className='home'>
      <h1>Your tasks</h1>

      <Notification title={notiTittle} desc={notiDesc} type={notiType} />

      <Tasks tasks={tasks} actions={actions} />
    </div>
  )
}

const mapStateToProps = state => {
  const { tasks } = state.tasks
  return { tasks: Object.values(tasks) }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
