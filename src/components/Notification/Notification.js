import React from 'react'
import PropTypes from 'prop-types'

import './notification.css'

export const TYPE_INFO = 'is-info'
export const TYPE_SUCCESS = 'is-success'

const Notification = ({ title, desc, type = TYPE_INFO, progress }) => {
  let sectionClass = 'notification ' + type

  return (
    <section className={sectionClass}>
      {progress && <progress className='progress is-success' value={progress.value} max={progress.max}>60%</progress>}
      <div className='notification__title'>{ title }</div>
      <p>{ desc }</p>
    </section>
  )
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.oneOf([TYPE_INFO, TYPE_SUCCESS]),
  progress: PropTypes.shape({
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }),
}

export default Notification
