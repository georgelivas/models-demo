import { compose } from 'redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import { withProps } from 'libraries/components';
import { data } from 'models/data';

import styles from './styles';

const Home = ({ classes, data }) => (
    <div className={classes.root}>
        <List>
            {
                data.map(movie => (
                    <ListItem key={movie.id} button>
                        <ListItemText primary={movie.title} />
                    </ListItem>
                ))
            }
        </List>
    </div>
);

export default compose(
    withStyles(styles),
    withProps({ data }),
)(Home);
