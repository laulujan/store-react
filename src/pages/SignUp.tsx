import React from 'react';
import SignUp from '../components/SignUp';
import Container from '@material-ui/core/Container';

const SignUpPage: React.FC = () => {
    return (
        <Container component="main" maxWidth="xs">
            <SignUp />
        </Container>
    );
};

export default SignUpPage;