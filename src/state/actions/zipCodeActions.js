import zips from './zips.json'

export const FETCH_ZIPCODES = 'FETCH_ZIPCODES'
export const FETCH_ZIPCODES_PENDING = 'FETCH_ZIPCODES_PENDING'
export const FETCH_ZIPCODES_FULFILLED = 'FETCH_ZIPCODES_FULFILLED'
export const FETCH_ZIPCODES_REJECTED = 'FETCH_ZIPCODES_REJECTED'

export const fetchZipCodes = () => ({
  type: FETCH_ZIPCODES,
  payload: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(zips)
    }, 1000)
  })
})

export const fetchZipCodes2 = () => ({
  type: FETCH_ZIPCODES,
  payload: fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
})
