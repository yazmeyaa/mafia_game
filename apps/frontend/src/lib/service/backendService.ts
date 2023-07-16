import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { BackendService } from 'backend_service';

const service = new BackendService(PUBLIC_BACKEND_URL);

export { service };
