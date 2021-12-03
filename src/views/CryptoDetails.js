import React from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { HiCurrencyDollar, HiExclamationCircle } from 'react-icons/hi';
import { FcCurrencyExchange } from 'react-icons/fc';
import { GiTrophyCup, GiThunderball } from 'react-icons/gi';
import { BiChart, BiCheck } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';

import { useParams } from 'react-router';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const CryptoDetails = () => {
  const { coinId } = useParams();

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  console.log(data);
  const coinDetails = data?.data?.coin;

  if (isFetching) return <div className="animate-spin"></div>;

  return (
    <div className="m-auto max-w-screen-md xl:max-w-screen-lg mt-16 mb-10 ">
      <div className="flex flex-wrap justify-between ml-2 sm:ml-0">
        {/* bitcoin value stat */}
        <div className="text-gray-600">
          <h1 className="text-3xl font-semibold text-black mb-2 ">
            {coinDetails.name} Value Statistics
          </h1>
          <p className="text-md font-bold mb-4">
            An overvies showing the stats of {coinDetails.name}
          </p>
          <div className="flex">
            <div className="font-semibold">
              <h3 className="flex m-2">
                <HiCurrencyDollar className />
                Price to USD
              </h3>
              <h3 className="flex m-2">
                <FaAngleDoubleUp />
                Rank
              </h3>
              <h3 className="flex m-2">
                <GiThunderball />
                24h Volume
              </h3>
              <h3 className="flex m-2">
                <HiCurrencyDollar />
                Market Cap
              </h3>
              <h3 className="flex m-2">
                <GiTrophyCup />
                All-time-high
              </h3>
            </div>
            <div className="flex flex-col font-bold">
              <span className="m-1.5">${millify(coinDetails.price)}</span>
              <span className="mt-1.5">{coinDetails.rank}</span>
              <span className="m-1.5">${millify(coinDetails.volume)}</span>
              <span className="m-1">${millify(coinDetails.marketCap)}</span>
              <span className="m-1">
                ${millify(coinDetails.allTimeHigh.price)}
              </span>
            </div>
          </div>
        </div>
        {/* graph */}
        <div className=" hidden md:flex text-lg font-bold rounded-lg bg-yellow-400 text-center mt-28 mb-28 p-4">
          Graph
        </div>
        {/* other Statistics */}
        <div className="text-gray-600">
          <h1 className="text-3xl font-semibold text-black mb-2 ">
            Other Statistics
          </h1>
          <p className="text-md font-bold mb-4">
            An overview showing other stats.
          </p>
          <div className="flex">
            <div className="font-semibold">
              <h3 className="flex m-2">
                <BiChart className />
                Number Of Markets
              </h3>
              <h3 className="flex m-2">
                <FcCurrencyExchange />
                Number Of Exchanges
              </h3>
              <h3 className="flex m-2">
                <HiExclamationCircle />
                Approved Supply
              </h3>
              <h3 className="flex m-2">
                <HiExclamationCircle />
                Total Supply
              </h3>
              <h3 className="flex m-2">
                <HiExclamationCircle />
                Circulating Supply
              </h3>
            </div>
            <div className="flex flex-col font-bold">
              <span className="m-1.5">{coinDetails.numberOfMarkets}</span>
              <span className="mt-1.5">{coinDetails.numberOfExchanges}</span>
              <span className="m-1.5">
                {coinDetails.approvedSuppply ? <ImCross /> : <BiCheck />}
              </span>
              <span className="m-1">${millify(coinDetails.totalSupply)}</span>
              <span className="m-1">
                ${millify(coinDetails.circulatingSupply)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* coin description */}
      <div className="mt-8">
        <h1 className="text-3xl font-semibold text-black mb-4">About</h1>
        <p className="ml-2 text-gray-600 font-medium">
          {HTMLReactParser(coinDetails.description || '')}
        </p>
      </div>
    </div>
  );
};

export default CryptoDetails;
