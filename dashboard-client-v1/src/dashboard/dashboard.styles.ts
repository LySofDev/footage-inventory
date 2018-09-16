import { default as styled } from '../styled-components';
import { theme } from '../theme';

export const Container = styled.section`
  position: absolute;
  top: 3.5rem;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
`

export const Content = styled.article`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const SideBar = styled.aside`
  width: 20%;
  background: ${theme.colors.background};
  padding: 1.5rem 1rem;
`

export const Header = styled.header`
  height: 6rem;
  width: 100%;
  margin: 1.5rem 1rem;
`

export const Main = styled.main`
  margin: 1.5rem 1rem;
`
