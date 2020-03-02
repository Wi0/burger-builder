import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Order from '../Order';

import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes great</h1>
            <div style={{width: '100%', height: 'auto', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Order ingredients={props.ingredients} price={props.totalPrice} />
            <Button 
                btnType='Danger'
                clicked={props.checkoutCancel}
            >CANCEL</Button>
            <Button 
                btnType='Success'
                clicked={props.checkoutContinue}
                >CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;