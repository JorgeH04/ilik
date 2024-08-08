import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faUser } from '@fortawesome/free-regular-svg-icons';


export default function Nav({ user, logout  }) {
  return (
    <nav className="Nav">
      <ul className="Nav__links">
        <li>
        <Link className="Nav__link" to="/">
            MERN exam
          </Link>
        </li>
        {user && <LoginRoutes user={user} logout={logout} />}
      </ul>
    </nav>
  );
}



function LoginRoutes({ logout }) {
  return (
    <>
      <li className="Nav__link-push">
        <Link className="Nav__link" to="/upload">
          <FontAwesomeIcon icon={faCameraRetro} />
        </Link>
      </li>

      <li className="Nav__link-margin-left">
        <Link className="Nav__link" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
      </li>
    </>
  );
}