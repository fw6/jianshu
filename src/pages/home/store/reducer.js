import * as actions from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({})

export default (state = defaultState, action) => {
  switch (actions.type) {
    default:
      return state
  }
}
