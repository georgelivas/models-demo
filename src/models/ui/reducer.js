import { createReducer } from '@reduxjs/toolkit';

import * as action from './actions';

const initState = {
    theme: 'light',
};

const reducer = createReducer(initState, (builder) => builder
    .addCase(action.toggleTheme, (state, { payload }) => {
        state.theme = payload.theme;
    }));

export default reducer;
