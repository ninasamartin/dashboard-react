import React from 'react';

function NavItem(props) {
    return(
        <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="/" id={props.id}>
                {props.children}
              </a>
        </li>
    );
}

export default NavItem;