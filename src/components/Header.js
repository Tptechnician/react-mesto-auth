import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header(props) {
  console.log(props.loggedIn);
  const location = useLocation();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu)
  }

  function clickLoggedOut() {
    toggleMenu();
    props.onLoggedOut();
  }

  return (
    <header className={!isOpenMenu ? 'header' : 'header header_menu-open'}>
      <div className='header__container-main'>
        <img className="header__logo" src={headerLogo} alt="лого" />
        <button className={`${!isOpenMenu ? 'header__button-menu' : `header__button-menu header__button-menu_open`} ${!props.loggedIn ? 'header__button-menu_loggedout' : ''}`}
          onClick={toggleMenu}
        />
      </div>
      {props.loggedIn &&
        <div className={!isOpenMenu ? 'header__container' : 'header__container header__container_open'}>
          <p className='header__email'>{props.userEmail}</p>
          <button
            className='header__button-out'
            onClick={clickLoggedOut}
          >
            Выйти
          </button>
        </div>
      }
      {!props.loggedIn &&
        <div className={`header__container ${!props.loggedIn ? 'header__container_loggedout' : ''}`}>
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
