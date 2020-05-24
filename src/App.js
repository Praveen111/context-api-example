import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/list';
import Context from './Context/productsContext';

class App extends Component {
  state = {
    products : [],
    cartProducts:[]
  }
  componentDidMount () {
    console.log("effect");
    fetch("http://localhost:3001/ITEMS").then(resp => resp.json())
    .then(result => this.setState({
      products: result
    }));
  }

  addToCart = (product) => {
    const {cartProducts} = this.state;
    this.setState({
      cartProducts:[...cartProducts,product]
    })
  }

  render () {
    console.log("PRoducts",this.state)
    return (
      <Context.Provider value={{
        products: this.state.products,
        cartProducts:this.state.cartProducts,
        addToCart: (prod) => this.addToCart(prod)
      }}>
      <div className="App">
      <Header />
      <List />
      </div>
      </Context.Provider>
    );
  }

}

export default App;
