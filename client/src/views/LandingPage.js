import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Layout, {
  // HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import {
  Root,
  getHeader,
  getContent,
  getDrawerSidebar,
  getSidebarContent,
  getFooter,
  getSidebarTrigger,
  getCollapseBtn,
  getStandardScheme,
} from '@mui-treasury/layout';
import Header from '../components/Header';

const Content = getContent(styled);
const Footer = getFooter(styled);

const standardScheme = getStandardScheme();

const LandingPage = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Root scheme={standardScheme}>
        {({ state: { sidebar } }) => (
          <>
            <Header>
              <Toolbar>
                <Header />
              </Toolbar>
            </Header>
            <Content>
              <Typography noWrap>
                Landing page, Coming soon...
              </Typography>
            </Content>
            <Footer>
            </Footer>
          </>
        )}
      </Root>
    </StylesProvider>
  );
};

export default LandingPage;
