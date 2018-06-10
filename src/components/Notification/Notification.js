import React from 'react'

import './notification.css'

export const TYPE_INFO = 'is-info'
export const TYPE_SUCCESS = 'is-success'

const Notification = ({ title, desc, type = TYPE_INFO }) => {
  console.log('title: ', title);

  let sectionClass = 'notification ' + type
  return (
    <section className={sectionClass}>
      <div className='title'>{ title }</div>
      <p>{ desc }</p>
    </section>
  )
}

export default Notification
