const INITIAL_STATE = {
  user: {}
}

function storeUser(state = INITIAL_STATE, action:any) {
  switch (action.type) {
    case 'LOG_USER': 
      return { 
        ...state, 
        user: action.user 
      }
    default:
      return state
  }
}

export default storeUser