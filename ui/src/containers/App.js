import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProductActions from '../actions/ProductActions.js';
import Products from '../components/Products.jsx'

class App extends Component {

  componentWillMount() {
    console.log('App will mount');
    this.props.productActions.getProducts();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App will update');
  }

  render() {
    return (
      <div>
        <Products products={this.props.products}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(ProductActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
