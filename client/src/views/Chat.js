import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import Layout, {
  Root,
  getHeader,
  getContent,
  getFullscreen,
  getDrawerSidebar,
  getSidebarTrigger,
  getInsetContainer,
  getInsetSidebar,
  getInsetFooter,
} from '@mui-treasury/layout';
import {
  ChatList,
  ChatDialog,
} from '@mui-treasury/mockup/brands/messenger';
import ConversationHead from '../components/ConversationHeader';
import ChatHeader from '../components/ChatHeader';
import Search from '../components/Search';
import ChatBar from '../components/ChatBar';

const Header = getHeader(styled);
const Content = getContent(styled);
const Fullscreen = getFullscreen(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const InsetSidebar = getInsetSidebar(styled);
const InsetFooter = getInsetFooter(styled);
const InsetContainer = getInsetContainer(styled);

const useStyles = makeStyles(() => ({
  header: {
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .10)',
    backgroundColor: '#ffffff',
  },
  insetBody: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
    overflowY: 'auto',
    backgroundColor: '#fff',
  },
  edit: {
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(0, 153, 255)',
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body1: {
        fontSize: `${15 / 16}rem`,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'strong, b': {
            fontWeight: 'bold',
          },
        },
      },
    },
  })
);

const Chat = () => {
  const styles = useStyles();
  const scheme = Layout();
  scheme.configureHeader(builder => {
    builder.create('appHeader').registerConfig('xs', {
      position: 'relative',
      initialHeight: 60,
    });
  });
  scheme.configureEdgeSidebar(builder => {
    builder
      .create('primarySidebar', { anchor: 'left' })
      .registerTemporaryConfig('xs', {
        anchor: 'left',
        width: '30%'
      })
      .registerPermanentConfig('md', {
        width: '25%',
      });
  });
  scheme.enableAutoCollapse('primarySidebar', 'sm');
  scheme.configureInsetSidebar(builder => {
    builder
      .create('secondarySidebar', { anchor: 'right' })
      .registerAbsoluteConfig('xs', {
        width: '0%', // this inset side bar is just a placehold, used to push the chat bar to the buttom.
      });
  });
  return (
    <Fullscreen>
      <Root theme={theme} scheme={scheme}>
        {({ state: { sidebar } }) => (
          <>
            <CssBaseline />
            <Header className={styles.header}>
              <Toolbar disableGutters>
                <SidebarTrigger sidebarId='primarySidebar' />
                <ConversationHead />
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId={'primarySidebar'}>
              {sidebar.primarySidebar.collapsed ? (
                <Box textAlign={'center'} my={1}>
                  <IconButton className={styles.edit}>
                    <Edit />
                  </IconButton>
                </Box>
              ) : (
                <>
                  <ChatHeader />
                  <Box p={'4px 16px 12px'}>
                    <Search />
                  </Box>
                </>
              )}
              <ChatList concise={sidebar.primarySidebar.collapsed} />
            </DrawerSidebar>
            <Content>
              <InsetContainer
                disableGutters
                rightSidebar={
                  <InsetSidebar
                    sidebarId={'secondarySidebar'}
                    classes={{ paper: styles.insetBody }}
                  >
                    {/*placeholder*/}
                  </InsetSidebar>
                }
              >
                <ChatDialog />
              </InsetContainer>
            </Content>
            <InsetFooter ContainerProps={{ disableGutters: true }}>
              <Box display={'flex'} alignItems={'center'} p={1}>
                <ChatBar concise={sidebar.primarySidebar.collapsed} />
              </Box>
            </InsetFooter>
          </>
        )}
      </Root>
    </Fullscreen>
  );
};

export default Chat;
