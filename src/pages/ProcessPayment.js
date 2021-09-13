import React, {useEffect} from 'react';
import PaymentForm from '../components/PaymentForm';
import { useDispatch } from 'react-redux';
import { toggleVisibility } from '../redux/cart/reducer';

const ProcessPayment = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleVisibility(false));
        return () => {
            dispatch(toggleVisibility(true));
        }
    }, [dispatch])

    return (
        <div> 
            <PaymentForm/>
        </div>
        
    );
};

export default ProcessPayment;