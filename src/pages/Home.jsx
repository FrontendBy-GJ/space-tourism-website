import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Home = () => {
  return (
    <>
      <Container
        className={`bg-mobile-bg pb-[4vh] sm:pb-[9vh] md:bg-tablet-bg lg:bg-desktop-bg landscape:sm:grid-cols-2 landscape:md:pb-[10vh] landscape:lg:pb-[10vh]`}
      >
        <div className="max-w-xs self-end text-center sm:max-w-sm lg:text-left landscape:text-left">
          <h1 className="font-barlow-condensed text-base uppercase tracking-widest text-light sm:text-xl lg:text-3xl">
            So, you want to travel to
            <span className="block font-bellefair text-7xl leading-[120px] text-white sm:text-9xl sm:leading-[150px] lg:text-[150px] lg:leading-normal landscape:sm:-translate-x-3">
              Space
            </span>
          </h1>
          <p className="font-barlow text-[15px] text-light lg:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* TODO */}
        {/* button to link tag (router) */}
        <div className="z-10 aspect-square w-36 self-end focus:outline-none sm:w-60 lg:w-72 landscape:lg:ml-36">
          <Link
            to={'/destination'}
            // tabIndex={-1}
            className="relative inline-grid  h-full w-full place-items-center rounded-full bg-white font-bellefair text-xl font-normal uppercase tracking-widest text-dark ease-out before:absolute before:inset-0 before:-z-10 before:scale-[1.3] before:rounded-full before:bg-white/25 before:opacity-0 before:transition-all before:duration-700 before:hover:opacity-100 focus:outline-none focus:ring-offset-4 focus:ring-offset-transparent focus-visible:ring sm:text-3xl before:sm:scale-[1.4] lg:text-4xl"
          >
            Explore
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Home;
