import { createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';

const initState = {
    data: [],
};

const reducer = createReducer(initState, (builder) => builder
    .addCase(actions.fetchData.succeeded, (state, { payload }) => {
        state.data = payload.data;
    }));

export default reducer;
