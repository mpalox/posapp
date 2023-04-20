import React from 'react'

const ProductItem = ({ item }) => {
  return (
    <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
      <div className="product-img">
        <img
          className="h-28 object-cover w-full border-b"
          src={item.img}
          alt=""
        />
      </div>
      <div className="product-info flex flex-col p3">
        <span className="font-bold"> {item.title}</span>
        <span>{item.price} £</span>
      </div>
    </div>
  );
};

export default ProductItem;
