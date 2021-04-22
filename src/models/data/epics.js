import { combineEpics, ofType } from 'redux-observable';

import { of } from 'rxjs';
import {
    mapTo,
    mergeMap,
    map,
    catchError,
} from 'rxjs/operators';

import * as actions from './actions';
import axios from 'axios';

const initFetchEpic = () => of([]).pipe(
    mapTo(actions.fetchData()),
);

const fetchDataEpic = (actions$) => actions$.pipe(
    ofType(actions.fetchData.type),
    mergeMap(({ payload }) => axios.get('/api')),
    map(response => response.data.results),
    map(data => actions.fetchData.succeeded({ data })),
    catchError(err => of(actions.fetchData.failed(err))),
);

export default combineEpics(
    initFetchEpic,
    fetchDataEpic,
);
