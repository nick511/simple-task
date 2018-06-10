import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchZipCodes, fetchZipCodes2 } from '../../state/actions/zipCodeActions'

export class About extends Component {
  render () {
    let { fetching, fetched, failed, zipCodes, fetchZipCodes, fetchZipCodes2 } = this.props
    console.log(fetching, fetched, failed, zipCodes)
    return (
      <div>
        About
        <hr/>
        <button onClick={fetchZipCodes}>fetchZipCodes</button>
        <button onClick={fetchZipCodes2}>fetchZipCodes2</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { fetching, fetched, failed, zipCodes } = state.zipCodes
  return { fetching, fetched, failed, zipCodes }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchZipCodes, fetchZipCodes2 }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(About)
