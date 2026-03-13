import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51T2vDtEexB3ueyGPgD2MJ52zoNGDK9FVtX5NsWSaHId3cmjFCBMKHBjUpM1ICROn677roQ0NeQrO4HZ6nAo9Wo8f00ku56XGc7',
);

export default stripePromise;
