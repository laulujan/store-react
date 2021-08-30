import React from 'react';
import Signin from '../components/Signin';
import Container from '@material-ui/core/Container';

const LogIn = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Signin />
        </Container>
    );
};

export default LogIn;