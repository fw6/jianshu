import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import * as write from './style'

class Write extends React.PureComponent {
  render() {
    const { isLogin } = this.props
    if (isLogin) {
      return <div>write</div>
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

export default connect(mapState)(withRouter(Write))
