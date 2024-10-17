// pages/cart.js
"use client"
import React, { useState } from 'react';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-xl font-semibold mb-6">1 Items in Cart</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Item Section */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between">
            {/* Image */}
            <div className="w-24 h-24">
              <img
                src="/images/cart-item-image.webp" // Replace with the actual image URL
                alt="Course Image"
                className="object-cover rounded"
              />
            </div>

            {/* Product Description */}
            <div className="flex-1 ml-6">
              <h3 className="text-lg font-semibold">
                Level 1 Award In Health and Safety in a Construction Environment Course{' '}
                <span className="bg-yellow-200 text-yellow-600 text-xs font-bold ml-2 py-1 px-2 rounded">Flexi</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">Provided by Hurak Learning</p>
              
              {/* Quantity and Remove */}
              <div className="mt-4 flex items-center space-x-4">
                {/* Quantity Selector */}
                <select
                  className="border border-gray-300 rounded-lg p-1"
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>

                {/* Confirm Quantity Button */}
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                  ✓
                </button>

                {/* Remove Button */}
                <button className="text-blue-500">Remove</button>
              </div>
            </div>

            {/* Price Section */}
            <div className="text-right">
              <p className="text-sm line-through text-gray-400">£249.99</p>
              <p className="text-2xl font-semibold text-red-500">£149.99</p>
            </div>
          </div>
        </div>

        {/* Price Summary Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold">£149.99</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal :</span>
            <span>£149.99</span>
          </div>

          {/* Proceed Button */}
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition mb-4">
            Proceed
          </button>

          {/* Coupon Code */}
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="Enter Coupon"
              className="border border-gray-300 p-2 rounded-lg flex-1"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Apply
            </button>
          </div>

          {/* Klarna Payment Option */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Pay 3 monthly interest-free payments with
            </p>
            <button className="mt-2">
              <img src="/images/klarna-logo.png" alt="Klarna" className="h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
