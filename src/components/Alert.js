import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./Alert.css";

function ErrorAlert(props){

    return(
        <Snackbar
            id='alert'
            open={props.open}
            autoHideDuration={4000}
            onClose={props.handleClose}
        >
            <Alert onClose={props.handleClose} severity="error">
                Add atleast one panel to generate!
            </Alert>
        </Snackbar>
    )
}

export default ErrorAlert;