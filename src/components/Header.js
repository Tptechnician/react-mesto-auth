import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header(props) {
  const location = useLocation();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <header className="header">
      <div className='header__container-main'>
        <img className="header__logo" src={headerLogo} alt="лого" />
        <button className={!isOpenMenu ? 'header__button-menu' : 'header__button-menu header__button-menu_open'}
          onClick={toggleMenu}
        />
      </div>
      {props.loggedIn &&
        <div className='header__container'>
          <p className='header__email'>{props.userEmail}</p>
          <button
            className='header__button-out'
            onClick={props.onLoggedOut}
          >
            Выйти
          </button>
        </div>
      }
      {!props.loggedIn &&
        <div className='header__container'>
          <nav>
            {location.pathname === '/sign-in' &&
              (<Link
                className='header__link'
                to="/sign-up"
              >
                Регистрация
              </Link>)}
            {location.pathname === '/sign-up' &&
              (<Link
                className='header__link'
                to="/sign-in"
              >
                Войти
              </Link>)}
          </nav>
        </div>}
    </header>
  );
}

export default Header;
