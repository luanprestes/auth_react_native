const INITIAL_STATE = {
  user: {}
}

function storeUser(state = INITIAL_STATE, action:any) {

  switch (action.type) {
    case 'USER_AUTH': 
      return { 
        ...state, 
        user: action.payload 
      }
    default:
      return state
  }
}

export default storeUser