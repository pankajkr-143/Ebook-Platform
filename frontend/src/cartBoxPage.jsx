import React from 'react';

function CartBoxPage() {

  const data = {
    id: 1,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443129_sd.jpg",
    model: "Iphone 12",
    description: "Apple Iphone 12 with 128GB",
    price: "$799",
    count: "1",
  };

  const handleIncrement = () => {
    // count++;
    console.log("Incremented");
   };
  const handleDecrement = () => {
    // count--;
    console.log("Decremented");
   };

  return (
    <div className="container-fluid">
      <div className="row p-3">
        <div className="col-8 border rounded d-flex gap-3 align-items-center"> {/* Added d-flex and align-items-center */}
          <div className="p-1 max-w-100px">
            <img src={data?.img} alt={data?.model} style={{ height: "100px", width: "100px", objectFit: "contain" }} />
          </div>

          <div className="p-1">
            <h5>{data?.model}</h5>
            <p>{data?.description}</p>
            <p>{data?.price}</p>

            <div className='d-flex gap-3 mt-1'>
              <p className='m-0 border p-0 px-2 py-1 rounded pointer' onClick={handleDecrement}>-</p>
              <p className='m-0'>{data?.count}</p>
              <p className='m-0 border p-0 px-2 py-1 rounded pointer'onClick={handleIncrement}>+</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBoxPage;
