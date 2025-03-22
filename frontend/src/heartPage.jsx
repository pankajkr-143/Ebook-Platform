import React from 'react';

function HeartPage({ wishListAllProduct, setWishListAllProduct }) {
  // console.log("wishListAllProduct", wishListAllProduct);

  const handleDeleteItem = (id) => {
    setWishListAllProduct((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="container-fluid">
      <div className="row p-3">
        {
          wishListAllProduct?.map((product) => {
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
        {wishListAllProduct.length === 0 && <div className="col-12">
          <h1 className='text-center fs-3'>
            No Products in wishList.
          </h1>
        </div>}
      </div>
    </div>
  );
}

export default HeartPage;
