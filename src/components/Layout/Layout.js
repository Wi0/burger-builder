import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar clicked={this.sideDrawerToggleHandler} isAuth={this.props.isAuth} />
                <SideDrawer 
                    closed={this.sideDrawerToggleHandler} 
                    open={this.state.showSideDrawer} 
                    isAuth={this.props.isAuth}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);