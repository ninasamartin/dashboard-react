import React from 'react';
import Brand from './Brand';
import NavItem from './NavItem';

let url = "http://localhost:3001";

function Sidebar() {
  return (
    <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

      <Brand/>

      <hr className="sidebar-divider my-0"/>

      <NavItem
        item="Dashboard"
        icon="fas fa-fw fa-tachometer-alt"
        extraClassName="active"
        href="/"
      />

      <hr className="sidebar-divider"/>

      <div className="sidebar-heading">Productos</div>

      <NavItem
        item="Ver todos"
        icon="fas fa-fw fa-list"
        href={url + "/admin/productos/listado"}
      />
      <NavItem
        item="Nuevo producto"
        icon="fas fa-fw fa-plus"
        href={url + "/admin/productos/crear"}
      />

      <hr className="sidebar-divider"/>

      <div className="sidebar-heading">Usuarios</div>

      <NavItem
        item="Ver todos"
        icon="fas fa-fw fa-list"
        href={url + "/admin/usuarios/listado"}
      />
      <NavItem
        item="Nuevo administrador"
        icon="fas fa-fw fa-plus"
        href={url + "/admin/nuevo"}
      />
      
      <hr className="sidebar-divider d-none d-md-block"/>
    </ul>
  )
}

export default Sidebar;