import React from 'react'

const NavBar = ({totalCounters}) => {
    return ( 
            <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="https://github.com/AIgonen/eshop-cart/tree/master">
              Shopping cart <span className='badge badge-pill badge-secondary'>{totalCounters}</span>
              </a>
            </div>
          </nav>
     );
};

 
export default NavBar;