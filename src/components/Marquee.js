import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Marquee = () => {
  const count = 50;
  const { data, isFetching } = useGetCryptosQuery(count);
  const coindataForMarquee = data?.data?.coins;
  // console.log(data);
  // console.log(coindataForMarquee[0].allTimeHigh.price);

  if (isFetching) return <div className="animate-spin"></div>;

  const firstSlice = coindataForMarquee.slice(0, 6);
  const secondSlice = coindataForMarquee.slice(6, 12);

  const thirdSlice = coindataForMarquee.slice(12, 18);

  return (
    <>
      <div className="">
        <div className="flex flex-wrap flex-row justify-evenly ml-2 ">
          <div>
            <marquee
              behavior="scroll"
              direction="up"
              scrollamount="9"
              height="50px"
              className=" md:ml-6 mt-12"
            >
              <div>
                {firstSlice.map((item) => {
                  return (
                    <div className="p-3">
                      <span key={item.id}>{item.symbol}:-</span>
                      <span>{item.price}</span>
                    </div>
                  );
                })}
              </div>
            </marquee>
          </div>
          <div>
            <marquee
              behavior="scroll"
              direction="up"
              scrollamount="5"
              height="50px"
              className="mt-12"
            >
              <div className="p-3">
                {secondSlice.map((item) => {
                  return (
                    <div className="p-3">
                      <span key={item.id}>{item.symbol}:-</span>
                      <span>{item.price}</span>
                    </div>
                  );
                })}
              </div>
            </marquee>
          </div>
          <div>
            <marquee
              behavior="scroll"
              direction="up"
              scrollamount="3"
              height="50px"
              className="mt-12 hidden lg:block "
            >
              <div>
                {thirdSlice.map((item) => {
                  return (
                    <div className="p-3">
                      <span key={item.id}>{item.symbol}:-</span>
                      <span>{item.price}</span>
                    </div>
                  );
                })}
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
