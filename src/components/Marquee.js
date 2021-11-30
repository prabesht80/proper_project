import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Marquee = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const coindataForMarquee = data?.data?.coins;
  // console.log(data);
  // console.log(coindataForMarquee[0].allTimeHigh.price);

  if (isFetching) return 'loading..';

  const firstSlice = coindataForMarquee.slice(0, 6);
  const secondSlice = coindataForMarquee.slice(6, 12);

  const thirdSlice = coindataForMarquee.slice(12, 18);

  return (
    <>
      <div className="flex justify-around content-center ">
        <div>
          <marquee
            behavior="scroll"
            direction="up"
            scrollamount="2"
            height="50px"
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
    </>
  );
};

export default Marquee;
