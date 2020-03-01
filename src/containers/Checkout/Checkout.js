import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';


class Checkout extends Component {
    state = {
        ingredients: {},
        price: 0,
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if(param[0] === 'price'){
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
            
        }
        this.setState({ ingredients: ingredients, price: price })
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/customer');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                    />
                <Route 
                    path={this.props.match.path + '/customer'}
                    render={(props) => ( <ContactData  ingredients={this.state.ingredients} totalPrice={this.state.price} {...props} /> )} />
                
            </div>
            
        )
    }
}

export default Checkout;