import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButton from '../../UI/Button/MenuButton';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <MenuButton clicked={props.clicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        
        <nav className={classes.DesktopOnly}>
            <NavigationItems
                isAuth={props.isAuth}
            />
        </nav>
    </header>
);

export default toolbar;