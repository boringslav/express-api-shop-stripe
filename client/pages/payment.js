import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function Payment() {
    const stripeKey = process.env.STRIPE_KEY;
    const [stripeToken, setStripeToken] = useState('');

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        makeRequest();
    }, [stripeToken]);


    const makeRequest = async () => {
        try {
            const res = await axios.post("http://localhost:8000/api/checkout/payment", {
                tokenId: stripeToken.id,
                amount: 9000000
            });
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <h1>Payment</h1>
            <StripeCheckout
                name="Boringshop"
                billingAddress
                shippingAddress
                description="Your total is $90000"
                amount={9000000} //stripes uses cents for price
                token={onToken}
                stripeKey={stripeKey}
            >
                <button>Pay</button>
            </StripeCheckout>
        </div >
    )
}

export default Payment
