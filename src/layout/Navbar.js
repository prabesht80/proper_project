import React, { useEffect, useState } from 'react';
import { BsCurrencyExchange } from 'react-icons/bs';
import { ImStatsBars2 } from 'react-icons/im';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  useEffect(() => {
    //grab mobile responsive nav
    const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    //add event
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });

  const handleClick = () => {
    setClick(!click);
  };

  return (
    //   navbar container
    <nav className="text-gray-700 font-medium">
      <div className="py-3">
        <div className="flex justify-around">
          {/* Logo   */}

          <div>
            <span className="text-3xl font-medium">
              <Link to="/homepage">CRYPTO</Link>
            </span>
          </div>

          {/* primary nav */}

          <div>
            <ul className="hidden mt-3 sm:flex space-x-16 ">
              <Link to="/exchanges">
                <li className="hover:text-yellow-400">Exchanges</li>
              </Link>
              <Link to="/cryptocurrency">
                <li className="hover:text-yellow-400">Market</li>
              </Link>
              <Link to="/news">
                <li className="hover:text-yellow-400">Discover</li>
              </Link>
            </ul>
          </div>

          {/* secondary nav */}

          <div className="hidden mt-1 sm:flex space-x-5">
            <button className="hover:text-yellow-400">
              <Link to="/login">Login</Link>
            </button>
            <button className="p-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-200 ring-offset-1">
              <Link to="/">Register</Link>
            </button>
          </div>

          {/* mobile button */}
          <div className="sm:hidden flex item-center ">
            <button className="mobile-menu-button" onClick={handleClick}>
              <GiHamburgerMenu className=" h-12 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      <div className="mobile-menu hidden sm:hidden p-5 mt-2 w-1/2 absolute right-0  bg-white">
        <ul className={click ? 'mx-3 text-lg flex flex-col' : 'hidden'}>
          <Link to="/login">
            <li>
              <div className="p-2 text-center hover:text-yellow-400">Login</div>
            </li>
          </Link>
          <Link to="/">
            <li>
              <div className="p-3 text-center rounded-lg bg-yellow-400 hover:bg-yellow-300">
                Register
              </div>
            </li>
          </Link>
          <Link to="/exchanges">
            <li
              className="mt-5 flex hover:text-yellow-400 "
              onClick={handleClick}
            >
              <BsCurrencyExchange />
              Exchange
            </li>
          </Link>
          <Link to="/cryptocurrency">
            <li
              className="mt-3 flex hover:text-yellow-400"
              onClick={handleClick}
            >
              <ImStatsBars2 />
              Market
            </li>
          </Link>
          <Link to="/news">
            <li
              className="mt-3 flex hover:text-yellow-400"
              onClick={handleClick}
            >
              <RiCompassDiscoverLine />
              Discover
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
