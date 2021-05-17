import React from 'react';

const navbar = ({ totalCounters }) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Shopping Cart <span className="badge bg-secondary">{totalCounters}</span>
                        </a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default navbar;