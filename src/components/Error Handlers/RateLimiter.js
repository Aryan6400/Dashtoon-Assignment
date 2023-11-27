import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function RateLimiter(props){

    return(
        <Snackbar
            id='tooMany'
            open={props.open}
            autoHideDuration={4000}
            onClose={props.handleClose}
        >
            <Alert onClose={props.handleClose} severity="error">
                Request Limit Exceeded! Please try again after some time.
            </Alert>
        </Snackbar>
    )
}

export default RateLimiter;