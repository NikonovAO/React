import { RESET_COUNT } from '../actionTypes'

const initialState = {
  count: 10
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET_COUNT: {
      return {
        count: 0
      }
    }
    default:
      return state
  }
}
