import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

interface ConfirmProps {
    isOpen: boolean
    onConfirm: () => void
    onCancel: () => void
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Confirm: React.FC<ConfirmProps> = ({isOpen, onConfirm, onCancel}) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            <Dialog
                TransitionComponent={Transition}
                fullScreen={fullScreen}
                open={isOpen}
                aria-labelledby="responsive-dialog-title" >

                <DialogTitle
                    id="responsive-dialog-title"
                    style={{textAlign: 'center'}}
                >
                    Confirm delete
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Please confirm you want to delete subscription.
                    </DialogContentText>
                </DialogContent>

                <DialogActions style={{justifyContent: 'center'}}>
                    <Button onClick={onCancel} color="primary" autoFocus>
                        No
                    </Button>

                    <Button onClick={onConfirm} color="secondary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default Confirm
