import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';

const Hero3 = () => {
  const count = 6;
  const { data, isFetching } = useGetCryptosQuery(count);
  //only coins data
  const coinDataTopTen = data?.data?.coins;

  if (isFetching) return <div className="animate-spin"></div>;

  return (
    <div className="mt-12">
      <div>
        <div className="text-4xl font-semibold mb-8 ml-2 sm:ml-36">
          <span>Market trend</span>
        </div>
        <div>
          {/* homepage vrypto table */}
          <table className=" w-5/6 text-center">
            <tr className="text-gray-700">
              <th>Name</th>
              <th>Last Price</th>
              <th>24h change</th>
              <th>Markets</th>
            </tr>

            {coinDataTopTen.map((coin) => {
              return (
                <tr className="text-md sm:text-2xl">
                  <td className="flex flex-row m-3 sm:ml-36 rounded-lg hover:bg-gray-200">
                    <Link to={`/crypto/${coin.id}`}>
                      <img src={coin.iconUrl} alt="#" className="w-10 h-8" />

                      {coin.symbol}
                      {coin.name}
                    </Link>
                  </td>
                  <td>${Math.round(coin.price * 100) / 100}</td>
                  <td>
                    {coin.change < 0 ? (
                      <p style={{ color: 'red' }}>{coin.change}%</p>
                    ) : (
                      <p style={{ color: 'green' }}>{coin.change}%</p>
                    )}
                  </td>
                  <td>------</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="text-center text-gray-500 ">
          <span className="cursor-pointer hover:bg-gray-200">
            <Link to="/cryptocurrency">View more market ></Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
