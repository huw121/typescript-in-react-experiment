import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContextConsumer } from '../Context';

const Nav: React.FC = () => {

  const NavList = styled.nav`
    list-style-type: none;
    display: flex;
    justify-content: space-around
    background-color: #b20e53;
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

  return (
    <ContextConsumer>
      {context => {
        const [basket] = context;
        const basketInfo: string = basket.length ? ` (${basket.length})`: "";
        return (
          <NavList>
            <NavButton to="/">Product</NavButton>
            <NavButton to="/basket">Basket{basketInfo}</NavButton>
          </NavList>
        )
      }}
    </ContextConsumer>
  );
}

export default Nav;
