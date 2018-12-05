import * as types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  recommends: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH_FOCUS:
      return state.set('focused', true)
    case types.SEARCH_BLUR:
      return state.set('focused', false)
    case types.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case types.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case types.CHANGE_SEARCH_RECOMMEND:
      return state.merge({
        recommends: action.searchRecommend,
        totalPage: action.totalPage
      })
    case types.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
