import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { login, startGoogleLogin, startLoginEmailPassword } from '../actions/auth';


export const LoginScreen = () => {

    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui );
    

    const [values, handleInputChange, reset] = useForm({
        email: 'perico@pe.com',
        password: '123456'
    });

    const { email, password }  = values;

    const handleLogin = (e) =>{

        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));

    }


    const handleWithGooge = () =>{
        dispatch(startGoogleLogin());
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit = {handleLogin}>
                <input 
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value = {email}
                    onChange = {handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value = {password}
                    onChange = {handleInputChange}
                />


                <button
                    // disable = {loading}
                    className="btn btn-primary btn-block"
                    type="submit"
                
                >
                    Login
                </button>

                

                

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick= { handleWithGooge }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create new account
                </Link>

            </form>
        </>
    )
}
