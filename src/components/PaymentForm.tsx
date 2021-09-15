import React, { useState } from 'react';
import { TextField, Button, Select, FormHelperText } from "@material-ui/core";
import { FormControl, InputLabel, MenuItem, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";


interface Temporary {
    id: number,
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    securityCode: string,
    expirationDateMonth: string,
    expirationDateYear: string,
};

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        display: 'inline-block',
        width: '70%',
        '& .MuiFormControl-root': {
            width: '70%',
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
        margin: '2rem',
    },
    styledGrid: {
        width: '70%',
        margin: 'auto',
        textAlign: 'center',
    },
}))

const PaymentForm: React.FC = () => { 
    const monthsList: string[] = ['January', 'February', 'March', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const yearsList: string[] = ['2022', '2023', '2024', '2025'];
    const initialFValues: Temporary = {
        id: 0,
        firstName: '',
        lastName: '',
        creditCardNumber: '',
        securityCode: '',
        expirationDateMonth: '',
        expirationDateYear: '',
    } as Temporary

    const classes = useStyles();
    const history = useHistory();
    const [values, setValues] = useState<Temporary>(initialFValues as Temporary);
    const [errors, setErrors] = useState<Temporary>({} as Temporary);
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const numRegExp: RegExp= /\d{3}/;
    const cardRegExp: RegExp = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)(?:\d{4})/;
    const nameRegExp: RegExp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,25}$/;

    const validate = () => {
        let temp:Temporary = {} as Temporary;
        temp.firstName = values.firstName.match(nameRegExp) ? '' : 'Name field should be alphabetic and 2-25 characters.';
        temp.lastName = values.lastName.match(nameRegExp) ? '' : 'Name field should be alphabetic and 2-25 characters.';
        temp.creditCardNumber = values.creditCardNumber.match(cardRegExp) ? '' : 'Invalid credit card number.';
        temp.securityCode = values.securityCode.match(numRegExp) ? '' : 'Invalid security code';
        temp.expirationDateMonth = month.length !== 0 ? '' : 'This field is required';
        temp.expirationDateYear = year.length !== 0 ? '' : 'This field is required';
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === '');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            history.push('/successful-payment');
        }
    };

    const handleChangeMonth = (e: React.ChangeEvent<{ value: unknown }>) => {
        setMonth(e.target.value as string);
    };
    const handleChangeYear = (e: React.ChangeEvent<{ value: unknown }>) => {
        setYear(e.target.value as string);
    };

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
                <TextField 
                    variant="outlined"
                    required
                    value={values.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    helperText="First Name"
                    {...(errors.firstName && { error: true, helperText: errors.firstName })}
                >
                </TextField>
                <TextField
                    variant="outlined"
                    required
                    value={values.lastName}
                    name="lastName"
                    helperText="Last Name"
                    {...(errors.lastName && { error: true, helperText: errors.lastName })}
                    onChange={handleInputChange}
                >
                </TextField>
                <TextField
                    variant="outlined"
                    required
                    label=" •••• •••• •••• •••• "
                    value={values.creditCardNumber}
                    name="creditCardNumber"
                    helperText="Credit card number"
                    {...(errors.creditCardNumber && { error: true, helperText: errors.creditCardNumber })}
                    onChange={handleInputChange}
                >
                </TextField>
                <TextField
                    variant="outlined"
                    required
                    label="CVC"
                    value={values.securityCode}
                    name="securityCode"
                    helperText="Security code"
                    {...(errors.securityCode && { error: true, helperText: errors.securityCode })}
                    onChange={handleInputChange}
                >
                </TextField>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className={classes.styledGrid}
                    >
                    <Grid item xs={4}>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            >
                            <Typography variant="body2" display="inline">
                                Expiration Date
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid
                            container
                            justifyContent="center"
                            >
                            <FormControl variant="outlined" {...(errors.expirationDateMonth && { error: true })}>
                                <InputLabel>Month</InputLabel>
                                <Select
                                    value={month}
                                    onChange={handleChangeMonth}
                                    label="Month"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {monthsList.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                                {errors.expirationDateMonth && <FormHelperText>{errors.expirationDateMonth}</FormHelperText>}
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid
                            container
                            justifyContent="center"
                            >
                            <FormControl variant="outlined"  {...(errors.expirationDateYear && { error: true })}>
                                <InputLabel>Year</InputLabel>
                                <Select
                                    value={year}
                                    onChange={handleChangeYear}
                                    label="Year"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {yearsList.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                                {errors.expirationDateYear && <FormHelperText>{errors.expirationDateYear}</FormHelperText>}
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
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
};

export default PaymentForm;
