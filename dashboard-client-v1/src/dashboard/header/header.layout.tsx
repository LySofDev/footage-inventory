import * as React from 'react';
import { Header, Title } from './header.styles';

interface HeaderLayoutProps {
  title: string;
}

export const HeaderLayout = (props: HeaderLayoutProps) => (
  <Header>
    <Title>{props.title}</Title>
  </Header>
);
