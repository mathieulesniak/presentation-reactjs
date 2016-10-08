import React from 'react'
import { connect } from 'react-redux'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = ({ pending }) => {
  const imgUrl = '/fc.jpg'
  const style = pending ? {backgroundImage: 'url(' + imgUrl + ')',backgroundRepeat:'no-repeat'} : {}
  return (
  <div style={style}>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)}

const mapStateToProps = (state) => ({
  pending: state.cart.pending
})

export default connect(
  mapStateToProps
)(App)
