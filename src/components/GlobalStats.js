import React from 'react';
import millify from 'millify';

const GlobalStats = ({ globalStats }) => {
  return (
    <div className=" sm:ml-32 text-gray-700">
      {/* globalStats data*/}
      <div className=" w-1/2  mt-16 mb-20">
        <h1 className="text-3xl font-semibold ml-2">Global Crypto Stats</h1>
        <div className="mt-8  flex flex-wrap">
          <div className="flex flex-col p-3">
            <span className="text-lg font-medium">Total Cryptocurrencies</span>
            <span className="text-xl font-bold hover:text-yellow-300">
              {globalStats.total}
            </span>
          </div>
          <div className="flex flex-col p-3">
            <span className="text-lg font-medium">Total Exchanges</span>
            <span className="text-xl font-bold hover:text-yellow-300">
              {globalStats.totalExchanges}
            </span>
          </div>
          <div className="flex flex-col p-3">
            <span className="text-lg font-medium">Total Market Cap</span>
            <span className="text-xl font-bold hover:text-yellow-300">
              {millify(globalStats.totalMarketCap)}
            </span>
          </div>
          <div className="flex flex-col p-3">
            <span className="text-lg font-medium">Total 24h Volume</span>
            <span className="text-xl font-bold hover:text-yellow-300">
              {millify(globalStats.total24hVolume)}
            </span>
          </div>
          <div className="flex flex-col p-3">
            <span className="text-lg font-medium">Total Markets</span>
            <span className="text-xl font-bold hover:text-yellow-300">
              {millify(globalStats.totalMarkets)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
