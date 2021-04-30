import Button from "@material-ui/core/Button/Button";
import React from "react";
import {Link} from "react-router-dom";

const Aloha: React.FC = () => {
    return (
        <React.Fragment>
            Aloha
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
export default Aloha
