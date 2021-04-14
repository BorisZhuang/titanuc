import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useAuth0 } from '@auth0/auth0-react';

const styles = ({
  direction,
  spacing,
  transitions,
  breakpoints,
  palette,
  shape,
}) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
  },
  grow: {
    flexGrow: 1,
  }
});

const Header = ({ classes }) => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <Box display="flex" flexDirection="row" p={1}>
      <Typography noWrap color={'textSecondary'} className={classes.header}>
        TitanUC
      </Typography>
      <div className={classes.grow} />
      <Button
        variant="outlined"
        onClick={() => loginWithRedirect({})}>
        Log In
      </Button>
    </Box>
  )
};

export default withStyles(styles)(Header);
