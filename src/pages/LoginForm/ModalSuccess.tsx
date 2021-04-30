import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import classes from './Modal.module.scss'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

interface ModalProps {
    isOpen: boolean
    onClose: () => void
}


const ModalSuccess: React.FC<ModalProps> = ({isOpen, onClose}) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                transitionDuration={500}
                open={isOpen}
                aria-labelledby="responsive-dialog-title" >
                <DialogContent className={classes.root}>
                    <CheckCircleIcon className={classes.icon}/>
                    <DialogContentText className={classes.title}>
                        Thanks for sign-up!
                    </DialogContentText>
                    <DialogContentText className={classes.title}>
                        We've sent you verification email. Please check your mail.
                    </DialogContentText>
                    <DialogActions className={classes.closeButtonContainer}>
                        <Button className={classes.closeButton}
                                onClick={onClose}
                                color="secondary"
                                variant="contained"
                        >
                            Ok
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ModalSuccess
