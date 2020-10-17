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

export const SideBar = styled.div`
  width: 448px;
  top: 0;
  right: ${(props) => props.open ? '0' : '-448px' };
  display: flex;
  position: fixed;
  height: 100%;
  background: #e0e0e0;
  box-shadow: 0px 2px 8px rgba(122, 122, 122, 0.15);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  transition: right .4s;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2;
`

export const HeaderSideBar = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content:flex-end;
  padding: 10px;
`