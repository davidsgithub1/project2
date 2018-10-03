import C from './constants';
import fetch from 'isomorphic-fetch';


export const loginUser = () => {
  return function(dispatch, getState) {
    return fetch('http://localhost:3000/islogged', {
		   method: 'post',
		   headers:{
		   	'Accept':'application/json',
		   	'Content-Type':'application/json'
		   }
	  })
    .then(response => {
	    	if(response !== "not"){
		    	dispatch(userLogged(response))
	    	}else{
	    		dispatch(userLoginErr())
	    	}
	    }
      )
    }
  }



export const userLogged = (user) => 
	({
		type: C.USER_LOGED,
		logged_user: user,
	})

export const userLoginErr = () => 
	({
		type: C.USER_LOGIN_ERR,
		login_err: "User is not logged in",
	})


export const userLogOut = () => 
	({
		type: C.USER_LOG_OUT
	})
