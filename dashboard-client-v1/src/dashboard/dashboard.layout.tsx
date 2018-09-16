import * as React from 'react';
import { Container, Content, SideBar, Header, Main } from './dashboard.styles';

export const DashboardLayout = () => (
  <Container>
    <SideBar>
      SideBar
    </SideBar>
    <Content>
      <Header>
        Dashboard
      </Header>
      <Main>
        Main
      </Main>
    </Content>
  </Container>
);
