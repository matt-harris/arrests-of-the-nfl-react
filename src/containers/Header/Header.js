import React from 'react';
import Logo from '../../components/Logo/Logo';
import './Header.scss';

const Header = () => (
  <header className="Header">
    <Logo />

    <div className="Header__meta">
      Data from <a href="https://nflarrest.com/api/" target="_blank" rel="noopener noreferrer">NFLArrest.com API</a>
    </div>
  </header>
);

export default Header;
