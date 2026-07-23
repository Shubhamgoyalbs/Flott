import { factory } from '../factory';
import { authorizeMiddleware } from '../../utils/auth';
import authorizeRequest from "../user/api/authorize";
import activateRequest from "../user/api/activate";
import deactivateRequest from "../user/api/deactivate";
import closeRequest from "../user/api/close";

const apiRoute = factory.createApp();

//all user api request
apiRoute
	.route('/authorize', authorizeRequest)
	.use(authorizeMiddleware)
	.route('/activate', activateRequest)
	.route('/deactivate', deactivateRequest)
	.route('/close', closeRequest)
;

export default apiRoute;
