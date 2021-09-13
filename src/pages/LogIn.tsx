import React from 'react';
import Login from '../components/Login';
import Container from '@material-ui/core/Container';

const LogIn: React.FC = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Login />
        </Container>
    );
};

export default LogIn;