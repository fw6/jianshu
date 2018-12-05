import * as types from './actionTypes'
import Axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: types.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: types.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: types.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: types.MOUSE_LEAVE
})

export const getSearchRecommend = () => {
  return dispatch => {
    Axios.get('api/searchRecommend.json')
      .then(res => {
        const data = res.data
        if (data.success) {
          dispatch(changeSearchRecommend(data.data))
        } else {
        }
      })
      .catch(err => console.error(err))
  }
}

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  page
})

const changeSearchRecommend = data => ({
  type: types.CHANGE_SEARCH_RECOMMEND,
  searchRecommend: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
