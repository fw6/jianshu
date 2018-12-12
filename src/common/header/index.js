import React from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import * as Com from './style'
import { actions } from './store'
import { actions as loginActions } from '../../pages/login/store'
import { connect } from 'react-redux'

class Header extends React.PureComponent {
  loginOrLogoff(isLogin, logoff) {
    if (isLogin) {
      return (
        <Com.NavItem className="right" onClick={logoff}>
          退出
        </Com.NavItem>
      )
    } else {
      return (
        <Link to="login">
          <Com.NavItem className="right">登录</Com.NavItem>
        </Link>
      )
    }
  }

  render() {
    const {
      focused,
      recommends,
      handleSearchFocused,
      handleSearchBlur,
      isLogin,
      logoff
    } = this.props
    return (
      <Com.HeaderWrapper>
        <Link to="/">
          <Com.Logo />
        </Link>
        <Com.Nav>
          <Com.NavItem className="left active">首页</Com.NavItem>
          <Com.NavItem className="left download">下载APP</Com.NavItem>
          {this.loginOrLogoff(isLogin, logoff)}
          <Com.NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </Com.NavItem>

          <Com.SearchWrapper>
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <Com.NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleSearchFocused(recommends)}
                onBlur={handleSearchBlur}
              />
            </CSSTransition>
            <i
              className={
                focused ? 'focused iconfont search' : 'iconfont search'
              }
            >
              &#xe6a0;
            </i>
            {this.getSearchRecommand()}
          </Com.SearchWrapper>
        </Com.Nav>
        <Com.Addition>
          <Link to="/write">
            <Com.Button className="writting">
              <i className="iconfont">&#xe75a;</i>
              写文章
            </Com.Button>
          </Link>
          <Com.Button className="reg">注册</Com.Button>
        </Com.Addition>
      </Com.HeaderWrapper>
    )
  }

  getSearchRecommand() {
    const {
      focused,
      mouseIn,
      recommends,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props

    const newList = recommends.toJS()
    const recommendItems = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
        recommendItems.push(
          <Link to="/" key={newList[i]}>
            <Com.SearchRecommendItem>{newList[i]}</Com.SearchRecommendItem>
          </Link>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <Com.SearchRecommend
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Com.SearchRecommendTitle>
            热门搜索
            <Com.SearchRecommendSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon
                }}
                className="iconfont spin"
              >
                &#xe865;
              </i>
              换一批
            </Com.SearchRecommendSwitch>
          </Com.SearchRecommendTitle>
          <article>{recommendItems}</article>
        </Com.SearchRecommend>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    recommends: state.getIn(['header', 'recommends']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    isLogin: state.getIn(['login', 'isLogin'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchFocused(recommends) {
      dispatch(actions.searchFocus())
      !recommends.size && dispatch(actions.getSearchRecommend())
    },

    handleSearchBlur() {
      dispatch(actions.searchBlur())
    },

    handleMouseEnter() {
      dispatch(actions.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actions.mouseLeave())
    },

    handleChangePage(page, totalPage, spinIcon) {
      spinIcon.style.transform = `rotate(${(page % 5) * 360}deg)`
      if (page < totalPage) {
        dispatch(actions.changePage(page + 1))
      } else {
        dispatch(actions.changePage(1))
      }
    },
    logoff() {
      dispatch(loginActions.logoff())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
