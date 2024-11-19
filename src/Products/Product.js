import React from 'react'
import './Product.css'

function Product({ result }) {
  return (
    <>
      <section className="card-container mt-5">
        {result && result.length > 0 ? (
          result
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </section>
    </>
  );
}

export default Product;



// function Product({result}) {
//   return (
//     <>
//       <section className="card-container mt-5">{result}</section>
//     </>
//   )
// }

// export default Product