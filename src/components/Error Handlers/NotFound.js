import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function NotFound(props){

    return(
        <Snackbar
            id='tooMany'
            open={props.open}
            autoHideDuration={4000}
            onClose={props.handleClose}
        >
            <Alert onClose={props.handleClose} severity="error">
                Resource not found! Please try again with different keywords.
            </Alert>
        </Snackbar>
    )
}

export default NotFound;