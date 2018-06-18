import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import './home.css' // load css before loading other components
import HomeNotification from '../../components/Notification/HomeNotification'
import Tasks from '../../components/Tasks'

const Home = ({ tasks, actions }) => {
  return (
    <div className='home'>
      <h1>Your tasks</h1>

      <HomeNotification tasks={tasks} />

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
