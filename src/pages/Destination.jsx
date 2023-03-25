import React, { useState } from 'react';
import { destinations } from './data.json';

const Destination = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const toggleTab = (index) => {
    setCurrentTab(index);
  };

  return (
    <section className="min-h-screen bg-destination-mobile-bg bg-cover bg-center bg-no-repeat text-white md:bg-destination-tablet-bg lg:bg-destination-desktop-bg">
      <div className="items-center justify-center gap-40 pt-[88px] md:pt-[136px] lg:flex lg:h-screen">
        <div>
          <h2 className="text-center font-barlow-condensed text-base uppercase tracking-widest text-white md:pl-10 md:text-left md:text-xl lg:pl-0 lg:text-3xl">
            <span className="mr-4 font-bold opacity-25">01</span>pick your
            destination
          </h2>
          <div className="mx-auto mt-8 h-[170px] w-[170px] md:mt-[60px] md:h-[300px] md:w-[300px] lg:mt-24 lg:h-[445px] lg:w-[445px]">
            {destinations.map((item, index) => (
              <img
                key={index}
                className={currentTab === index ? 'block' : 'hidden'}
                src={item.images.png}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="lg:mt-16 lg:max-w-[445px]">
          <ul className="mx-auto mt-7 flex h-7 w-[237px] justify-between md:mt-[53px] md:h-[34px] md:w-[285px] lg:m-0">
            {destinations.map((item, index) => (
              <li
                tabIndex={0}
                onClick={() => toggleTab(index)}
                onKeyDown={(e) =>
                  e.key === 'Enter' ? setCurrentTab(index) : null
                }
                key={index}
                className={`cursor-pointer font-barlow-condensed text-sm uppercase tracking-widest text-light ${
                  currentTab === index ? 'border-b-2' : 'hover:border-b-2'
                } md:text-base`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`${
                currentTab === index ? 'block' : 'hidden'
              } mx-auto mt-5 max-w-[327px] pb-14 md:mt-8 md:max-w-[537px] md:pb-16 lg:pb-0`}
            >
              <h3 className="text-center font-bellefair text-[56px] uppercase md:text-[80px] lg:mt-9 lg:text-left lg:text-8xl">
                {item.name}
              </h3>

              <p className="text-center font-barlow text-[15px] text-light lg:mt-4 lg:text-left lg:text-lg">
                {item.description}
              </p>

              <hr className="mt-8 h-[1px] border-none bg-[#383B4B] md:mt-12 lg:mt-[54px]" />

              <div className="mt-8 flex flex-col justify-between gap-8 text-center uppercase md:flex-row md:justify-center md:gap-24 lg:justify-start lg:gap-16 lg:text-left">
                <div>
                  <span className="block font-barlow-condensed text-sm text-light">
                    avg. distance
                  </span>
                  <span className="mt-3 block font-bellefair text-3xl text-white">
                    {item.distance}
                  </span>
                </div>
                <div>
                  <span className="block font-barlow-condensed text-sm text-light">
                    est. travel time
                  </span>
                  <span className="mt-3 block font-bellefair text-3xl text-white">
                    {item.travel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
