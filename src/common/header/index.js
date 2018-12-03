import React from 'react'
import { CSSTransition } from 'react-transition-group'
import * as Com from './style'
import { connect } from 'react-redux'

const Header = props => {
  return (
    <Com.HeaderWrapper>
      <Com.Logo />
      <Com.Nav>
        <Com.NavItem className="left active">首页</Com.NavItem>
        <Com.NavItem className="left">下载APP</Com.NavItem>

        <Com.NavItem className="right">登录</Com.NavItem>
        <Com.NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </Com.NavItem>

        <Com.SearchWrapper>
          <CSSTransition in={props.focused} timeout={300} classNames="slide">
            <Com.NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleSearchFocused}
              onBlur={props.handleSearchBlur}
            />
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
            &#xe6a0;
          </i>
        </Com.SearchWrapper>
      </Com.Nav>
      <Com.Addition>
        <Com.Button className="writting">
          <i className="iconfont">&#xe75a;</i>
          写文章
        </Com.Button>
        <Com.Button className="reg">注册</Com.Button>
      </Com.Addition>
    </Com.HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchFocused() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },

    handleSearchBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
