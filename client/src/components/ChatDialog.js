import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ChatMsg from '@mui-treasury/mockup/brands/messenger/ChatMsg';

const AVATAR = '';

const useStyles = makeStyles(() => ({
  date: {
    fontWeight: 500,
    color: 'rgba(0,0,0,0.4)',
    margin: '12px 0',
    fontSize: 12,
    textAlign: 'center',
  },
}));

const ChatDialog = () => {
  const styles = useStyles();
  return (
    <Box p={'16px 30px 12px 10px'}>
      <ChatMsg
        avatar={AVATAR}
        messages={[
          'Hi Dorrie, How r u doing today?',
          'What about your presentation?',
        ]}
      />
      <Typography className={styles.date}>FRI 1:46 PM</Typography>
      <ChatMsg
        side={'right'}
        messages={[
          "I'm doing great on my project, thanks for asking.",
        ]}
      />
      <Typography className={styles.date}>FRI 4:18 PM</Typography>
      <ChatMsg
        avatar={AVATAR}
        messages={[
          'Great!',
          'See u later.',
        ]}
      />
    </Box>
  );
};

export default ChatDialog;
