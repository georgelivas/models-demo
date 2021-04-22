import { createSelector } from 'reselect';

const data = ({ data }) => data.data;

const firstElement = createSelector(data, data => data?.[0]);
const firstElementAndData = createSelector(data, firstElement, (data, firstEl) => ({ data, firstEl }));

export {
    data,
    firstElement,
    firstElementAndData,
};
