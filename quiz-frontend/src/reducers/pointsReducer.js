const pointsReducer = (state = 0, action) => {
  console.log('ACTION: ', action.type)
  switch(action.type){
  case 'RIGHT':
    return state + 1
  case 'ZERO':
    return 0
  default:
    return state
  }
}

export const addPoint = () => {
  return async (dispatch) => {
    dispatch({
      type: 'RIGHT',
    })
  }
}

export const zeroPoints = () => {
  return async (dispatch) => {
    dispatch({
      type: 'ZERO'
    })
  }
}

export default pointsReducer