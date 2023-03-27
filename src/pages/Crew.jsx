import React, { useState } from 'react';
import { crew } from './data.json';

const Crew = () => {
  const [curentCrew, setCurentCrew] = useState(0);

  const toggleCrew = (index) => {
    setCurentCrew(index);
  };

  return (
    <section className="min-h-screen bg-crew-mobile-bg bg-cover bg-center bg-no-repeat md:bg-crew-tablet-bg lg:bg-crew-desktop-bg">
      <div className="flex-col pt-[88px] md:pt-[136px] lg:ml-44 lg:flex 3xl:ml-96">
        <h2 className="text-center font-barlow-condensed text-base uppercase tracking-widest text-white md:pl-10 md:text-left md:text-xl lg:hidden lg:pl-0 lg:text-3xl">
          <span className="mr-4 font-bold opacity-25">02</span>meet your crew
        </h2>

        <div className="mx-auto flex flex-col items-center  md:mt-[60px] md:w-[458px] md:flex-col-reverse lg:m-0 lg:w-full lg:flex-row-reverse">
          <div className="mx-auto mt-8 h-[223px] w-[327px] border-b-[1px] border-[#383B4B] md:h-[572px] md:w-[456.37px] md:border-none xl:h-[712px] xl:w-[568px]">
            {crew.map((item, index) => (
              <img
                key={index}
                src={item.images.png}
                alt={`${item.role} ${item.name}`}
                className={`mx-auto h-full object-cover ${
                  curentCrew === index ? 'block' : 'hidden'
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col md:flex-col-reverse lg:mt-[76px] lg:w-[614px] lg:self-start">
            <ul className="my-8 mx-auto flex h-[10px] w-[88px] justify-between lg:mx-0 lg:mt-[120px]">
              <li
                tabIndex={0}
                onClick={() => toggleCrew(0)}
                onKeyDown={(e) => (e.key === 'Enter' ? toggleCrew(0) : null)}
                className={`h-full w-[10px] cursor-pointer rounded-full ${
                  curentCrew === 0 ? 'bg-white' : 'bg-white/25 hover:bg-white'
                }`}
              ></li>
              <li
                tabIndex={0}
                onClick={() => toggleCrew(1)}
                onKeyDown={(e) => (e.key === 'Enter' ? toggleCrew(1) : null)}
                className={`h-full w-[10px] cursor-pointer rounded-full ${
                  curentCrew === 1 ? 'bg-white' : 'bg-white/25 hover:bg-white'
                }`}
              ></li>
              <li
                tabIndex={0}
                onClick={() => toggleCrew(2)}
                onKeyDown={(e) => (e.key === 'Enter' ? toggleCrew(2) : null)}
                className={`h-full w-[10px] cursor-pointer rounded-full ${
                  curentCrew === 2 ? 'bg-white' : 'bg-white/25 hover:bg-white'
                }`}
              ></li>
              <li
                tabIndex={0}
                onClick={() => toggleCrew(3)}
                onKeyDown={(e) => (e.key === 'Enter' ? toggleCrew(3) : null)}
                className={`h-full w-[10px] cursor-pointer rounded-full ${
                  curentCrew === 3 ? 'bg-white' : 'bg-white/25 hover:bg-white'
                }`}
              ></li>
            </ul>
            {crew.map((item, index) => (
              <div
                key={index}
                className={`${
                  curentCrew === index ? 'block' : 'hidden'
                } mx-auto w-[327px] text-center md:w-full lg:mt-[154px] lg:text-left`}
              >
                <span className="block font-bellefair uppercase text-white/50 md:text-2xl lg:text-[32px]">
                  {item.role}
                </span>
                <h3 className="mt-2 font-bellefair text-2xl uppercase text-white md:text-[40px] xl:mt-4 xl:text-[56px]">
                  {item.name}
                </h3>
                <p className="mt-4 font-barlow text-[15px] text-light md:text-base lg:mt-7 lg:w-[444px] lg:text-lg">
                  {item.bio}
                </p>
              </div>
            ))}
            <h2 className="hidden text-center font-barlow-condensed text-base uppercase tracking-widest text-white md:pl-10 md:text-left md:text-xl lg:block lg:pl-0 lg:text-3xl">
              <span className="mr-4 font-bold opacity-25">02</span>meet your
              crew
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
