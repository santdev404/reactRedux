import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {firebase} from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';


import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../components/actions/auth';
import { PublicRoute } from './PublicRoute';
// import { loadNotes } from '../helpers/loadNotes';
import { startLoadingNotes } from '../components/actions/notes'



export const AppRouter = () => {


    const dispatch = useDispatch();

    const [checking, setchecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async (user) => {

            if(user?.uid){

                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));                
                

            }else{
                setIsLoggedIn(false);
            }

            setchecking(false);
            
        })

    }, [dispatch, setchecking, setIsLoggedIn])

    if(checking){
        return(
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>

            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated = { isLoggedIn }
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        exact
                        isAuthenticated = { isLoggedIn }
                        path="/"
                        component={JournalScreen}
                    />

                    <Redirect
                        to="/auth/login"
                    />
                </Switch>
            </div>





        </Router>
    )
}


