import Button from "@material-ui/core/Button/Button";
import React from "react";
import {Link} from "react-router-dom";

const Hello: React.FC = () => {
    return (
        <React.Fragment>
            Hello friends!
            <div>
                <Link to='/second'>
                    <Button size="large" color='secondary' variant='contained'>
                        Go to Aloha
                    </Button>
                </Link>
            </div>
        </React.Fragment>
    )
}
export default Hello
