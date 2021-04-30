import Button from "@material-ui/core/Button/Button";
import React from "react";
import {Link} from "react-router-dom";

const Hello: React.FC = () => {
    return (
        <React.Fragment>
            Hello friends!
            <Link to='/home'>
                <Button size="large" color='primary' variant='contained'>
                    Go to home
                </Button>
            </Link>

            <Link to='/second'>
                <Button size="large" color='secondary' variant='contained'>
                    Go to Second
                </Button>
            </Link>
        </React.Fragment>
    )
}
export default Hello
