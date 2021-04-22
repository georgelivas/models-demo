import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { effectAction as effectSystemAction } from './actions';

const effect = (
    effectCreator,
    effectResponseAction,
    additionalResponseActions,
) => pipe(
    map((data) => effectSystemAction({
        effectCreator: () => Promise.resolve(effectCreator(data)),
        effectResponseAction,
        additionalResponseActions,
    })),
);

// eslint-disable-next-line import/prefer-default-export
export { effect };
