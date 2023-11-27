import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function TooMany(props){

    return(
        <Snackbar
            id='tooMany'
            open={props.open}
            autoHideDuration={4000}
            onClose={props.handleClose}
        >
            <Alert onClose={props.handleClose} severity="error">
                Too many requests! Please try again after some time.
            </Alert>
        </Snackbar>
    )
}

export default TooMany;