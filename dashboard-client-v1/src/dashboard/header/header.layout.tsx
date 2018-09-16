import * as React from 'react';
import { Header } from './header.styles';

interface HeaderLayoutProps {
  title: string;
}

export const HeaderLayout = (props: HeaderLayoutProps) => (
  <Header>{props.title}</Header>
);
