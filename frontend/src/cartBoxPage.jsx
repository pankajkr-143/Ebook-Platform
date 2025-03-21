import React, { useState } from 'react';

function CartBoxPage({ cartAllProduct, setCartAllProduct }) {
  // console.log("cartAllProduct", cartAllProduct);

  const handleIncrement = (id) => {
    setCartAllProduct((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const handleDecrement = (id) => {
    setCartAllProduct((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, count: product.count > 1 ? product.count - 1 : 1 }
          : product
      )
    );
  };

  const handleDeleteItem = (id) => {
    setCartAllProduct((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="container-fluid">
      <div className="row p-3">
        {
          cartAllProduct?.map((product) => {
            return (
              <div key={product.id} className="col-8 border rounded d-flex gap-3 align-items-center"> {/* Added d-flex and align-items-center */}
                <div className="p-1 max-w-100px">
                  <img src={product?.image} alt={product?.model} style={{ height: "150px", width: "150px", objectFit: "contain" }} />
                </div>

                <div className="p-1">
                  <h5>Title: {product?.title}</h5>
                  <p>Price: {product?.price}</p>
                  <p>OriginalPrice: {product?.originalPrice}</p>
                  <p>Discount: {product?.discount}</p>
                  <div className='d-flex gap-3 mt-1'>
                    <p className='m-0 border p-0 px-2 py-1 rounded pointer' onClick={() => handleDecrement(product.id)}>-</p>
                    <p className='m-0'>{product?.count}</p>
                    <p className='m-0 border p-0 px-2 py-1 rounded pointer' onClick={() => handleIncrement(product.id)}>+</p>
                  </div>
                </div>

                <div className='d-flex'>
                  <button onClick={() => handleDeleteItem(product.id)}>
                    <b>Delete</b>
                  </button>
                </div>
              </div>
            )
          })
        }
        {cartAllProduct.length == 0 && <div className="col-12">
          <h1 className='text-center fs-3'>
            No Products in Cart.
          </h1>
        </div>}
      </div>
    </div>
  );
}

export default CartBoxPage;
