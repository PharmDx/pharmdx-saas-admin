import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from '../../menus/UserMenu';

const AppTemplate = ({ children }) => {
    return (
		<>
            <header className="app-header navbar">
                <button type="button" className="d-lg-none navbar-toggler" data-sidebar-toggler="true">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand" to="/">
                    <div className="navbar-brand-full">
                        <i className="fa fa-fire fa-2x text-warning"></i>
                    </div>
                    <div className="navbar-brand-full text-dark pl-2 font-weight-bold">FIREACT</div>
                </NavLink>
                <button type="button" className="d-md-down-none navbar-toggler" data-sidebar-toggler="true">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="ml-auto navbar-nav">
                    <UserMenu />
                </ul>
            </header>
            <div className="app-body">
                <div className="sidebar">

                </div>
                <main className="main">
                {children}
                </main>
            </div>
            <footer className="app-footer">

            </footer>
        </>
    )
}

export default AppTemplate;