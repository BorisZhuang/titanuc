import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Phone from '@material-ui/icons/Phone';
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
}));

const ConversationHead = ({ user, onVideoCallClick }) => {
  const styles = useStyles();

  return (
    <>
    <ListItem
      ContainerComponent={'div'}
      ContainerProps={{ className: styles.container }}
      className={styles.root}
    >
      <ListItemAvatar>
        <Avatar src={user.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
        secondary={user.email}
        classes={{ primary: styles.primary, secondary: styles.secondary }}
      />
      <ListItemSecondaryAction>
        <IconButton className={styles.iconBtn} onClick={onVideoCallClick}>
          <Videocam />
        </IconButton>
        <IconButton className={styles.iconBtn}>
          <Phone />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    </>
  );
};

export default ConversationHead;
