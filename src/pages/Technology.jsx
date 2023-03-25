import React, { useState } from 'react';
import { technology } from './data.json';

const Technology = () => {
  const [fact, setFact] = useState(0);

  const toggleFact = (index) => {
    setFact(index);
  };

  return (
    <section className="min-h-screen bg-technology-mobile-bg bg-cover bg-center bg-no-repeat text-white md:bg-technology-tablet-bg lg:bg-technology-desktop-bg">
      <div className="mx-auto max-w-screen-3xl pt-[88px] md:pt-[136px] lg:pt-[212px] lg:pl-[165px] 3xl:px-96">
        <h2 className="text-center font-barlow-condensed text-base uppercase tracking-widest text-white md:pl-10 md:text-left md:text-xl lg:pl-0 lg:text-3xl">
          <span className="mr-4 font-bold opacity-25">03</span>space launch 101
        </h2>
        <div className="flex-row-reverse items-center justify-between pt-8 md:pt-[60px] lg:flex lg:p-0">
          {technology.map((item, index) => (
            <div
              key={index}
              className={`${fact === index ? 'block' : 'hidden'} shrink-0`}
            >
              <img
                src={item.images.portrait}
                alt=""
                className={`${
                  fact === index ? 'block portrait:hidden' : 'hidden'
                } mx-auto`}
              />
              <img
                src={item.images.landscape}
                alt=""
                className={`${
                  fact === index ? 'block landscape:hidden' : 'hidden'
                } mx-auto`}
              />
            </div>
          ))}
          <div className="gap-20 lg:flex">
            <ul className="flex justify-center gap-4 pt-[34px] md:pt-14 lg:flex-col lg:gap-8">
              {[1, 2, 3].map((num, index) => (
                <li
                  tabIndex={0}
                  onClick={() => toggleFact(index)}
                  onKeyDown={(e) => (e.key === 'Enter' ? setFact(index) : null)}
                  key={index}
                  className={`flex aspect-square w-[60px] cursor-pointer items-center justify-center rounded-full border border-white border-opacity-25 font-bellefair text-2xl hover:bg-white hover:text-black focus:outline-none focus:ring-offset-4 focus:ring-offset-black focus-visible:ring lg:w-20 lg:text-[32px] ${
                    fact === index
                      ? 'bg-white text-black transition-colors duration-200 ease-in'
                      : 'bg-transparent text-white transition-colors duration-200 ease-in'
                  }`}
                >
                  {num}
                </li>
              ))}
            </ul>
            {technology.map((item, index) => (
              <article
                key={index}
                className={`${
                  fact === index ? 'block' : 'hidden'
                } mx-auto pt-[26px] text-center md:pt-11 md:pb-24 lg:text-left`}
              >
                <span className="block font-barlow-condensed text-sm uppercase text-light md:text-base">
                  the terminology...
                </span>
                <h3 className="font-bellefair text-2xl uppercase text-white md:pt-4 md:text-[40px] md:leading-[45px] lg:pt-3 lg:text-[56px] lg:leading-[64px]">
                  {item.name}
                </h3>
                <p className="mx-auto w-[327px] font-barlow leading-6 text-light md:w-[458px] md:pt-5 md:text-base lg:w-[444px] lg:pt-4 lg:text-lg lg:leading-8">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
