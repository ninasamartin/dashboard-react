import React from 'react';
import Brand from './Brand';
import NavItem from './NavItem';

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          <Brand/>

          <hr className="sidebar-divider my-0"/>

          <NavItem
            item="Dashboard"
            icon="fas fa-fw fa-tachometer-alt"
            extraClassName="active"
          />

          <hr className="sidebar-divider"/>

          <div className="sidebar-heading">Actions</div>

          <NavItem
            item="Pages"
            icon="fas fa-fw fa-folder"
          />
          <NavItem
            item="Charts"
            icon="fas fa-fw fa-chart-area"
          />
          <NavItem
            item="Tables"
            icon="fas fa-fw fa-table"
          />
          
          <hr className="sidebar-divider d-none d-md-block"/>
        </ul>
    )
}

export default Sidebar;