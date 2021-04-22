import { createStore, compose, applyMiddleware } from 'redux';

const configStore = (rootReducer, initialState, middlewares) => {
    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name,
            // actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
    // other store enhancers if any
    );

    return createStore(rootReducer, initialState, enhancer);
};

export default configStore;
