import C from './constants';
import fetch from 'isomorphic-fetch';


export const loginUser = () => {
  return function(dispatch, getState) {
    return fetch('//obscure-journey-25228.herokuapp.com/api/friends', {
		   method: 'post',
		   headers:{
		   	'Accept':'application/json',
		   	'Content-Type':'application/json'
		   }
	  })
    .then(response => response.json())
      .then(user => {
	      	dispatch(userLogged(user))
      	}
      )
    }
  }



export const userLogged = (user) => 
	({
		type: C.USER_LOGED,
		logged_user: user,
	})



export const userLogOut = () => 
	({
		type: C.USER_LOG_OUT
	})
