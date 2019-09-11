import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavList = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-around
`

const NavButton = styled(Link)`
  display: block;
  padding: 1.2em;
  text-decoration: none;
  color: white;
  font-size: 1.6em;
  font-weight: bold;
  &:hover {
    color: #c20e53;
    background-color: white;
  }
`

const Nav: React.FC = () => {
  return (
      <NavList>
        <NavButton to="/">Product</NavButton>
        <NavButton to="/basket">Basket</NavButton>
      </NavList>
  );
}

export default Nav;
