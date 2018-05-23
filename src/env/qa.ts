
import env from './dev';
import { eventNames } from 'cluster';

env.env = 'qa';

export default env;