import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, userLogOut } from './actions'; 
import LoginHeader from './LoginHeader';


export const LoginHeaderWrap = connect(
	store => 
		({
			user: store.reducerLogin.logged_user,
		}),
	dispatch =>
		({
			login(){
				console.log("Login");
				dispatch(loginUser());
			},
			logout(){
				dispatch(userLogOut());
			}
		})
)(LoginHeader);
