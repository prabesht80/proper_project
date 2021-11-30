import React, { useEffect } from 'react';
import { BsCurrencyExchange } from 'react-icons/bs';
import { ImStatsBars2 } from 'react-icons/im';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  useEffect(() => {
    //grab mobile responsive nav
    const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    //add event
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });

  return (
    //   navbar container
    <nav className="text-gray-700">
      <div className="p-3 ">
        <div className="flex justify-around">
          {/* Logo   */}

          <div>
            <a href="#">
              <span className="text-3xl font-medium">CRYPTO</span>
            </a>
          </div>

          {/* primary nav */}

          <div>
            <ul className="hidden mt-3 sm:flex space-x-8">
              <li>
                <a href="#">Exchange</a>
              </li>
              <li>
                <a href="#">Market</a>
              </li>
              <li>
                <a href="#">Discover</a>
              </li>
            </ul>
          </div>

          {/* secondary nav */}

          <div className="hidden mt-1 sm:flex space-x-5">
            <button>Login</button>
            <button className="p-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-200 ring-offset-1">
              Register
            </button>
          </div>

          {/* mobile button */}
          <div className="sm:hidden flex item-center ">
            <button className="mobile-menu-button">
              <GiHamburgerMenu className=" h-12 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      <div className="mobile-menu hidden sm:hidden p-5 mt-2 w-1/2 absolute right-0 ">
        <ul className="mx-3 text-lg flex flex-col">
          <li>
            <div className="p-2 text-center">Login</div>
          </li>
          <li>
            <div className="p-3 text-center rounded-lg bg-yellow-400 hover:bg-yellow-300">
              Register
            </div>
          </li>
          <li className="mt-5 flex">
            <BsCurrencyExchange />
            <a href="#">Exchange</a>
          </li>
          <li className="mt-3 flex">
            <ImStatsBars2 />
            <a href="#">Market</a>
          </li>
          <li className="mt-3 flex">
            <RiCompassDiscoverLine />
            <a href="#">Discover</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
