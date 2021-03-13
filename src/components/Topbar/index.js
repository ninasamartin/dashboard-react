import React from 'react';
import NavItem from './NavItem';
import avatar from '../../assets/images/dummy-avatar.jpg';

function Topbar() {
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          {/*<!-- Sidebar Toggle (Topbar) -->*/}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>

          {/*<!-- Topbar Navbar -->*/}
          <ul className="navbar-nav ml-auto">
            <NavItem
              id="alertsDropdown"
            >
              <i className="fas fa-bell fa-fw"></i>
              <span className="badge badge-danger badge-counter">3+</span>
            </NavItem>
            <NavItem
              id="messagesDropdown"
            >
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter">7</span>
            </NavItem>
            <div className="topbar-divider d-none d-sm-block"></div>
            <NavItem
              id="userDropdown"
            >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                <img className="img-profile rounded-circle" src={avatar} width="60" alt="avatar"/>
            </NavItem>
          </ul>
        </nav>
    );
}

export default Topbar;