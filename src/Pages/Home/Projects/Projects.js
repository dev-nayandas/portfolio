import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#7858A6] p-10">
      <div>
        <h1 className="text-6xl font-bold text-[#FA7D13] ">My Creations</h1>
      </div>
      <div className="mt-10 grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 flex items-center ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl  ">
          <figure>
            <img
              className="h-[400px] w-full"
              src="https://i.ibb.co/DCrWzGW/laptop2.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Laptops Hub</h2>
            <p>
              This is second hand laptop buying and selling website. Three types
              of user can use it. Buyer can buy laptops. seller can sell laptop.
              Admin can verify a laptop
            </p>
            <div className="card-actions justify-center">
              <Link to='/laptopDetails' >
                <button className="btn bg-gradient-to-r from-indigo-500">
                Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="h-[400px] w-full"
              src="https://i.ibb.co/k4GFJZv/Dr-Smith.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr. Smith</h2>
            <p>
              It is a Doctor service management website. Doctor can add his
              service to show the users. And User can give a review on a service
            </p>
            <div className="card-actions justify-center">
              <Link to='/smithDetails' >
                <button className="btn bg-gradient-to-r from-indigo-500">
                Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="h-[400px] w-full"
              src="https://i.ibb.co/PQJmfmH/delta.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Delta E-Learning</h2>
            <p>
              It is Online Learning platform. Learner can see the courses
              provided by the institute. Also can down the course details
            </p>
            <div className="card-actions justify-center">
              <Link to='/deltaDetails'>
                <button className="btn bg-gradient-to-r from-indigo-500">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
