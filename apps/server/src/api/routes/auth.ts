import { Hono } from 'hono';
import signupRoutes from '../auth/signup';
import signinRoutes from '../auth/signin';

const auth = new Hono();

//all auth api request
auth.route('/signup', signupRoutes);
auth.route('/signin', signinRoutes);

export default auth;
