import { from } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { effectAction } from './actions';

const effectEpic = (action$) => action$.pipe(
    ofType(effectAction.type),
    mergeMap(
        ({
            payload: {
                effectCreator,
                effectResponseAction,
                additionalResponseActions = [],
            },
        }) => from(effectCreator()).pipe(
            mergeMap((data) => {
                const successActions = [];

                if (effectResponseAction && effectResponseAction.succeeded) {
                    successActions.push(effectResponseAction.succeeded(data));
                }

                additionalResponseActions.map((action) => successActions.push(action(data)));

                return successActions;
            }),
            catchError((error) => (effectResponseAction && effectResponseAction.failed
                ? [effectResponseAction.failed(error)]
                : [])),
        ),
    ),
);

export default effectEpic;
