import React from 'react';

function Brand() {
    return(
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Championes</div>
        </a>
    );
}

export default Brand;