import useProps from './useProps';

const EMPTY_OBJ = {};

const withProps = (propsCreators = EMPTY_OBJ) => (Component) => (props) => {
    const modelProps = useProps(propsCreators);

    return <Component {...modelProps} {...props} />;
};

export default withProps;
