export const sdk = FastSpring.init({
    checkoutUrl: 'https://aharvey.test.onfastspring.com/components-aharvey',

    onSessionLoaded: (data) => {
        console.log('Session loaded:', data);
    },

    onOrderCompleted: (data) => {
        console.log('Order completed!', data);
    },

    onPaymentFailed: (error) => {
        console.error('Payment failed:', error);
    }
}); 