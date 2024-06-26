import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Cart = ({ cart, setCart }) => {
 
  const [quantities, setQuantities] = useState({});

  const totalPrice = cart.reduce((acc, item) => {
    const quantity = quantities[item.id] || 1;
    return acc + item.price * quantity;
  }, 0);

  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => ({...prevQuantities, [itemId]: (prevQuantities[itemId] || 1) + 1 }));
  };

  const handleDecrement = (itemId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[itemId] || 1;
      if (currentQuantity > 1) {
        return {...prevQuantities, [itemId]: currentQuantity - 1 };
      }
      return prevQuantities;
    });
  };

  const handleDelete = (id) => {
   let result =  cart.filter((element)=>{
         return element.id !== id;
    });

    setCart(result);

  }



  return (
    <div className="mt-10">
      <div className="text-center mb-10">
                <Link className="focus:outline-none text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-52 mt-4" to="/">Back To Home</Link>
                </div>
      <div>
        {
          cart?.map((element, index) => {
            return (
              <div key={index} className="mb-2 ml-8 mr-8 mt-2"  data-aos="flip-left">
                <div className="shadow-sm shadow-black flex flex-wrap justify-around items-center">
                  <img className="w-28 h-28 p-4" src={element.image} alt={element.title} />
                  <div className="p-4">
                    <h2 className="text-red-800 font-bold">{element.category}</h2>
                    <p className="text-sm py-2">Price - {element.price}$</p>
                  </div>
                  <div className="py-2">
                    <button className='p-2 border-2 bg-green-200' onClick={()=>handleIncrement(element.id)}>+</button>
                    <button className='p-2 border-2'>{quantities[element.id] || 1}</button>
                    <button className='p-2 border-2 bg-red-200' onClick={()=>handleDecrement(element.id)}>-</button>
                  </div>
                  <div>
                    <MdDelete onClick={()=>handleDelete(element.id)} size={30} color='red'/>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
      <div className="text-center mb-4">
        <span className="text-yellow-800 font-bold text-lg">Total Price of your cart</span> = {Math.round(totalPrice)}$
      </div>
    </div>
  )
}

export default Cart;
