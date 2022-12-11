import React from "react";
import { Link } from "react-router-dom";

const LaptopDetails = () => {
  return (
    <div className="bg-[#5C4C8A] min-h-screen">
      <h1 className="text-3xl font-bold text-[#FA7D13] p-20">
        Details About Laptops Hub
      </h1>
      <div className="text-white w-3/4 mx-auto mb-10">
      
        <p> laptop hub The site is for second hand laptop. Buyer can buy this laptop in low price. Seller can post his old laptop to sell. It is the best solution for buy and sell second hand laptop. It is a website for buy and sell second hand  laptop. Seller can make a add. Buyer can buy second hand Laptop. It's a React application. I have use here React , React Router, firebase, NodeJS and mongodb</p>
        {/* <ul >
            <li > 1.It is a website for buy and sell second hand  laptop</li>
            <li>2. Seller can make a add</li>
            <li>3. Buyer can buy second hand Laptop</li>
            <li>4. It's a React application</li>
            <li>5. I have use here React , React Router, firebase, NodeJS and mongodb</li>
        </ul> */}
       
      </div>
      <div className=" grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2">
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="h-[400px] w-full"
              src="https://i.ibb.co/DCrWzGW/laptop2.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Home Page</h2>

            <div className="card-actions justify-center">
              <a href="https://final-project-e1cf1.web.app/">
                <button className="btn bg-gradient-to-r from-indigo-500">
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="h-[400px] w-full"
              src="https://i.ibb.co/pKv0BFw/login-Page.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Login Page</h2>

            <div className="card-actions justify-center">
            <a href="https://final-project-e1cf1.web.app/">
                <button className="btn bg-gradient-to-r from-indigo-500">
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="h-[400px] w-full"
              src="https://i.ibb.co/KNgQ1Sn/Dashboard.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dashboard</h2>

            <div className="card-actions justify-center">
            <a href="https://final-project-e1cf1.web.app/">
                <button className="btn bg-gradient-to-r from-indigo-500">
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetails;
