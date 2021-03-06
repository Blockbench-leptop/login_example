import Button from "@material-ui/core/Button/Button";
import React from "react";
import {Link} from "react-router-dom";

const Hello: React.FC = () => {
    return (
        <React.Fragment>
            Hello friends!
            <div>
                <Link to='/aloha'>
                    <Button size="large" color='secondary' variant='contained'>
                        Go to Aloha
                    </Button>
                </Link>
            </div>
            <div>
                <Link to='/'>
                    <Button size="large" color='primary' variant='contained'>
                        Go to Home!!!
                    </Button>
                </Link>
            </div>
        </React.Fragment>
    )
}
export default Hello
