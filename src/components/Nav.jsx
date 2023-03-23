import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hamburgerIcon, closeIcon, logo } from '../assets/shared';

const Nav = () => {
  const [nav, setNav] = useState(false);

  function toggleNav() {
    setNav((prev) => !prev);
  }

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-auto flex  items-center justify-between px-7 md:pl-10 lg:top-10 3xl:pl-80">
      <img
        tabIndex={0}
        src={logo}
        alt="logo"
        className="h-10 w-10 cursor-pointer"
      />

      <nav>
        <ul
          className={`${
            nav ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          } fixed inset-y-0 right-0 z-50 flex w-64 flex-col space-y-6 bg-white/5 px-8 pt-[18vh] font-barlow-condensed  uppercase text-light backdrop-blur-lg transition duration-300 ease-out  after:absolute after:-left-1/2 after:bottom-1/2 after:hidden after:h-0.5 after:w-full after:max-w-md after:-translate-x-2 after:translate-y-1/2  after:bg-white/25 md:h-24 md:w-[450px]  md:flex-row md:space-y-0 md:space-x-10 md:px-0 md:pt-0 xl:top-4 xl:w-[830px] after:xl:block after:3xl:max-w-4xl after:3xl:-translate-x-96`}
        >
          {links.map((link) => (
            <li
              key={link.link}
              className="md:first:ml-12 md:hover:border-b-2 xl:first:ml-32"
            >
              <Link to={link.to} className="md:inline-block md:pt-9">
                <span
                  aria-hidden="true"
                  className="mr-2 font-bold md:hidden xl:inline-block"
                >
                  {link.number}
                </span>

                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <img
        src={nav ? closeIcon : hamburgerIcon}
        alt="menu button"
        className="z-50 h-5 w-6 cursor-pointer object-cover md:hidden"
        onClick={toggleNav}
      />
    </header>
  );
};

export default Nav;

const links = [
  {
    link: 'Home',
    number: '00',
    to: '/',
  },
  {
    link: 'Destination',
    number: '01',
    to: '/destination',
  },
  {
    link: 'Crew',
    number: '02',
    to: '/crew',
  },
  {
    link: 'Technology',
    number: '03',
    to: '/technology',
  },
];
