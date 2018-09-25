let timer = null

const timeReducer = (state = 100, action) => {
  console.log('ACTION: ', action.type)
  switch (action.type) {
  case 'DECREMENT':
    return state -10
  case 'STOP':
    return 0
  case 'RESET':
    return 100
  default:
    return state
  }

}

export const startTimer = () => {
  console.log()
  return async (dispatch) => {
    timer = setInterval(() =>
      dispatch({
        type: 'DECREMENT',
      }), 2500)
  }
}

export const stopTimer = () => {
  clearInterval(timer)
  return async (dispatch) => {
    dispatch({
      type: 'STOP'
    })
  }
}

export const resetTimer = () => {
  return async (dispatch) => {
    dispatch({
      type: 'RESET'
    })
  }

}

export default timeReducer