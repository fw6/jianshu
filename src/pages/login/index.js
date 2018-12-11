import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as login from './style'
import { actions } from './store'
class Login extends React.PureComponent {
  render() {
    const { isLogin } = this.props
    if (!isLogin) {
      return (
        <login.LoginWrapper>
          <login.LoginBox>
            login
            <login.Input
              placeholder="账号"
              ref={input => {
                this.account = input
              }}
            />
            <login.Input
              placeholder="密码"
              type="password"
              ref={input => {
                this.pwd = input
              }}
            />
            <login.Button
              onClick={() => this.props.login(this.account, this.pwd)}
            >
              登录
            </login.Button>
          </login.LoginBox>
        </login.LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatch = dispatch => ({
  login(accountEle, pwdEle) {
    dispatch(actions.loginHandler(accountEle.value, pwdEle.value1))
  }
})

export default connect(
  mapState,
  mapDispatch
)(Login)
