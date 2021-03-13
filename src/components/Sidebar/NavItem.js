import React from 'react';

function NavItem(props) {
    return (
        <li className={"nav-item " + props.extraClassName}>
            <a className="nav-link" href="/">
              <i className={props.icon}></i>
              <span> {props.item}</span>
            </a>
        </li>
    );
}

export default NavItem;