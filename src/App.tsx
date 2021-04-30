import React, {useEffect} from "react";
import PrivateRoute from "./components/Router/PrivateRoute";
import {useDispatch} from "react-redux";
import {fetchUserData} from "./store/branches/user/actionCreators";

const App: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch])

    return <PrivateRoute/>
}
export default App
