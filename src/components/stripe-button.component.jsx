import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HESh8Ge3OkPxkC9y0qsJnM1pc0niI76ZuAn6O6WslfQpfSHSkMI8mZf6umTGzLLjAMWJnbypboW8Lxn2u25EWtO00Hwie1dbD';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful')
	}
	
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd"'
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton