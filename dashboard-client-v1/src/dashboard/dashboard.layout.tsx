import * as React from 'react';
import { SideBar } from './side-bar';
import { Header } from './header';
import { Container, Content, Main } from './dashboard.styles';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const DashboardLayout = (props: DashboardLayoutProps) => (
  <Container>
    <SideBar>
      SideBar
    </SideBar>
    <Content>
      <Header title={props.title} />
      <Main>
        {props.children}
      </Main>
    </Content>
  </Container>
);
