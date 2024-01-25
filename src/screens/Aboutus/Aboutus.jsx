import React from "react";
import Shreyas from '../../assets/images/shreyas.jpeg';



export function Aboutus(){
    return(
        <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
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
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHx7onHNc0Nbw/profile-displayphoto-shrink_400_400/0/1699895057277?e=1711584000&v=beta&t=hl6LDD8IO-rG2oC-OExa2OTeJN9ad94Wu7hr8Atl8cA"
              alt="Team Member"
              className="max-w-xs rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-3xl">Vinay Chopda</p>
              <p className="text-gray-600 text-2xl">Back-End Support</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img
              src="https://official-interview-experience.netlify.app/static/media/aniket.b6285a80b500ae94ac68.jpg"
              alt="Team Member"
              className="max-w-xs rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-3xl">Aniket Singh</p>
              <p className="text-gray-600 text-2xl">Front-End Support</p>
            </div>
            </div>
            <div className="flex items-center mb-4">
            <img
              src="https://media.licdn.com/dms/image/D5635AQFJ7kWUqB-65Q/profile-framedphoto-shrink_400_400/0/1687571637492?e=1706760000&v=beta&t=Y_3QPXQoaffuxzz7hZKSvdhjBNCpmbyRKewrxcwdoGA"
              alt="Team Member"
              className="max-w-xs rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-3xl">Sahil Tatiya</p>
              <p className="text-gray-600 text-2xl">Front-End Support</p>
            </div>
            </div>
            <div className="flex items-center mb-4">
            <img
              src={Shreyas}
              alt="Team Member"
              className="max-w-xs rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-3xl">Shreyas Pathak</p>
              <p className="text-gray-600 text-2xl">Dev-ops Support</p>
            </div>
            </div>
          {/* Add more team member cards as needed */}
        </div>
      </div>
    </div>
  
    );
}