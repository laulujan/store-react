import React from 'react';
import CheckoutTable from '../components/CheckoutTable';
import Container from '@material-ui/core/Container';

const CheckOut: React.FC = () => {
    return (
        <Container component="main">
            <CheckoutTable/>
        </Container>
    );
};

export default CheckOut;