// src/components/AccountSection.js
import React from 'react';

const AccountSection = () => {
  return (
    <div className="mt-4 mx-2 bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-gray-300 rounded-full p-2">
          <div className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
            Peer Account
          </div>
        </div>
        <div className="text-red-500 font-semibold cursor-pointer">See All</div>
      </div>
      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white p-4 rounded-lg shadow-md">
        {/* <div className="bg-gradient-to-r from-black to-blue-600 text-white p-4 rounded-lg shadow-md"> */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl">₦********</div>
          <i className="fas fa-eye text-xl"></i>
        </div>
        <div>
          <div>0096122631</div>
          <div>Savings - Regular</div>
          <div>Astorre Reeves</div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
