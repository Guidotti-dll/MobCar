import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 8vh;
  position: sticky;
  top: 0;
  z-index: 1;
`

export const NavBar = styled.nav`
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  & img.logo {
    height: 65%;
  }

  & img.menu {
    height: 19px;
    position: absolute;
    right: 18px;
    cursor: pointer;
  }
`