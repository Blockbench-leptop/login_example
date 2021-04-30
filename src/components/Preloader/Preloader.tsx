import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from './Preloader.module.scss'

const Preloader: React.FC = () => {
    return (
        <div className={classes.root}>
            <CircularProgress className={classes.preloader}/>
        </div>
    );
}
export default Preloader
