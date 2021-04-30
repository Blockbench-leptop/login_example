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

const PrivateRoute = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const token = WinStorage.getToken()
    const auth_key = useSelector(selectUserAuthKey)
    const loadingStatus = useSelector(selectUserStatus)
    const isReady = loadingStatus === LoadingStatus.LOADING

    useEffect(() => {
        token ? history.push('/home') : history.push('/')
    }, [token, history]);

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
                <Route exact path={['/signin', '/']} component={LoginForm}/>
                <Route exact path="/home" component={Hello}/>
                <Route exact path="/second" component={Aloha}/>
            </Switch>
        </React.Fragment>
    )
}
export default PrivateRoute;
