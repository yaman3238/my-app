import React, { Component } from 'react'
import Counter from './Hooks/Counter'
import Wish from './Hooks/Wish'
import Product from './Hooks/Product'

export class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Wish />
        <Product/>
      </div>
    )
  }
}

export default App
