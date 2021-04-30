import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const RouterSpy = () => {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if(document.location.href.includes('/#!')) {
            const [, path] = document.location.href.split('/#!')
            history.push(path)
        }
    }, [location, history])

    return null;
}

export default RouterSpy;
