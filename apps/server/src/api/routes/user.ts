import { factory } from '../factory';
import { authorizeMiddleware } from '../../utils/auth';
import apiRoute from "./api";

const userRoute = factory.createApp();

userRoute
	.route('/api', apiRoute)
	.use(authorizeMiddleware)
;

export default userRoute;
