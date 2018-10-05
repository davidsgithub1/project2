import C from './constants';

const defaultState = {
  logged_user: false
}

export default (state = defaultState, action) => {
  switch(action.type) {

  	case C.USER_LOGED:
			return (
				{
					...state, 
					logged_user: action.logged_user
				}
			)

	case C.USER_LOG_OUT:
			return (
				{
					...state, 
					logged_user: false
				}
			)

    default:
      return state;
  }
}