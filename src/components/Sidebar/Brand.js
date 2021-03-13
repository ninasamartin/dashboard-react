import React from 'react';
import './assets/style.css';
import logo from './assets/logo-solo.svg';

function Brand() {
    return(
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <img src={logo} style={{height: "3rem"}} alt="logo championes"/>
            </div>
            <div className="sidebar-brand-text mx-3">Championes</div>
        </a>
    );
}

export default Brand;