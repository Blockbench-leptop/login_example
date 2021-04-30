import Button from "@material-ui/core/Button/Button";
import React from "react";
import {Link} from "react-router-dom";

const Home: React.FC = () => {
    return (
        <React.Fragment>
            Home!
            <div>
                <Link to='/aloha'>
                    <Button size="large" color='primary' variant='contained'>
                        Go to LOGIN!
                    </Button>
                </Link>
            </div>
        </React.Fragment>
    )
}
export default Home
