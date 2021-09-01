import React, {useState} from 'react';
import  { TextField, Button }  from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        display: 'inline-block', 
        '& .MuiFormControl-root': {
            width: '50%',
            margin: theme.spacing(1), 
        }
    },
    wrapper: {
        margin: 'auto',
        alignContent: 'center', 
        textAlign: 'center',
    }, 
    styledButton: {
        margin: theme.spacing(3, 0, 2),
    }, 
    styledMessage: {
        textAlign: 'center',
        margin: '2rem',
    }
}))

const initialFValues = {
    id: 0, 
    firstName: '',
    lastName: '', 
    creditCardNumber: '',
    securityCode: '',
    cardExpiration: '',
}


export default function PaymentForm() {
    const classes = useStyles();
    const history = useHistory();
    const [values, setValues] = useState(initialFValues);

    const handleInputChange = e => {
        const {name, value} = e.target
        console.log(name)
        setValues({ 
            ...values,
            [name]: value,
        }) 
    }

    const handleSubmit = e => {   
        e.preventDefault();
        console.log('Yey');
        history.push('/successfull-payment');
    }

    return (
        <div className={classes.wrapper}>
            <form className={classes.root} onSubmit={handleSubmit}> 
                        <Typography
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.styledMessage}
                        >
                        PAYMENT INFORMATION
                        </Typography>
                        <TextField className={classes.styledTextField}
                            variant = 'outlined'
                            required
                            value={values.firstName}
                            name='firstName'
                            helperText="First Name"
                            onChange= {handleInputChange}
                            >
                        </TextField>
                        <TextField  
                            variant = 'outlined'
                            required
                            value={values.lastName}
                            name='lastName'
                            helperText="Last Name"
                            onChange= {handleInputChange}
                            >
                        </TextField>  
                        <TextField  
                            variant = 'outlined'
                            required
                            label = ' •••• •••• •••• •••• '
                            value={values.creditCardNumber}
                            name='creditCardNumber'
                            helperText="Credit card number"
                            onChange= {handleInputChange}
                            >
                        </TextField>
                        <TextField  
                            variant = 'outlined'
                            required
                            label = 'CVC'
                            value={values.securityCode}
                            name='securityCode'
                            helperText="Security code"
                            onChange= {handleInputChange}
                            >
                        </TextField>
                        <TextField  
                            variant = 'outlined'
                            required
                            label = 'Card Expiration'
                            value={values.cardExpiration}
                            name='cardExpiration'
                            helperText="Card Expiration"
                            onChange= {handleInputChange}
                            >
                        </TextField>
                    <div> 
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.styledButton}
                            color="primary"
                        >
                        Submit
                        </Button>
                    </div>
            </form>
        </div>
    )
}

