import React from 'react';

const Register = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/* row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* column */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')`,
              }}
            ></div>
            {/* column */}
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h2 className="text-2xl text-center">Create an Account</h2>
              <form className=" px-2 pt-8 pb-4 mb-4 bg-white-100 ">
                <div className="md:flex md:justify-between">
                  <div className="">
                    <label
                      for="firstName"
                      className="text-sm block font-bold text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full text-sm px-3 py-2 rounded shadow focus:outline-none focus:shadow-outline text-gray-700"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mt-4 md:mt-0">
                    <label
                      for="lastName"
                      className="text-sm block font-bold text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full text-sm px-3 py-2 rounded shadow focus:outline-none focus:shadow-outline text-gray-700"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mt-4 ">
                  <div>
                    <label
                      for="email"
                      className="text-sm block font-bold text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      className="w-full text-sm px-3 py-2 rounded shadow focus:outline-none focus:shadow-outline text-gray-700"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mt-4 md:flex md:justify-between">
                  <div>
                    <label
                      for="password"
                      className="text-sm block font-bold text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      className="w-full text-sm px-3 py-2 rounded shadow focus:outline-none focus:shadow-outline text-gray-700"
                      id="password"
                      type="password"
                      placeholder="***********"
                    />
                    <p className=" hidden md:block mt-2 text-sm font-medium text-gray-500">
                      please choose strong password
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <label
                      for="cpassword"
                      className="text-sm block font-bold text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      className="w-full text-sm px-3 py-2 rounded shadow focus:outline-none focus:shadow-outline text-gray-700"
                      id="cpassword"
                      type="password"
                      placeholder="***********"
                    />
                    <p className=" block md:hidden mt-2 text-sm font-medium text-gray-500">
                      please choose strong password
                    </p>
                  </div>
                </div>
                <div class="mt-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                </div>

                <hr className="mt-4 mb-4 bottom-t" />
                <p className="text-center text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
                  Forget password?
                </p>
                <p className="text-center text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
                  Aready ave an Account..
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
