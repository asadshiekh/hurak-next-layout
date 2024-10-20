// pages/upselling.js

import React from 'react';

const relatedProducts = [
  {
    id: 1,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/642d5c4f4e72d_Asbestos1.webp', // Replace with your actual image paths
    title: 'Level 3 Health and Safety Training for Managers',
    provider: 'Hurak Learning',
    price: '£50',
  },
  {
    id: 2,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/644fcf1abc7ab_62c2cd7d09337_istockphoto-619263856-612x612.webp',
    title: 'Asbestos Awareness (Category A)',
    provider: 'Hurak Learning',
    price: 'From £14.99',
  },
  {
    id: 3,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/64834cd4e147d_istockphoto-1358194313-612x612.jpg',
    title: 'Emergency First Aid At Work Course',
    provider: '16 Course Providers',
    price: 'From £65',
  },
  {
    id: 4,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/66a3b1afda751_Health%20and%20Safety%20Training%20for%20Managers%20Level-3.webp',
    title: 'Manual Handling Training Course',
    provider: 'Hurak Learning',
    price: 'From £14.99',
  },
];

const UpsellingSection = () => {
  return (
    <div className="container mx-auto px-10 md:px-0 py-10">
      <h2 className="text-xl font-semibold mb-6">You might also like</h2>
      
      <div className="relative">
        {/* Left Arrow */}
        {/* <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hidden md:block">
          &lt;
        </button> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.provider}</p>
                <p className="mt-2 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {/* <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hidden md:block">
          &gt;
        </button> */}
      </div>
    </div>
  );
};

export default UpsellingSection;
