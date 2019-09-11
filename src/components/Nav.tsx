import React from 'react';
import {Link} from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Product</Link></li>
        <li><Link to="/basket">Basket</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
