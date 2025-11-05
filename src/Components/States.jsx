import React from 'react';

const States = () => {
    return (
                  <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-10">
        <h2 className="text-3xl text-white font-bold p-5 text-center">Trusted by Millions, Built for You</h2>
        <div className="flex justify-around gap-4">
          <div className="flex flex-col items-center p-4">
            <p className="text-sm text-white">Total downloads</p>
            <p className="text-5xl text-white font-bold">29.6M</p>
            <p className="text-sm text-white">21% more than last month</p>
          </div>
                   <div className="flex flex-col items-center p-4">
            <p className="text-sm text-white">Total Reviews</p>
            <p className="text-5xl text-white font-bold">906K</p>
            <p className="text-sm text-white">46% more than last month</p>
          </div>
                   <div className="flex flex-col items-center p-4">
            <p className="text-sm text-white">Active Apps</p>
            <p className="text-5xl text-white font-bold">132+</p>
            <p className="text-sm text-white">31 more will Launch</p>
          </div>
         
           
        </div>
      </div>
    );
};

export default States;