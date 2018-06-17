import React from 'react'
import PropTypes from 'prop-types'

import './notification.css'

export const TYPE_INFO = 'is-info'
export const TYPE_SUCCESS = 'is-success'

const Notification = ({ title, desc, type = TYPE_INFO }) => {
  let sectionClass = 'notification ' + type

  return (
    <section className={sectionClass}>
      <div className='notification__title'>{ title }</div>
      <p>{ desc }</p>
    </section>
  )
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.oneOf([TYPE_INFO, TYPE_SUCCESS]),
}

export default Notification
