import React, { useState } from 'react'

let Product = () =>
{


    let [product, setProduct] = useState({
        Product: 'Grabo G106  (Dark Blue)',
        Image: "https://rukminim1.flixcart.com/image/416/416/k6jnfrk0/mobile/6/2/s/grabo-g106-g106-original-imafzynazsfhmbgj.jpeg?q=70",
        Qty: 1,
        Price: 659,

    });

    return <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <table className='table table-stripped table-hover mt-5'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Qty</th>
                                <th>Product Price</th>
                                <th>Product Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ product.Product}</td>
                                <td>
                                    <img src={product.Image} height='80px' width='40px' alt='Not Found' />
                                </td>
                                <td>
                                    <i
                                        className="fa fa-minus-circle mr-2"
                                        onClick={() =>
                                        {
                                        
                                            return(product.Qty <= 0 ? null : setProduct({ ...product, Qty: product.Qty - 1 }))
                                        }}
                                    ></i>
                                    {product.Qty}
                                    <i className='fa fa-plus-circle ml-2'
                                        onClick={() =>
                                        {
                                            setProduct({ ...product, Qty: product.Qty + 1 });
                                    }}></i>
                                </td>
                                <td>{ product.Price}</td>
                                <td>{ product.Qty * product.Price}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    
    </>
}

export default Product;