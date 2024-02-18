import React from "react";

import { Header } from "../../components/Header/Header";



export function Aboutus(){
    return(
        <div>
          <Header/>
        
        <div className="bg-gray-100 min-h-screen p-8">
      <div className=" bg-white p-8 rounded shadow-md">
        <h1 className="text-5xl font-bold mb-6">About Us!</h1>
        <p className="text-gray-700 mb-4 text-2xl">
          Welcome to our Portfolio Management System! We are passionate about helping individuals and businesses manage their investments and portfolios effectively.
        </p>
        <p className="text-gray-700 mb-4 text-2xl">
          Our team is dedicated to providing you with a seamless and user-friendly experience. Whether you're a seasoned investor or just getting started, our platform is designed to meet your needs.
        </p>
        <p className="text-gray-700 mb-4 text-2xl">
          Feel free to explore the features we offer and reach out to us if you have any questions or feedback. We're here to assist you on your financial journey.
        </p>
        <div className="mt-8">
          <h2 className="text-4xl font-semibold mb-4">Meet the Team</h2>
          {/* Add team member cards here */}
          {/* Example card */}
          <div className="flex items-center mb-4">
           
            <div>
              <p className="font-semibold text-3xl">Vinay Chopda</p>
              <p className="text-gray-600 text-2xl">Back-End Support</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            
            <div>
              <p className="font-semibold text-3xl">Aniket Singh</p>
              <p className="text-gray-600 text-2xl">Front-End Support</p>
            </div>
            </div>
            <div className="flex items-center mb-4">
         
            <div>
              <p className="font-semibold text-3xl">Sahil Tatiya</p>
              <p className="text-gray-600 text-2xl">Front-End Support</p>
            </div>
            </div>
            <div className="flex items-center mb-4">
            
            <div>
              <p className="font-semibold text-3xl">Shreyas Pathak</p>
              <p className="text-gray-600 text-2xl">Dev-ops Support</p>
            </div>
            </div>
          {/* Add more team member cards as needed */}
        </div>
      </div>
      </div>
    </div>
  
    );
}