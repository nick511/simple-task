
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const UPDATE_STATUS_PENDING = 'UPDATE_STATUS_PENDING'
export const UPDATE_STATUS_FULFILLED = 'UPDATE_STATUS_FULFILLED'
export const UPDATE_STATUS_REJECTED = 'UPDATE_STATUS_REJECTED'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_NAME_FULFILLED = 'UPDATE_NAME_FULFILLED'
export const ADD_TASK = 'ADD_TASK'
export const ADD_TASK_FULFILLED = 'ADD_TASK_FULFILLED'

export const updateStatus = (id, isCompleted) => ({
  type: UPDATE_STATUS,
  payload: new Promise((resolve, reject) => {
    resolve({ id, isCompleted })
  })
})

export const updateName = (id, name) => ({
  type: UPDATE_NAME,
  payload: new Promise((resolve, reject) => {
    resolve({ id, name })
  })
})

export const addTask = (name) => ({
  type: ADD_TASK,
  payload: new Promise((resolve, reject) => {
    resolve({ name })
  })
})
