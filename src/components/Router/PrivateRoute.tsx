import React, {useEffect} from 'react';
import {WinStorage} from "../../services/AuthSrorage";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LoadingStatus} from "../../store/types";
import Preloader from "../Preloader/Preloader";
import {selectUserAuthKey, selectUserStatus} from "../../store/branches/user/selectors";
import LoginForm from "../../pages/LoginForm/LoginForm";
import Aloha from "../example/Aloha";
import Hello from "../example/Hello";
import {logOut} from "../../store/branches/user/actionCreators";
import Home from "../example/Home";

const PrivateRoute = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const token = WinStorage.getToken()
    const auth_key = useSelector(selectUserAuthKey)
    const loadingStatus = useSelector(selectUserStatus)
    const isReady = loadingStatus === LoadingStatus.LOADING

    useEffect(() => {
        auth_key ? history.push('/hello') : history.push('/')
    }, [auth_key, history]);

    useEffect(() => {
        if (auth_key) {
            if(auth_key !== token){
                dispatch(logOut())
            }
        }
    }, [location, auth_key, dispatch, token])

    if (isReady) {
        return <Preloader/>
    }

    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/signin' component={LoginForm}/>
                <Route exact path="/hello" component={Hello}/>
                <Route exact path="/aloha" component={Aloha}/>
            </Switch>
        </React.Fragment>
    )
}
export default PrivateRoute;
