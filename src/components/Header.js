import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="лого" />
      {props.loggedIn &&
        <div className='header__container'>
          <p className='header__email'>{props.userEmail}</p>
          <Link
            className='header__link'
            to="/sign-up"
          >
            Выйти
          </Link>
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
