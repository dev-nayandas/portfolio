import React from 'react';

const DeltaDetails = () => {
    return (
        <div className="bg-[#5C4C8A] min-h-screen">
        <h1 className="text-3xl font-bold text-[#FA7D13] p-20">
          Details About Delta E-Learning Project
        </h1>
        <div className="text-white w-3/4 mx-auto mb-10">
        
          <p> This is E-Leanrning platfrom. You can konw details about about us from this site. I have use here React js for this site. The site have 5 page. User can register here to know more about us</p>
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
                src="https://i.ibb.co/PQJmfmH/delta.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Home Page</h2>
  
              <div className="card-actions justify-center">
                <a href="https://fir-assignment-10-c92bf.web.app/">
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
                src="https://i.ibb.co/GCrRcTv/courses.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Courses Page</h2>
  
              <div className="card-actions justify-center">
              <a href="https://fir-assignment-10-c92bf.web.app/">
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
                src="https://i.ibb.co/brFJznj/delta-Login.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Login Page</h2>
  
              <div className="card-actions justify-center">
              <a href="https://fir-assignment-10-c92bf.web.app/">
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

export default DeltaDetails;