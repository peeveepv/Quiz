import questionService from '../services/questionService'

const questionreducer = (store = [], action) => {
  console.log('ACTION: ', action.type)
  switch(action.type){
  case 'INIT':
    return action.data
  case 'DELETE':
    return store.filter(q => q._id !== action.id)
  default:
    return store
  }
}

export const initialize = () => {
  return async (dispatch) => {
    const questions = await questionService.getAll()
    dispatch({
      type: 'INIT',
      data: questions
    })
  }
}

export const deleteAnswered = (question) => {
  return async (dispatch) => {
    dispatch({
      type: 'DELETE',
      id: question._id
    })
  }
}

export default questionreducer