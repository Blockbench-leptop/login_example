import React from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


const CustomAlerts: React.FC<{ text: string; }> = (text) => {
    const [open, setOpen] = React.useState(true);
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            width: '40%',
            paddingTop: '32px',
        }}>
            <Collapse in={open}>
                <Alert
                    variant="standard"
                    severity="error"
                    color="error"
                    action={
                        <IconButton aria-label="close"
                                    color="secondary"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false)
                                    }}>
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    }
                >
                    {text}
                </Alert>
            </Collapse>
        </div>
    );
}
export default CustomAlerts
