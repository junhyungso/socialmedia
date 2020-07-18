import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'utils/publicUrl';
import {
    Link
  } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <Link to="/">
                    <img src={publicUrl('/assets/home.svg')} alt="Home"/>
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to="/explore">
                    <img src={publicUrl('/assets/explore.svg')} alt="Explore"/>
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to="/newpost">
                    <img src={publicUrl('/assets/newpost.svg')} alt="New Post"/>
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to="/activity">
                    <img src={publicUrl('/assets/activity.svg')} alt="Activity"/>
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to="/profile">
                    <img src={publicUrl('/assets/profile.svg')} alt="Profile"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
