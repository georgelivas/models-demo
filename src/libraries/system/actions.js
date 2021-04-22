const actionCreator = (type) => {
    const actionCreatorFunc = (payload) => ({
        type,
        payload,
    });

    actionCreatorFunc.type = type;

    return actionCreatorFunc;
};

const effectActionCreator = (type) => {
    const action = actionCreator(type);

    action.succeeded = actionCreator(`${type}_SUCCEEDED`);
    action.failed = actionCreator(`${type}_FAILED`);

    return action;
};

const EFFECT = 'EFFECT';
const effectAction = actionCreator(EFFECT);

export { actionCreator, effectActionCreator, effectAction };
