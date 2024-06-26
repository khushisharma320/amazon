import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from './Header';

const Details = ({ cart, handleClick, warning }) => {
  const { detailsId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProductDetails(detailsId);
  }, [detailsId]);

  const fetchProductDetails = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  return (
    <div>
      <div>
        <Header cart={cart} />
        {product && (
          <div className="py-10 text-center" data-aos="fade-down">
            <h2 className="text-red-800 font-bold pb-10"><span className="text-2xl text-yellow-800">E Commerce</span>/{product.category}</h2>
            <div className="flex flex-wrap justify-around items-center">
              <div>
                <img src={product.image} alt={product.title} width={260} height={250} />
                <button onClick={() => { handleClick(product) }} type="button" class="focus:outline-none text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-52 mt-4">Add To Cart</button>
                {
                  warning && <div className="bg-red-800 text-white w-80 p-4 fixed">This product is already added to the cart</div>
                }

              </div>
              <div className="p-4 w-96 h-96 mt-5 flex flex-col justify-start text-start gap-4 overflow-y-scroll">
                <h2 className="text-red-800 font-bold text-start">{product.title}</h2>

                <p className="text-sm py-2 text-start font-bold"><span className="text-yellow-800">Price - </span>{product.price}$</p>
                <p className="text-sm py-2 text-start">{product.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Details;
