import Button from "@material-ui/core/Button/Button";
import React from "react";
import {Link} from "react-router-dom";

const Aloha: React.FC = () => {
    return (
        <React.Fragment>
                Aloha
            <div>
                <Link to='/home'>
                    <Button size="large" color='primary' variant='contained'>
                        Go to home
                    </Button>
                </Link>
            </div>
        </React.Fragment>
    )
}
export default Aloha
