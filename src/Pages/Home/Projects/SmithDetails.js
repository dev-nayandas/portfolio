import React from 'react';

const SmithDetails = () => {
    return (
        <div className="bg-[#5C4C8A] min-h-screen">
      <h1 className="text-3xl font-bold text-[#FA7D13] p-20">
        Details About Dr. Smith Project
      </h1>
      <div className="text-white w-3/4 mx-auto mb-10">
      
        <p> This is a website of a doctor and all type of services that are available through online can be found in the website. The website is made by react , firebase, node js and mongodb. The user can book for a service here. Here user can login see his review and add a review. The website has 5 pages. The website is a mern stack project</p>
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
              src="https://i.ibb.co/k4GFJZv/Dr-Smith.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Home Page</h2>

            <div className="card-actions justify-center">
              <a href="https://doctor-smith.web.app/">
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
              src="https://i.ibb.co/b1418Yy/service-Details.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Service Details Page</h2>

            <div className="card-actions justify-center">
            <a href="https://doctor-smith.web.app/">
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
              src="https://i.ibb.co/CwNHfY3/add-Service.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Add a Service Page</h2>

            <div className="card-actions justify-center">
            <a href="https://doctor-smith.web.app/">
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

export default SmithDetails;