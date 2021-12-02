import React, { useEffect } from 'react';
import { BsCurrencyExchange } from 'react-icons/bs';
import { ImStatsBars2 } from 'react-icons/im';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

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
    <nav className="text-gray-700 font-medium">
      <div className="py-3">
        <div className="flex justify-around">
          {/* Logo   */}

          <div>
            <span className="text-3xl font-medium">
              <Link to="/">CRYPTO</Link>
            </span>
          </div>

          {/* primary nav */}

          <div>
            <ul className="hidden mt-3 sm:flex space-x-16 ">
              <li className="hover:text-yellow-400">
                <Link to="/exchanges">Exchanges</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/cryptocurrency">Market</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/news">Discover</Link>
              </li>
            </ul>
          </div>

          {/* secondary nav */}

          <div className="hidden mt-1 sm:flex space-x-5">
            <button className="hover:text-yellow-400">Login</button>
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
      <div className="mobile-menu hidden sm:hidden p-5 mt-2 w-1/2 absolute right-0  bg-white">
        <ul className="mx-3 text-lg flex flex-col">
          <li>
            <div className="p-2 text-center hover:text-yellow-400">Login</div>
          </li>
          <li>
            <div className="p-3 text-center rounded-lg bg-yellow-400 hover:bg-yellow-300">
              Register
            </div>
          </li>
          <li className="mt-5 flex hover:text-yellow-400">
            <BsCurrencyExchange />
            <Link to="/exchanges">Exchange</Link>
          </li>
          <li className="mt-3 flex hover:text-yellow-400">
            <ImStatsBars2 />
            <Link to="/cryptocurrency">Market</Link>
          </li>
          <li className="mt-3 flex hover:text-yellow-400">
            <RiCompassDiscoverLine />
            <Link to="/news">Discover</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
