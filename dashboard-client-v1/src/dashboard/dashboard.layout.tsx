import * as React from 'react';
import { SideBar } from './side-bar';
import { Container, Content, Header, Main } from './dashboard.styles';

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
