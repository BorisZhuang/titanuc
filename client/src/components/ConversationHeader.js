import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Phone from '@material-ui/icons/Phone';
import Link from '@material-ui/icons/Link';
import Videocam from '@material-ui/icons/Videocam';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  root: {
    padding: '8px 8px 8px 8px',
  },
  primary: {
    fontWeight: 'bold',
  },
  secondary: {
    fontSize: 12,
  },
  iconBtn: {
    '& svg': {
      color: 'rgb(0, 153, 255)',
    },
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ConversationHead = ({ user, connected, onConnect, onVideoCallClick }) => {
  const styles = useStyles();
  const callAction = (
    <ListItemSecondaryAction>
      <IconButton className={styles.iconBtn} onClick={onVideoCallClick}>
        <Videocam />
      </IconButton>
      <IconButton className={styles.iconBtn}>
        <Phone />
      </IconButton>
    </ListItemSecondaryAction>
  );
  const connectAction = (
    <ListItemSecondaryAction>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          startIcon={<Link />}
          onClick={onConnect}>
          Connect
        </Button>
    </ListItemSecondaryAction>
  );

  return (
    <>
    <ListItem
      ContainerComponent={'div'}
      ContainerProps={{ className: styles.container }}
      className={styles.root}>
      <ListItemAvatar>
        <Avatar src={user.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
        secondary={user.email}
        classes={{ primary: styles.primary, secondary: styles.secondary }} />
      { connected ? callAction : connectAction }
    </ListItem>
    </>
  );
};

export default ConversationHead;
