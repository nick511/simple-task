import * as actions from './actions'

const initialState = {
  tasks: { // dummy data
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
    case actions.UPDATE_STATUS_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        failed: true
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

    case actions.UPDATE_NAME_FULFILLED: {
      const { id, name } = action.payload
      const tasks = { ...state.tasks }
      tasks[id].name = name

      return {
        ...state,
        tasks,
        fetching: false,
        fetched: true,
        failed: false
      }
    }

    case actions.ADD_TASK_FULFILLED: {
      const { name } = action.payload
      const tasks = { ...state.tasks }
      let newId = Math.max(...Object.keys(tasks)) + 1
      tasks[newId] = { name, id: newId, isCompleted: false }

      return {
        ...state,
        tasks,
        fetching: false,
        fetched: true,
        failed: false
      }
    }

    default:
      return state
  }
}

export default tasksReducer
