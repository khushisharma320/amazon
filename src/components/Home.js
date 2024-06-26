import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = ({cart, warning, success, handleClick}) => {
    const [data, setData] = useState([]);
  
    async function fetchData() {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
      
      useEffect(() => {
        fetchData();
      }, []);


    return (
        <>
           <Header cart={cart}/>
            <div className="mt-20">
          {
            warning && <div className="bg-red-800 text-white w-80 p-4 fixed">This product is already added to the cart</div>
          }
          {
            success && <div className="bg-green-800 text-white w-80 p-4 fixed">This item has been added</div>
          }

                <div className="flex justify-center items-center flex-wrap ">
                    {
                        data.map((element, index) => {
                            return (
                                    <div key={index} className="w-60 h-80 mb-20 ml-8 mr-8">
                                        <div className="shadow-lg shadow-black">
                                        <Link to={`/Details/${element.id}`}>
                                            <img className="w-60 h-60 p-4" src={element.image} alt={element.title} /></Link>
                                            <div className="p-4">
                                                <h2 className="text-red-800 font-bold">{element.category}</h2>
                                                <p className="text-sm py-2">Price - {element.price}$</p>

                                                <span className="text-yellow-700 cursor-pointer font-bold hover:text-yellow-400" onClick={()=>handleClick(element)}>
                                                    Add To Cart
                                                </span>
                                            </div>
                                        </div>
                        
                                </div>
                            )

                        })
                    }
                </div>


            </div>
            </>
    )
}

export default Home;
