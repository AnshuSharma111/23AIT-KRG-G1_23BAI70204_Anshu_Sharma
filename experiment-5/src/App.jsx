import { useState } from 'react'

function App({name, price, description}) {
  return (
    <div>
      <h1> THE GOAT </h1>
      <h2>Products are as follows: {
        products.map(product => <Product key={product.id} {...product} />)}</h2>
    </div>
  )
}

export default App;