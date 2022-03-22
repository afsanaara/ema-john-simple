import React from 'react';

const Product = (props) => {
    const {name, img, seller,price,ratings} =props.product;
    return (
        <div className='product'>
           <img src={img} alt=""></img>
           <div className="product-info">
               <p className="product-name">{name}</p>
               <p>Price:{price}</p>
           </div>
        </div>
    );
};

export default Product;