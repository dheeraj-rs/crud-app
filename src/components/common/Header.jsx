import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav
      className="relative flex w-full flex-wrap items-center justify-between bg-gray-900 py-2 shadow-dark-mild dark:bg-black/90 lg:py-4 shadow-md">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <nav className="w-full rounded-md" aria-label="breadcrumb">
          <ol className="list-reset ms-2 flex">
            <li>
              <Link
                to="/"
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
              >Home
              </Link>
            </li>
            <li>
              <span className="mx-2 text-black/60 dark:text-white/60">/</span>
            </li>
            <li>
              <Link
                to="/create"
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
              >Create
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  </header>
);

export default Header;
