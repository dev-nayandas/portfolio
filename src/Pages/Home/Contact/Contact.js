import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-20">
      <div>
        <h1 className="text-6xl text-[#FA7D13] font-bold ">Contact Me</h1>
      </div>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              action="https://formsubmit.co/rich.nayan@gmail.com"
              method="POST"
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Messsage</span>
                </label>
                <textarea
                  name="messsage"
                  type="text"
                  placeholder="Messsage"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn bg-gradient-to-r from-indigo-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
