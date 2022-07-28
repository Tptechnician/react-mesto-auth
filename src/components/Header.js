import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="лого" />
      <Link
        className='header__button'
        to="/sign-up"
      >
        Регистрация
      </Link>
    </header>
  );
}

export default Header;
