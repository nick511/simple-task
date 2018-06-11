
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const UPDATE_STATUS_PENDING = 'UPDATE_STATUS_PENDING'
export const UPDATE_STATUS_FULFILLED = 'UPDATE_STATUS_FULFILLED'
export const UPDATE_STATUS_REJECTED = 'UPDATE_STATUS_REJECTED'

export const updateStatus = (id, isCompleted) => ({
  type: UPDATE_STATUS,
  payload: new Promise((resolve, reject) => {
    resolve({ id, isCompleted })
  })
})
