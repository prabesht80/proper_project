import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="containe mx-auto">
        <div className="flex justify-center py-24">
          <div className="w-2/5 md:w-1/5 bg-gray-50 py-4 px-8 rounded">
            <div>
              <h1 className="italic text-4xl text-center font-bold text-gray-700">
                Crypto
              </h1>
              <form className=" mt-8">
                <div className="flex flex-col ">
                  <div className="flex flex-col ">
                    <label
                      className="text-gray-700 text-medium font-semibold "
                      for="userName"
                    >
                      username
                    </label>
                    <input
                      className="p-2 rounded-lg shadow border focus:outline-none focus:shadow-out focus:ring-2 focus:ring-gray-400"
                      id="userName"
                      type="text"
                      placeholder="UserName.."
                    />
                  </div>
                  <div className="flex flex-col mt-2 ">
                    <label
                      className="text-gray-700 text-medium font-semibold "
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      className="p-2 rounded-lg shadow border focus:outline-none focus:shadow-out focus:ring-2 focus:ring-gray-400"
                      id="password"
                      type="password"
                      placeholder="******"
                    />
                  </div>
                  <div class="mt-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      <Link to="/homepage">Login</Link>
                    </button>
                  </div>
                  <div className=" flex justify-between mt-2 ">
                    <div className="w-32 h-0.5 border mt-3 bg-gray-100"></div>
                    <div>OR</div>
                    <div className="w-32 h-0.5 border mt-3 bg-gray-400"></div>
                  </div>
                  <p className="mb-2 text-center text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
                    Forget password?
                  </p>
                  <p className="mb-4 text-center text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
                    Don't have an Account?{' '}
                    <span className="text-blue-700 hover:text-blue-500">
                      <Link to="/"> sign up</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
