import * as actions from './actions'

const initialState = {
  tasks: {
    1: { id: 1, name: 'First Task', isCompleted: true },
    2: { id: 2, name: 'Second Task', isCompleted: false },
  },
  fetching: false,
  fetched: false,
  failed: false
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_STATUS_PENDING:
      return {
        ...state,
        fetching: true,
        fetched: false,
        failed: false
      }
    case actions.UPDATE_STATUS_FULFILLED:
      const { id, isCompleted } = action.payload
      const tasks = { ...state.tasks }
      tasks[id].isCompleted = isCompleted
      return {
        ...state,
        tasks,
        fetching: false,
        fetched: true,
        failed: false
      }
    case actions.UPDATE_STATUS_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        failed: true
      }
    default:
      return state
  }
}

export default tasksReducer
